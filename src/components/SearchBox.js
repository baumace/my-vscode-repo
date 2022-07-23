import React, {useState} from 'react';
import "./SearchBox.css";

function SearchBox ({placeholder, data}) {
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
    return (
        <div className = "searchBox">
            <div className = "searchInput">
                <input type = "text" placeholder = {placeholder} onChange = {handleFilter}/>
            </div>
            { filteredData.length != 0 && (
                <div className = "searchResult">
                    {filteredData.map((value, key) => {
                        return <div className = "dataItem"><p> {value.player} </p></div>
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBox