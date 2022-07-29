import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, setGameOver } = useContext(AppContext);

  return <div className="gameOver">Game Over</div>;
}

export default GameOver;
