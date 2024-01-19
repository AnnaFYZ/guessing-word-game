import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import GamePage from "./components/Game page/GamePage";
import Contacts from "./components/Contacts/Contacts";


function App() {
  const [runTimer, setRunTimer] = useState(false);
  const [rightLetters, setRightLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [lettersArray, setLettersArray] = useState([])
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("wrong");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/start-new-game"
            element={<GamePage lettersArray={lettersArray} runTimer={runTimer} letterState={letterState} setLetterState={setLetterState} setRunTimer={setRunTimer} setRightLetters={setRightLetters} setWrongLetters={setWrongLetters} wrongLetters={wrongLetters} rightLetters={rightLetters} />}
          />

          <Route path="/" element={<Home setLettersArray={setLettersArray} setRightLetters={setRightLetters} setWrongLetters={setWrongLetters} letterState={letterState} setLetterState={setLetterState} runTimer={runTimer} setRunTimer={setRunTimer} />} />
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
