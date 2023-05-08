import './css/App.css';
import React from 'react';
import './components/searchBar.js';
import SearchBar from './components/searchBar';
import Navbar from "./components/navBar";

function App() {
  return (
    <>
    <div className="App">
     
      <header>
      <Navbar/>
      <SearchBar />
      </header>
    </div>
    <body class='yes'>
  
    </body>
    <footer></footer>
    </>
  );
}

export default App;
