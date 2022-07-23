import React, {useContext} from 'react';
import {AppContext} from '../App';

function Cell({infoIdentifier, attemptVal}){
    const {board} = useContext(AppContext);
    const cell = board[attemptVal][infoIdentifier];
    return (
        <div className = "cell">{cell}</div>
    );
}

export default Cell;