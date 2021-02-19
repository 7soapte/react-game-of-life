import React, { useState, useEffect } from "react";
import { gameBrain } from "./game-brain";

const arrRows = 40;
const arrCols = 40;

const style = {
  display: "grid",
  gridTemplateColumns: `repeat(${arrCols}, 20px)`,
};

const Game = () => {
  const [grid, setGrid] = useState(
    Array.from(Array(arrRows), () => new Array(arrCols).fill(0))
  );

  function giveLife(i, j) {
    const placeholderGrid = [...grid];
    placeholderGrid[i][j] = 1;
    setGrid(placeholderGrid);
  }

  return (
    <div style={style}>
      {grid.map((x, i) =>
        x.map((y, j) => (
          <span
            onClick={() => giveLife(i, j)}
            key={"cell" + i + j}
            className={"square" + (grid[i][j] ? " dark" : "")}
          ></span>
        ))
      )}
    </div>
  );
};

export default Game;
