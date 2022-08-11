import "./App.css";
import Board from "./components/Board";
import SearchBox from "./components/SearchBox";
import GameOver from "./components/GameOver";
import { createContext, useEffect, useState } from "react";
import { boardDefault } from "./Entry";
import Picks from "./Picks.json";
export const AppContext = createContext();

// const correctPlayer = Picks[Math.floor(Math.random() * Picks.length)];
const correctPlayer = {
  player: "Joe Burrow",
  college: "LSU",
  position: "QB",
  year: 2020,
  round: 1,
  pick: 1,
};

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 1 });
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedPlayer: false,
  });

  const selectItem = (value) => {
    const player = value.player;
    const attemptNum = currAttempt.attempt;

    if (currAttempt.attempt <= 7) {
      const newBoard = [...board];
      newBoard[attemptNum][0] = player;
      newBoard[attemptNum][1] = value.college;
      newBoard[attemptNum][2] = value.year;
      newBoard[attemptNum][3] = value.position;
      newBoard[attemptNum][4] = value.round;
      newBoard[attemptNum][5] = value.pick;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, attempt: currAttempt.attempt + 1 });
    }

    if (player === correctPlayer.player) {
      setGameOver({ gameOver: true, guessedPlayer: true });
    } else if (attemptNum == 7) {
      setGameOver({ gameOver: true, guessedPlayer: false });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>BENGLE</h1>
        <h2>Bengals Draft Day Selections</h2>
      </header>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          correctPlayer,
          gameOver,
          selectItem,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? (
            <SearchBox placeholder={"Game Over"} data={Picks} disabled={true} />
          ) : (
            <SearchBox
              placeholder={"Selection " + currAttempt.attempt + " of 7"}
              data={Picks}
              disabled={false}
            />
          )}
          <GameOver />
        </div>
      </AppContext.Provider>
      <footer>
        <p>
          <a href="https://www.pro-football-reference.com/teams/cin/draft.htm">
            Pro Football Reference
          </a>
        </p>
        <p>
          <a href="https://poeltl.dunk.town/">Poeltl</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
