import './App.css';
import Timer from './components/timer';
import Input from './components/input-component';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from "react-router-dom";
import Card from './components/card';
import { Box } from '@mui/system';
import { useState } from "react";
import MyButton from './components/button';


function App() {
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("wrong");

  return (
    <div className="App">

      <Router>
        <Home />
    <Box sx={{
        width: "100%", height: "100vh", backgroundImage: 'linear-gradient(to bottom right, #720E7A, #0F1A37)'
      }}>

        <Input />
        <Timer />
        <Card letterState={letterState} />
        <MyButton buttonText="Confirm" color="yellow" />
        <MyButton buttonText="Start New Game" color="gradient" />
        <MyButton buttonText="Join the game" color="gradient" />

      </Box>
      </Router>
    </div>
  );
}


export default App;
