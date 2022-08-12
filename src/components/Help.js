import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Help() {
  const { popupActive, setPopupActive } = useContext(AppContext);

  return (
    <div className="popup" id={popupActive.settings ? "show" : "hide"}>
      <div className="help" id={popupActive.help ? "show" : "hide"}>
        <button
          className="exitButton"
          onClick={() => {
            setPopupActive({ help: false });
          }}
        >
          X
        </button>
        <div className="helpText"></div>
      </div>
    </div>
  );
}

export default Help;
