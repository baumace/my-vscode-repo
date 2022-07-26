import './App.css';
import Board from './components/Board';
import SearchBox from './components/SearchBox';
import {createContext, useState} from 'react';
import { boardDefault } from './Entry';
import Picks from './Picks.json';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 1});
  const correctPlayer = {"player":"Joe Burrow", "college":"LSU", "year":2020, "position":"QB", "round":1, "pick":1};

  return (
    <div className="App">
      <header>
        <h1>BENGLE</h1>
        <h2>Bengals Draft Day Selections</h2>
      </header>
      <AppContext.Provider value = {{board, setBoard, currAttempt, setCurrAttempt, correctPlayer}}>
        <div className = "game">
          <Board />
        </div>
        <div className = "game">
          <SearchBox placeholder={"Enter a player name..."} data={Picks}/>
        </div>
      </AppContext.Provider>
      <footer>
        <p><a href = "https://www.pro-football-reference.com/teams/cin/draft.htm">Pro Football Reference</a></p>
        <p><a href = "https://poeltl.dunk.town/">Poeltl</a></p>
      </footer>
    </div>
  );
}

export default App;
