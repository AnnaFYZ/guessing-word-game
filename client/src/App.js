import './App.css';
import Timer from './components/timer';
import Input from './components/input-component';
import Card from './components/card';
import { Box } from '@mui/system';
import { useState } from "react";
import DummyWordHolder from './components/dummyWordHolder';


function App() {
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("pending");

  return (
    <div className="App">
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
    </div>
  );
}


export default App;
