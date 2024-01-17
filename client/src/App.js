import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from '@mui/system';
import { useState } from "react";
import DummyWordHolder from './components/dummyWordHolder';
import DummyInputHolder from './components/dummyInputHolder';
import Home from "./components/Home/Home"
import HolderForWrongLetters from './components/dummyWrongWords';



function App() {
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("wrong");

  return (
    <div className="App">
      <Router>
        <Home />
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundImage: "linear-gradient(to bottom right, #720E7A, #0F1A37)",
          }}
        >
          <DummyWordHolder letterState={letterState} setLetterState={setLetterState} />
          <HolderForWrongLetters letterState={letterState} />
          <DummyInputHolder />

        </Box>
      </Router>
    </div>
  );
}



export default App;
