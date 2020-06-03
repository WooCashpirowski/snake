const gridSize = 21;

export function randomGridPos() {
  let randomPos = Math.ceil(Math.random() * gridSize);
  return {
    x: randomPos,
    y: randomPos,
  };
}

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > gridSize ||
    position.y < 1 ||
    position.y > gridSize
  );
}
