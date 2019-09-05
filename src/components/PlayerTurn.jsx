import React from 'react';

function PlayerTurn(props){
    return(
        <div>
            <p>Player {props.isXTurn?'X':'O'}'s turn</p>
        </div>
    );
}

export default PlayerTurn;