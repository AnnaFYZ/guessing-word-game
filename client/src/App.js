import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import GamePage from "./components/Game page/GamePage";

function App() {
  const [runTimer, setRunTimer] = useState(false);
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("wrong");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/start-new-game"
            element={<GamePage runTimer={runTimer} setRunTimer={setRunTimer} />}
          />
          <Route path="/" element={<Home letterState={letterState} setLetterState={setLetterState} runTimer={runTimer} setRunTimer={setRunTimer} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
