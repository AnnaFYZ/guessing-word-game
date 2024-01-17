// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Word Fever</h2>
      <p>Short description of the game...</p>



      <Link to="/start-new-game">
        <button>Start New Game</button>
      </Link>


      <Link to="/join-game">
        <button>Join Game</button>
      </Link>


      <Link to="/">
        <img src="/path/to/home-icon.png" alt="Home" />
      </Link>


      <Link to="/info">
        <img src="/path/to/info-icon.png" alt="Info" />
      </Link>


      <Link to="/contact-us">
        <img src="/path/to/contact-us-icon.png" alt="Contact Us" />
      </Link>
    </div>
  );
}

export default Home;
