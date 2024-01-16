import './App.css';
import Timer from './components/timer';
import Input from './components/input-component';
import Card from './components/card';
import { Box } from '@mui/system';
import { useState } from "react";


function App() {
  //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("wrong");

  return (
    <div className="App">
      <Box sx={{
        width: "100%", height: "100vh", backgroundImage: 'linear-gradient(to bottom right, #720E7A, #0F1A37)'
      }}>

        <Input />
        <Timer />
        <Card letterState={letterState} />
      </Box>
    </div>
  );
}


export default App;
