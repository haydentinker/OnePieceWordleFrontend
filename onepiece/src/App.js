import './css/App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/navBar';
import GuessList from './components/guessList';
import VictoryPopup from './components/victoryPopup';
const LOCAL_STORAGE_KEY = 'guesses';

function App() {
  const guessRef = useRef();
  const [guesses, setGuesses] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  const [victory, setVictory] = useState(false)
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guesses));
  }, [guesses]);
  const hasWon = () => {
    setVictory(true);
  }
  const closeVictory = () => {
    setGuesses([]);
    setVictory(false);
  }
  function addGuess() {
    const name = guessRef.current.value;
    const newGuess = { name: name, id: Date.now() };
    setGuesses(prevGuesses => [...prevGuesses, newGuess]);
    guessRef.current.value = '';
    if (newGuess.name === "Luffy") {
      hasWon();
    }
  }

  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header><body>
          <input ref={guessRef} type="text" />
          <button onClick={addGuess} type="submit">Guess</button>

          <GuessList guesses={guesses} />
          {victory && <VictoryPopup onClose={closeVictory} />}
        </body>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
