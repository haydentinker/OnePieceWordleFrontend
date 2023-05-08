import './App.css';
import './components/searchBar.js';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>One Piece Wordle!</h1>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
