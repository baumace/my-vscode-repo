import React, { useCallback, useContext, useEffect, useState } from "react";
import "./SearchBox.css";
import { AppContext } from "../App";

let rawUserInput = "";

function SearchBox({ placeholder, data }) {
  let keyCount = 0;
  const { selectItem } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
  const [dataItemIndex, setDataItemIndex] = useState({ index: -1 });
  const [search, setSearch] = useState("");

  const clearSearchResults = () => {
    // Reset the filtered data in the search results
    setFilteredData(filteredData.slice(0, 0));

    return;
  };

  // Search bar selection
  const handleKeyboard = useCallback((event) => {
    // Does the filtered data have elements in it?
    if (filteredData.length != 0) {
      // Was a key of interest pressed by the user?
      if (event.key === "Enter") {
        // The enter key was pressed
        // Is the data item index -1 (the input text index)?
        if (dataItemIndex.index == -1) {
          // Select the top element in the search results
          selectItem(filteredData[0]);
        } else {
          // Select the element at the data item index
          selectItem(filteredData[dataItemIndex.index]);
        }

        // Reset search bar data
        // Reset search text
        setSearch("");
        // Reset dataItemIndex
        setDataItemIndex({ ...dataItemIndex, index: -1 });
        clearSearchResults();
      } else if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        // One of the arrow keys of interest was pressed
        // Prevent the key from moving the input text cursor
        event.preventDefault();

        // Store the current index for the data item cursor
        let currDataIndex = dataItemIndex.index;

        // Which key was pressed and is the data item index in an
        // acceptable range?
        if (event.key == "ArrowDown" && currDataIndex < 3) {
          // Arrrow key up has been pressed
          // Is the index at the starting position?
          if (currDataIndex == -1) {
            // Store the current input text
            rawUserInput = search;
          }

          // Increment the index for the data item
          setDataItemIndex({
            ...dataItemIndex,
            index: dataItemIndex.index + 1,
          });

          // Set the input text to be the newly selected player
          setSearch(filteredData[++currDataIndex].player);
        } else if (event.key == "ArrowUp" && currDataIndex > -1) {
          // Decrement the index for the data item
          setDataItemIndex({
            ...dataItemIndex,
            index: dataItemIndex.index - 1,
          });

          // Is the index anything other than the top element?
          if (currDataIndex != 0) {
            // Set the input text to be the newly selected player
            setSearch(filteredData[--currDataIndex].player);
          } else {
            // The data item will return to the input box, so reset the input text
            // to the most recent text put in the input text
            setSearch(rawUserInput);
          }
        }
      }
    }
  });

  // Search bar selection
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  // Data filter for autocompletion
  const handleFilter = (event) => {
    // Store the text typed to the input
    const inputWord = event.target.value;

    // Show the text typed to the input
    setSearch(inputWord);

    // Filter the data based on the input
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
      <div className="searchInput">
        <input
          type="text"
          id="searchText"
          value={search}
          placeholder={placeholder}
          onChange={handleFilter}
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
                id={
                  dataItemIndex.index == keyCount
                    ? "itemSelected"
                    : "itemNotSelected"
                }
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
