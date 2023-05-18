import './css/App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/navBar';
import GuessList from './components/guessList';

const LOCAL_STORAGE_KEY = 'guesses';

function App() {
  const guessRef = useRef();

  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const storedGuesses = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedGuesses) {
      setGuesses(JSON.parse(storedGuesses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guesses));
  }, [guesses]);

  function addGuess() {
    const name = guessRef.current.value;
    const newGuess = { name: name, id: Date.now() };
    setGuesses(prevGuesses => [...prevGuesses, newGuess]);
    guessRef.current.value = '';
  }

  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <input ref={guessRef} type="text" />
        <button onClick={addGuess} type="submit">Guess</button>
        <GuessList guesses={guesses} />

      </div>
      <footer></footer>
    </>
  );
}

export default App;
