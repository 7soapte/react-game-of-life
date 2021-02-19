const gameBrain = (arr) => {
  // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  // neighbour < 2 => cell dead
  // Any live cell with more than three live neighbours dies, as if by overpopulation.
  // neighbour > 3 => cell dead
  // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  // neighbours === 3 && cell === 0 => cell = 1;

  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i][j]) {
      }
    }
  }
};

export default gameBrain;
