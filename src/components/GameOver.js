import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currAttempt, correctPlayer } = useContext(AppContext);
  const [buttonClicked, setButtonClicked] = useState({ clicked: false });

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
        <p>The correct player is {correctPlayer.player}</p>
      </div>
    );
  };

  return (
    <div
      className="gameOver"
      id={gameOver.gameOver && !buttonClicked.clicked ? "show" : "hide"}
    >
      <button
        className="exitButton"
        onClick={() => setButtonClicked({ clicked: true })}
      >
        X
      </button>
      <div className="gameOverText">
        {gameOver.guessedPlayer ? winScreen() : loseScreen()}
      </div>
    </div>
  );
}

export default GameOver;
