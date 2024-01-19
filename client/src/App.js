import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { useState } from "react";
import DummyWordHolder from "./components/dummyWordHolder";
import DummyInputHolder from "./components/dummyInputHolder";
import Home from "./components/Home/Home";
import HolderForWrongLetters from "./components/dummyWrongWords";
import GamePage from "./components/Game page/GamePage";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/start-new-game"
            element={
              <GamePage />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
