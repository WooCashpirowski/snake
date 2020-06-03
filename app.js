import {
  update as updateSnake,
  render as drawSnake,
  SnakeSpeed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, render as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

document
  .querySelector(".restart")
  .addEventListener("click", () => (window.location = "/"));

function main(currentTime) {
  if (gameOver) {
    if (confirm("Klęska Węża! Naciśnij OK jeśli chcesz zagrać ponownie")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secSinceLastRender < 1 / SnakeSpeed) return;
  lastRenderTime = currentTime;

  update();
  render();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function render() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
