import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Settings() {
  const { popupActive, setPopupActive } = useContext(AppContext);

  return (
    <div className="gameOver" id={popupActive.settings ? "show" : "hide"}>
      <button
        className="exitButton"
        onClick={() => {
          setPopupActive({ settings: false });
        }}
      >
        X
      </button>
      <div className="helpText"></div>
    </div>
  );
}

export default Settings;
