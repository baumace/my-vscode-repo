import "./App.css";
import Board from "./components/Board";
import SearchBox from "./components/SearchBox";
import GameOver from "./components/GameOver";
import Help from "./components/Help";
import Settings from "./components/Settings";
import { createContext, useState } from "react";
import { boardDefault } from "./Entry";
import Picks from "./Picks.json";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
export const AppContext = createContext();

// Create the initial correct player
let correctPlayer = Picks[Math.floor(Math.random() * Picks.length)];

function App() {
  const [picksData, setPicksData] = useState({ array: Picks });
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
  const [selectedEra, setSelectedEra] = useState({ era: 0 });

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
    } else if (attemptNum === 7) {
      setGameOver({ gameOver: true, guessedPlayer: false });
      setPopupActive({ gameOver: true });
    }
  };

  const resetBoard = () => {
    const newBoard = [...board];
    for (let i = 1; i < currAttempt.attempt; i++) {
      for (let j = 0; j < 6; j++) {
        newBoard[i][j] = "";
      }
    }
    setCurrAttempt({ attempt: 1 });
    setBoard(newBoard);
    setGameOver({ gameOver: false, guessedPlayer: false });
  };

  const selectPlayer = (dataArray) => {
    correctPlayer = dataArray[Math.floor(Math.random() * dataArray.length)];
    resetBoard();
    console.log(correctPlayer);
  };

  const filterData = () => {
    // Stores the filtered data array
    let newFilter;
    // Store the current era
    const era = selectedEra.era;
    // Is the era set to all players?
    if (era === 0) {
      newFilter = Picks;
    } else {
      // Filter the data based on the input
      newFilter = Picks.filter((value) => {
        // Store the draft year
        const year = value.year;

        // Check the draft year depending on the current era
        switch (era) {
          // Era is 1968-1979
          case 5:
            // Check if draft year is within timeframe
            if (year <= 1979) {
              return value;
            }
            break;
          // Era is 1980-1989
          case 4:
            // Check if draft year is within timeframe
            if (year >= 1980 && year <= 1989) {
              return value;
            }
            break;
          // Era is 1990-1999
          case 3:
            // Check if draft year is within timeframe
            if (year >= 1990 && year <= 1999) {
              return value;
            }
            break;
          // Era is 2000-2009
          case 2:
            // Check if draft year is within timeframe
            if (year >= 2000 && year <= 2009) {
              return value;
            }
            break;
          // Era is 2010-Pres.
          default:
            // Check if draft year is within timeframe
            if (year >= 2010) {
              return value;
            }
            break;
        }
      });
    }

    // Set the picks data to be the new filtered data
    setPicksData({ array: newFilter });

    // Return the newFilter
    return newFilter;
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
          filterData,
          popupActive,
          setPopupActive,
          resetBoard,
          selectedEra,
          setSelectedEra,
          picksData,
        }}
      >
        <div className="game">
          <header>
            <h1>BENGLE</h1>
            <h2>Bengals Draft Day Selections</h2>
            <button
              className="headerButton"
              id="helpButton"
              onClick={() => setPopupActive({ help: true })}
            >
              <HelpIcon className="headerButtonIcon" />
            </button>
            <button
              className="headerButton"
              id="settingsButton"
              onClick={() => setPopupActive({ settings: true })}
            >
              <SettingsIcon className="headerButtonIcon" />
            </button>
          </header>
          <Board />{" "}
          {gameOver.gameOver ? (
            <div
              className="appNewPlayerButton"
              onClick={() => {
                selectPlayer(filterData());
              }}
            >
              <p className="appNewPlayerText">NEW PLAYER</p>
            </div>
          ) : (
            <div
              className="giveUpButton"
              onClick={() => {
                setGameOver({ gameOver: true });
                setPopupActive({ gameOver: true });
              }}
            >
              <p className="giveUpText">GIVE UP</p>
            </div>
          )}
          <div
            className="showResultsButton"
            onClick={() => {
              setPopupActive({ gameOver: true });
            }}
            id={gameOver.gameOver ? "show" : "hide"}
          >
            <p className="showResultsText">SHOW RESULTS</p>
          </div>
          {gameOver.gameOver ? (
            <SearchBox
              placeholder={"Game Over"}
              data={picksData.array}
              disabled={true}
            />
          ) : (
            <SearchBox
              placeholder={"Selection " + currAttempt.attempt + " of 7"}
              data={picksData.array}
              disabled={false}
            />
          )}
        </div>
        <footer>
          <p>
            Data Source:{" "}
            <a href="https://www.pro-football-reference.com/teams/cin/draft.htm">
              Pro Football Reference
            </a>
          </p>
          <p>
            Inspired by <a href="https://poeltl.dunk.town/">Poeltl</a>
          </p>
        </footer>
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
