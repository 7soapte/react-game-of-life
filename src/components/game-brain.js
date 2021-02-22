export default function gameBrain(arr, arrRow, arrCols) {
  let newArr = [...arr];
  for (let i = 0; i < arrRow; i++) {
    for (let j = 0; j < arrCols; j++) {
      let sum = 0;
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          sum += arr[(i + k + arrRow) % arrRow][(j + l + arrCols) % arrCols];
        }
      }
      if (arr[i][j]) sum--;

      // Any live cell with two or three live neighbours survives.
      // Any dead cell with three live neighbours becomes a live cell.
      // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
      if (sum < 2 || sum > 3) {
        newArr[i][j] = 0;
      } else if (arr[i][j] === 0 && sum === 3) {
        newArr[i][j] = 1;
      }
    }
  }
  return newArr;
}
