import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Picks from "../Picks.json";
import "./Settings.css";

function Settings() {
  const { popupActive, setPopupActive, selectPlayer } = useContext(AppContext);
  const [dropdownActive, setDropdownActive] = useState({ active: false });
  const [selectedEra, setSelectedEra] = useState({ era: 0 });
  const eraYears = [
    "All Years",
    "2010-Pres.",
    "2000-2009",
    "1990-1999",
    "1980-1989",
    "1968-1979",
  ];

  const handleExitClick = () => {
    setDropdownActive({ active: false });
    setPopupActive({ settings: false });
  };

  const handleDropdownClick = () => {
    if (dropdownActive.active) {
      setDropdownActive({ active: false });
    } else {
      setDropdownActive({ active: true });
    }
  };

  const handleNewPlayerClick = () => {
    // Store the selected era
    const era = selectedEra.era;

    // Is the era set to include all picks?
    if (era == 0) {
      // Select a player
      selectPlayer(Picks);
    } else {
      // Filter the data based on the input
      const newFilter = Picks.filter((value) => {
        // Store the draft year
        const year = value.year;

        // Check the draft year depending on the current era
        switch (era) {
          // Era is 1968-1979
          case 5:
            // Check if draft year is within timeframe
            if (year <= 1979) {
              return value;
            }
            break;
          // Era is 1980-1989
          case 4:
            // Check if draft year is within timeframe
            if (year >= 1980 && year <= 1989) {
              return value;
            }
            break;
          // Era is 1990-1999
          case 3:
            // Check if draft year is within timeframe
            if (year >= 1990 && year <= 1999) {
              return value;
            }
            break;
          // Era is 2000-2009
          case 2:
            // Check if draft year is within timeframe
            if (year >= 2000 && year <= 2009) {
              return value;
            }
            break;
          // Era is 2010-Pres.
          case 1:
            // Check if draft year is within timeframe
            if (year >= 2010) {
              return value;
            }
            break;
        }
      });

      // Select the player based on the new filter
      selectPlayer(newFilter);
    }

    // Quit from the settings menu
    handleExitClick();
  };

  const handleDropdownItemClick = (id) => {
    // Is the id equal to the already selected era?
    if (id != selectedEra.era) {
      // Change selected era depending on id
      switch (id) {
        // Change to all eras
        case 0:
          setSelectedEra({ era: 0 });
          break;
        // Change to 2010-Pres.
        case 1:
          setSelectedEra({ era: 1 });
          break;
        // Change to 2000-2009
        case 2:
          setSelectedEra({ era: 2 });
          break;
        // Change to 1990-1999
        case 3:
          setSelectedEra({ era: 3 });
          break;
        // Change to 1980-1989
        case 4:
          setSelectedEra({ era: 4 });
          break;
        // Change to 1968-1979
        case 5:
          setSelectedEra({ era: 5 });
          break;
      }
    }
  };

  return (
    <div className="settings" id={popupActive.settings ? "show" : "hide"}>
      <button
        className="exitButton"
        onClick={() => {
          handleExitClick();
        }}
      >
        X
      </button>
      <div
        className="newPlayerButton"
        onClick={() => {
          handleNewPlayerClick();
        }}
      >
        New Player
      </div>
      <div className="eraDropdown">
        <div
          className="eraDropdownButton"
          onClick={() => {
            handleDropdownClick();
          }}
        >
          <p>Selected Era: {eraYears[selectedEra.era]}</p>
        </div>

        <div
          className="eraDropdownContent"
          id={dropdownActive.active ? "show" : "hide"}
        >
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(0);
            }}
          >
            <p>{eraYears[0]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(1);
            }}
          >
            <p>{eraYears[1]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(2);
            }}
          >
            <p>{eraYears[2]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(3);
            }}
          >
            <p>{eraYears[3]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(4);
            }}
          >
            <p>{eraYears[4]}</p>
          </div>
          <div
            className="eraDropdownItem"
            onClick={() => {
              handleDropdownItemClick(5);
            }}
          >
            <p>{eraYears[5]}</p>
          </div>
        </div>
      </div>
      <div className="settingsText"></div>
    </div>
  );
}

export default Settings;
