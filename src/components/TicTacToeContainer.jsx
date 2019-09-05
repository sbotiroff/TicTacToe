import React, { Component } from 'react';
import TicTacToeBox from './TicTacToeBox';
import PlayerTurn from './PlayerTurn';
import WinnerStatus from './WinnerStatus';
import './TicTacToeContainer.css';


class TicTacToeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isXTurn: true,
            x: "x",
            o: "o",
            boxes: ["", "", "", "", "", "", "", "", ""],
            winner:null
        }
    }
    setValue(index) {
        const { boxes, isXTurn, x, o } = this.state;
        const newBox = [...boxes];
        let currentPlayer = !isXTurn ? o : x;

        if (newBox[index] === "") {
            newBox[index] = currentPlayer;
            this.setState({
                boxes: newBox,
                isXTurn: !isXTurn
            }, this.hasWinner);
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
            { i1: 6, i2: 7, i3: 8 },

        ];

        const { boxes } = this.state;
        for (let i = 0; i < winningNumbers.length; i++) {
            let element1 = boxes[winningNumbers[i].i1];
            let element2 = boxes[winningNumbers[i].i2];
            let element3 = boxes[winningNumbers[i].i3];
            let isEqual = (
                element1 === element2 &&
                element1 === element3 &&
                element2 === element3 &&
                element1 !== ""
            )
            if (isEqual) {
                const box = ["", "", "", "", "", "", "", "", ""];
                this.setState({ 
                    boxes: box,
                    winner:"good job hey player : " + element1
                });
                return true;
            }
        }
        return false;
    }

    render() {
        const { boxes } = this.state;

        return (
            <div>
                <div className="TicTacToeContainer">
                    {boxes.map((box, index) => {
                        return <TicTacToeBox key={index} onClick={() => this.setValue(index)} xOrO={boxes[index]} />
                    })}
                </div>
                <PlayerTurn isXTurn = {this.state.isXTurn}/>
                <WinnerStatus winner = {this.state.winner}/>
            </div>

        );
    }

}

export default TicTacToeContainer;