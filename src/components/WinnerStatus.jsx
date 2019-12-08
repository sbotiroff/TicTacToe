import React from "react";
import "./WinnerStatus.css";

function winnerStatus({ winner }) {
  return (
    <div className="WinnerStatus">
      <p>{winner}</p>
    </div>
  );
}

export default winnerStatus;
