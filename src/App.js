import './App.css';
import Board from './components/Board';
import SearchBox from './components/SearchBox';
import {createContext, useState} from 'react';
import { boardDefault } from './Entry';
import Picks from './Picks.json';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <header>
        <h1>BENGLE</h1>
        <h2>Bengals Draft Day Selections</h2>
      </header>
      <AppContext.Provider value = {{board, setBoard}}>
        <div className = "game">
          <Board />
        </div>
        <div className = "game">
          <SearchBox placeholder={"Enter player name..."} data={Picks}/>
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
