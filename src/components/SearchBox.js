import React, {useContext, useState} from 'react';
import "./SearchBox.css";
import {AppContext} from '../App';

function SearchBox ({placeholder, data}) {
    var keyCount = 0;
    const {board, setBoard} = useContext(AppContext);
    const [filteredData, setFilteredData] = useState([]);
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
    }
    const selectItem = (value) => {
        const newBoard = [...board];
        newBoard[2][0] = value.player;
        newBoard[2][1] = value.college;
        newBoard[2][2] = value.year;
        newBoard[2][3] = value.position;
        newBoard[2][4] = value.round;
        newBoard[2][5] = value.pick;
        setBoard(newBoard);
    }
    return (
        <div className = "searchBox">
            <div className = "searchInput">
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