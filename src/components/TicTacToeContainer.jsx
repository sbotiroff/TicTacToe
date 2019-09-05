import React, { Component } from 'react';
import TicTacToeBox from './TicTacToeBox';
import './TicTacToeContainer.css';


class TicTacToeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isXturn: true,
            x: "x",
            o: "o",
            boxes: ["", "", "", "", "", "", "", "", ""]
        }
    }
    setvalue(index) {
        const { boxes, isXturn, x, o } = this.state;
        const newBox = [...boxes];
        let currentPlayer = !isXturn ? o : x;

        if (newBox[index] === "") {
            newBox[index] = currentPlayer;
            this.setState({
                boxes: newBox,
                isXturn: !isXturn
            }, this.hasWinner);
        }
    }

    hasWinner(){
        const winningNumbers = [
            { i1:0, i2:1, i3:2 },
            { i1:0, i2:3, i3:6 },
            { i1:0, i2:4, i3:8 },
            { i1:1, i2:4, i3:7 },
            { i1:2, i2:5, i3:8 },
            { i1:2, i2:4, i3:6 },
            { i1:3, i2:4, i3:5 },
            { i1:6, i2:7, i3:8 },

        ];
        
        const {boxes} = this.state;
        for(let i = 0; i<winningNumbers.length; i++){
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
                alert("good job hey player : "+element1)
                const box =  ["", "", "", "", "", "", "", "", ""];
                this.setState({boxes: box});
                return true;
            }
        }
        return false;
    }

    render() {
        const { boxes } = this.state;

        return (
            <div className="TicTacToeContainer">
                {boxes.map((box, index) => {
                    return <TicTacToeBox key={index} onClick={() => this.setvalue(index)} xOrO={boxes[index]} />
                })}
            </div>
        );
    }

}

export default TicTacToeContainer;