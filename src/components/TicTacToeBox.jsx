import React from "react";
import "./TicTacToeBox.css";
import Flip from "react-reveal/Flip";

function TicTacToeBox({ onClick, xOrO }) {
  return (
    <div onClick={onClick} className="TicTacToeBox">
      <Flip when={!!xOrO}>{xOrO}</Flip>
    </div>
  );
}
export default TicTacToeBox;
