import "./GameOver.css";
import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currAttempt, correctPlayer, popupActive, setPopupActive } =
    useContext(AppContext);

  const winScreen = () => {
    return (
      <div>
        <p>Draft grade: A+</p>
        <p>
          You guessed the correct player in {currAttempt.attempt - 1}{" "}
          selections!
        </p>
      </div>
    );
  };

  const loseScreen = () => {
    return (
      <div>
        <p>Draft bust! You were not able to select the correct player.</p>
      </div>
    );
  };

  return (
    <div id={popupActive.gameOver ? "show" : "hide"}>
      <div className="popup" id="gameOverPopup">
        <button
          className="exitButton"
          onClick={() => {
            setPopupActive({ gameOver: false });
          }}
        >
          X
        </button>
        <div className="gameOverText">
          {gameOver.guessedPlayer ? winScreen() : loseScreen()}
          <p>
            The correct player is {correctPlayer.player},{" "}
            {correctPlayer.position} from {correctPlayer.college}.
          </p>
          <p>
            Selected with the #{correctPlayer.pick} overall pick in round{" "}
            {correctPlayer.round} of the {correctPlayer.year} NFL Draft
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
