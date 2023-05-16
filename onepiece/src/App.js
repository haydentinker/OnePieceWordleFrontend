import './css/App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from "./components/navBar";
import GuessList from './components/guessList';

const LOCAL_STORAGE_KEY = 'onePieceWordle.guesses'
function App() {
  const [guesses, setGuesses] = useState([]);
  const guessRef = useRef();
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    const storedGuesses = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedGuesses) setGuesses(storedGuesses); // Replace the current state with the stored guesses
  }, []);

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guesses));
  }, [guesses]);

  function callSearchFunction() {
    console.log(guessRef.current.value)
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
      </div >
      <body class='yes'>

      </body>
      <footer></footer>
    </>
  );
}

export default App;
