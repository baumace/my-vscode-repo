import React, { useCallback, useContext, useEffect, useState } from "react";
import "./SearchBox.css";
import { AppContext } from "../App";

function SearchBox({ placeholder, data }) {
  var keyCount = 0;
  const { selectItem, gameOver } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
  const [dataItemIndex, setDataItemIndex] = useState({ index: 0 });

  // Search bar selection
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      selectItem(filteredData[dataItemIndex.index]);
    } else if (event.key == "ArrowDown" && dataItemIndex.index < 4) {
      // Arrrow key up has been pressed
      setDataItemIndex({ ...dataItemIndex, index: dataItemIndex.index + 1 });
    } else if (event.key == "ArrowUp" && dataItemIndex.index > 0) {
      // Arrow key down has been pressed
      setDataItemIndex({ ...dataItemIndex, index: dataItemIndex.index - 1 });
    }
  });

  /*
  // Search bar selection
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);*/

  // Data filter for autocompletion
  const handleFilter = (event) => {
    const inputWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.player.toLowerCase().includes(inputWord.toLowerCase());
    });

    if (inputWord == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

    return;
  };

  return (
    <div className="searchBox">
      <div className="searchInput" onKeyDown={handleKeyboard}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
          disabled={gameOver.gameOver}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="searchResult" id={filteredData.length}>
          {filteredData.slice(0, 4).map((value) => {
            return (
              <div
                className="dataItem"
                onClick={() => selectItem(value)}
                key={keyCount++}
                id={dataItemIndex.index == keyCount ? "itemSelected" : ""}
              >
                <p> {value.player} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBox;
