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

  console.log(selectedEra.era);

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

  const handleDropdownItemClick = (id) => {
    if (id != selectedEra.era) {
      switch (id) {
        case 0:
          setSelectedEra({ era: 0 });
          break;
        case 1:
          setSelectedEra({ era: 1 });
          break;
        case 2:
          setSelectedEra({ era: 2 });
          break;
        case 3:
          setSelectedEra({ era: 3 });
          break;
        case 4:
          setSelectedEra({ era: 4 });
          break;
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
      <button
        onClick={() => {
          selectPlayer(Picks);
        }}
      >
        New Player
      </button>
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
