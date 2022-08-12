import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Picks from "../Picks.json";
import "./Settings.css";

function Settings() {
  const { popupActive, setPopupActive, selectPlayer } = useContext(AppContext);
  const [dropdownActive, setDropdownActive] = useState({ active: false });

  const handleDropdownClick = () => {
    if (dropdownActive.active) {
      setDropdownActive({ active: false });
    } else {
      setDropdownActive({ active: true });
    }
  };

  return (
    <div className="settings" id={popupActive.settings ? "show" : "hide"}>
      <button
        className="exitButton"
        onClick={() => {
          setPopupActive({ settings: false });
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
        <button
          className="eraDropdownButton"
          onClick={() => {
            handleDropdownClick();
          }}
        >
          Era
        </button>
        <div
          className="eraDropdownContent"
          id={dropdownActive.active ? "show" : "hide"}
        >
          <div className="eraDropdownItem">
            <p>2010-Pres.</p>
          </div>
          <div className="eraDropdownItem">
            <p>2000-2009</p>
          </div>
          <div className="eraDropdownItem">
            <p>1990-1999</p>
          </div>
          <div className="eraDropdownItem">
            <p>1980-1989</p>
          </div>
          <div className="eraDropdownItem">
            <p>1968-1979</p>
          </div>
        </div>
      </div>
      <div className="settingsText"></div>
    </div>
  );
}

export default Settings;
