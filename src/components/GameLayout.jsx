import React from 'react';
import PlayerTurn from './PlayerTurn';
import WinnerStatus from './WinnerStatus';
import TicTacToeContainer from './TicTacToeContainer';

function GameLayout(){
    return(
        <div>
            <TicTacToeContainer />
            <PlayerTurn />
            <WinnerStatus />
        </div>
    );
}

export default GameLayout;