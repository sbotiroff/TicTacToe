import React from "react";
import "./PlayerTurn.css";

function playerTurn(props) {
  return (
    <div className="PlayerTurn">
      <p>Player {props.isXTurn ? "X" : "O"}'s turn</p>
    </div>
  );
}

export default playerTurn;
