import { getInputDirection } from "./input.js";

export let SnakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

document
  .querySelector(".easy")
  .addEventListener("click", () => (SnakeSpeed = 5));
document
  .querySelector(".medium")
  .addEventListener("click", () => (SnakeSpeed = 10));
document
  .querySelector(".hard")
  .addEventListener("click", () => (SnakeSpeed = 15));

export function update() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function render(board) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    board.appendChild(snakeElement);
  });
}

export function expandSnake(rate) {
  newSegments += rate;
}

export function onSnake(pos, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPos(segment, pos);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPos(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}
