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
      <nav>
        <h1>BENGLE</h1>
      </nav>
      <AppContext.Provider value = {{board, setBoard}}>
        <SearchBox placeholder={"Enter player name..."} data={Picks}/>
        <Board />
      </AppContext.Provider>
    </div>
  );
}

export default App;
