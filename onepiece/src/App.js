import './css/App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from "./components/navBar";
import GuessList from './components/guessList';

const LOCAL_STORAGE_KEY = 'guesses';

function App() {
  const guessRef = useRef();
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    const storedGuesses = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedGuesses) setGuesses(storedGuesses);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guesses));
  }, [guesses]);

  function callSearchFunction() {
    const name = guessRef.current.value;
    setGuesses(prevGuesses => [...prevGuesses, { name: name }]);
    guessRef.current.value = '';
  }

  return (
    <>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <GuessList guesses={guesses} />
        <input ref={guessRef} type="text" />
        <button onClick={callSearchFunction} type="submit">Guess</button>
      </div>
      <footer></footer>
    </>
  );
}

export default App;