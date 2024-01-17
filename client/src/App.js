import './App.css';
import Input from './components/input-component';
import { Box } from '@mui/system';
import { useState } from "react";
import DummyWordHolder from './components/dummyWordHolder';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home"



function App() {
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("pending");

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
          <Input />
          <DummyWordHolder letterState={letterState} setLetterState={setLetterState} />
        </Box>
      </Router>
    </div>
  );
}


export default App;
