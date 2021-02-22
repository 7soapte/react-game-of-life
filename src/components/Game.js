import React, { useState, useEffect } from "react";
import gameBrain from "./game-brain";

const arrRows = 50;
const arrCols = 50;

const style = {
  display: "grid",
  gridTemplateColumns: `repeat(${arrCols}, 20px)`,
};

const Game = () => {
  const [grid, setGrid] = useState(
    Array.from(Array(arrRows), () => new Array(arrCols).fill(0))
  );
  const [start, setStart] = useState(false);

  function giveLife(i, j) {
    const placeholderGrid = [...grid];
    placeholderGrid[i][j] = 1;
    setGrid(placeholderGrid);
  }

  let intervalIdentifier = 0;
  const startGame = () => {
    let newGrid = [...grid];
    setGrid(gameBrain(newGrid, arrRows, arrCols));
  };
  useEffect(() => {
    if (start) {
      intervalIdentifier = setInterval(startGame, 100);
      startGame();
    } else {
      clearInterval(intervalIdentifier);
    }
  }, [start]);

  return (
    <>
      <button
        onClick={() => {
          setStart(!start);
        }}
      >
        {start ? "Stop" : "Start"}
      </button>
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
    </>
  );
};

export default Game;
