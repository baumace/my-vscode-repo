import "./App.css";
import Board from "./components/Board";
import SearchBox from "./components/SearchBox";
import GameOver from "./components/GameOver";
import Help from "./components/Help";
import Settings from "./components/Settings";
import { createContext, useEffect, useState } from "react";
import { boardDefault } from "./Entry";
import Picks from "./Picks.json";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
export const AppContext = createContext();

//let correctPlayer = Picks[Math.floor(Math.random() * Picks.length)];
let correctPlayer = {
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
  const [popupActive, setPopupActive] = useState({
    gameOver: false,
    help: false,
    settings: false,
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
      setPopupActive({ gameOver: true });
    } else if (attemptNum == 7) {
      setGameOver({ gameOver: true, guessedPlayer: false });
      setPopupActive({ gameOver: true });
    }
  };

  const selectPlayer = (dataArray) => {
    correctPlayer = dataArray[Math.floor(Math.random() * dataArray.length)];
    console.log(correctPlayer);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          correctPlayer,
          gameOver,
          selectItem,
          selectPlayer,
          popupActive,
          setPopupActive,
        }}
      >
        <header>
          <h1>BENGLE</h1>
          <h2>Bengals Draft Day Selections</h2>
          <button
            className="headerButton"
            id="help"
            onClick={() => setPopupActive({ help: true })}
          >
            <HelpIcon className="headerButtonIcon" />
          </button>
          <button
            className="headerButton"
            id="settings"
            onClick={() => setPopupActive({ settings: true })}
          >
            <SettingsIcon className="headerButtonIcon" />
          </button>
        </header>
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
          <div
            className="popupWall"
            id={
              popupActive.gameOver || popupActive.help || popupActive.settings
                ? "show"
                : "hide"
            }
          />
          <GameOver />
          <Help />
          <Settings />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
