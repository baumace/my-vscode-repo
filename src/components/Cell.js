import React, {useContext} from 'react';
import {AppContext} from '../App';

function Cell({infoIdentifier, attemptVal}){
    const {board} = useContext(AppContext);
    const cellInfo = board[attemptVal][infoIdentifier];
    let cellID = "small";
    if (infoIdentifier == 0 || infoIdentifier == 1){
        cellID = "big";
    }
    if (attemptVal == 0) {
        cellID += "h";
    }
    return <div className = "cell" id = {cellID}>{cellInfo}</div>
}

export default Cell;