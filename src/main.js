import React from "react";
import { render } from "react-dom";
import Game from "./components/Game";
import "./style/style.scss";

const App = () => {
  return (
    <>
      <h1>Works</h1>
      <Game />
    </>
  );
};

render(<App />, document.getElementById("root"));
