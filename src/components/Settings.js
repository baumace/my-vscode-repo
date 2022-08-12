import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import Picks from "../Picks.json";
import "./Settings.css";

function Settings() {
  const { popupActive, setPopupActive, selectPlayer } = useContext(AppContext);

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
      <div className="settingsText"></div>
    </div>
  );
}

export default Settings;
