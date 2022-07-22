import './App.css';
import Board from './components/Board';
import SearchBox from './components/SearchBox';


function App() {
  return (
    <div className="App">
      <nav>
        <h1>BENGLE</h1>
      </nav>
      <SearchBox />
      <Board />
    </div>
  );
}

export default App;
