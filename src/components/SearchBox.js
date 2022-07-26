import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./SearchBox.css";
import {AppContext} from '../App';

function SearchBox ({placeholder, data}) {
    var keyCount = 0;
    const {board, setBoard, currAttempt, setCurrAttempt} = useContext(AppContext);
    const [filteredData, setFilteredData] = useState([]);

    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter") {
            filteredData.slice(0, 1).map((value, key) => {
                selectItem(value);
            })
        }
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return() => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard])
    
    const handleFilter = (event) => {
        const inputWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.player.toLowerCase().includes(inputWord.toLowerCase());
        });

        if (inputWord == "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }

        return;
    }
    
    const selectItem = (value) => {
        if (currAttempt.attempt > 7) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][0] = value.player;
        newBoard[currAttempt.attempt][1] = value.college;
        newBoard[currAttempt.attempt][2] = value.year;
        newBoard[currAttempt.attempt][3] = value.position;
        newBoard[currAttempt.attempt][4] = value.round;
        newBoard[currAttempt.attempt][5] = value.pick;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, attempt: currAttempt.attempt + 1});
    }
    
    return (
        <div className = "searchBox">
            <div className = "searchInput" onKeyDown = {handleKeyboard}>
                <input type = "text" placeholder = {placeholder} onChange = {handleFilter}/>
            </div>
            { filteredData.length != 0 && (
                <div className = "searchResult">
                    {filteredData.map((value, key) => {
                        return <div className = "dataItem" onClick={() => selectItem(value)} key = {keyCount++}><p> {value.player} </p></div>
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBox