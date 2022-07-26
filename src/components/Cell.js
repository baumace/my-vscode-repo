import React, {useContext} from 'react';
import {AppContext} from '../App';

function Cell({infoIdentifier, attemptVal}){
    const {board, correctPlayer} = useContext(AppContext);
    const cellInfo = board[attemptVal][infoIdentifier];
    const correct = "";
    const almost = "";
    let cellID = "small";
    
    if (infoIdentifier == 0 || infoIdentifier == 1){
        cellID = "big";
    }
    
    if (attemptVal == 0) {
        cellID += "h";
    } else {
        switch (infoIdentifier) {
            case 0:
                if (correctPlayer.player === cellInfo) {
                    cellID += "c";
                }

                break;
            case 1:
                if (correctPlayer.college === cellInfo) {
                    cellID += "c";
                }

                break;
            case 2:
                if (correctPlayer.year == cellInfo) {
                    cellID += "c";
                } else if (cellInfo != 0) {
                    const diff = correctPlayer.year - cellInfo;
                    if (diff < 0) {
                        // year is too low
                    } else {
                        // year is too high
                    }
                    if (diff <= 5 && diff >= -5) {
                        cellID += "a";
                    }
                }

                break;
            case 4:
                if (correctPlayer.round == cellInfo) {
                    cellID += "c";
                } else if (cellInfo != 0) {
                    const diff = correctPlayer.round - cellInfo;
                    if (diff < 0) {
                        // year is too low
                    } else {
                        // year is too high
                    }
                    if (diff <= 2 && diff >= -2) {
                        cellID += "a";
                    }
                }

                break;
            case 5:
                if (correctPlayer.pick == cellInfo) {
                    cellID += "c";
                } else if (cellInfo != 0) {
                    const diff = correctPlayer.pick - cellInfo;
                    if (diff < 0) {
                        // year is too low
                    } else {
                        // year is too high
                    }
                    if (diff <= 20 && diff >= -20) {
                        cellID += "a";
                    }
                }

                break;
        }
    }

    return <div className = "cell" id = {cellID}>{cellInfo}</div>
}

export default Cell;