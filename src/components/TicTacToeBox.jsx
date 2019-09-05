import React from 'react';
import './TicTacToeBox.css';

function TicTacToeBox({onClick, xOrO}){
    return(
        <div onClick={onClick} className="TicTacToeBox">
            {xOrO}
        </div>
    );
}
export default TicTacToeBox;