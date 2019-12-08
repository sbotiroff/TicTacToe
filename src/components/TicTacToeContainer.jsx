import React, { Component } from "react";
import TicTacToeBox from "./TicTacToeBox";
import PlayerTurn from "./PlayerTurn";
import WinnerStatus from "./WinnerStatus";
import "./TicTacToeContainer.css";
import Zoom from "react-reveal/Zoom";

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isXTurn: true,
      x: "X",
      o: "O",
      boxes: ["", "", "", "", "", "", "", "", ""],
      winner: null,
      showRestartBtn: false
    };
  }
  setValue(index) {
    const { boxes, isXTurn, x, o, showRestartBtn } = this.state;
    const newBox = [...boxes];
    let currentPlayer = !isXTurn ? o : x;

    if (newBox[index] === "" && !showRestartBtn) {
      newBox[index] = currentPlayer;
      this.setState(
        {
          boxes: newBox,
          isXTurn: !isXTurn
        },
        this.hasWinner
      );
    }
  }

  hasWinner() {
    const winningNumbers = [
      { i1: 0, i2: 1, i3: 2 },
      { i1: 0, i2: 3, i3: 6 },
      { i1: 0, i2: 4, i3: 8 },
      { i1: 1, i2: 4, i3: 7 },
      { i1: 2, i2: 5, i3: 8 },
      { i1: 2, i2: 4, i3: 6 },
      { i1: 3, i2: 4, i3: 5 },
      { i1: 6, i2: 7, i3: 8 }
    ];

    const { boxes } = this.state;
    for (let i = 0; i < winningNumbers.length; i++) {
      let element1 = boxes[winningNumbers[i].i1];
      let element2 = boxes[winningNumbers[i].i2];
      let element3 = boxes[winningNumbers[i].i3];
      let isEqual =
        element1 === element2 &&
        element1 === element3 &&
        element2 === element3 &&
        element1 !== "";
      if (isEqual) {
        const box = ["", "", "", "", "", "", "", "", ""];
        this.setState({
          isXTurn: true,
          winner: "Good job hey player : " + element1,
          showRestartBtn: true
        });
        return true;
      }
    }
    if (this.doBoxesFieldsFull()) {
      this.setState({
        winner: "No winner play again",
        showRestartBtn: true
      });

      return false;
    }

    return false;
  }

  restartGame = () => {
    this.setState({
      boxes: ["", "", "", "", "", "", "", "", ""],
      isXTurn: true,
      winner: null,
      showRestartBtn: false
    });
  };

  doBoxesFieldsFull() {
    const { boxes } = this.state;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] === "") {
        return false;
      }
    }

    return true;
  }

  render() {
    const { boxes, showRestartBtn } = this.state;
    return (
      <div className="TicTacToeContainer">
        {showRestartBtn ? (
          <WinnerStatus winner={this.state.winner} />
        ) : (
          <PlayerTurn isXTurn={this.state.isXTurn} />
        )}

        <div className="TicTacToeContainerBox">
          {boxes.map((box, index) => {
            return (
              <TicTacToeBox
                key={index}
                onClick={() => this.setValue(index)}
                xOrO={boxes[index]}
              />
            );
          })}
        </div>
        {showRestartBtn ? (
          <Zoom>
            <button
              onClick={this.restartGame}
              className="TicTacToeContainerBtn"
            >
              Restart Game
            </button>
          </Zoom>
        ) : null}
      </div>
    );
  }
}

export default TicTacToeContainer;
