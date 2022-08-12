import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Help() {
  const { popupActive, setPopupActive } = useContext(AppContext);

  return (
    <div className="gameOver" id={popupActive.help ? "show" : "hide"}>
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
  );
}

export default Help;
