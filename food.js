import { onSnake, expandSnake } from "./snake.js";
import { randomGridPos } from "./grid.js";

let foodPos = getRandomFoodPos();
let expansionRate = 1;

export function update() {
  if (onSnake(foodPos)) {
    expandSnake(expansionRate);
    foodPos = getRandomFoodPos();
  }
}

export function render(board) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = foodPos.y;
  foodElement.style.gridColumnStart = foodPos.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

function getRandomFoodPos() {
  let newPos;

  while (newPos == null || onSnake(newPos)) {
    newPos = randomGridPos();
  }
  return newPos;
}
