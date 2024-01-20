import React from "react";
import { Box, Grid } from "@mui/material";
import DummyInputHolder from "../dummyInputHolder";
import DummyWordHolder from "../dummyWordHolder";
import HolderForWrongLetters from "../dummyWrongWords";
import randomWords from "../../mockData";

const randomWord = (words) => {
  const randomIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomIndex];
  return randomWord;
};

const guessingWord = randomWord(randomWords).word;


function GamePage({ runTimer, setRunTimer, letterState, setLetterState, wrongLetters, rightLetters, setWrongLetters, setRightLetters}) {

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom right, #720E7A, #0F1A37)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Grid container alignItems="left" sx={{ wrap: "nowrap", maxWidth: "50%" }}>
        <Grid item lg={7}>
          <DummyWordHolder
            guessingWord={guessingWord}
            runTimer={runTimer}
            setRunTimer={setRunTimer}
            letterState={letterState}
            setLetterState={setLetterState}
            rightLetters={rightLetters}
          />
        </Grid>
        <Grid item lg={7}>
          <DummyInputHolder guessingWord={guessingWord} setWrongLetters={setWrongLetters} wrongLetters={wrongLetters} rightLetters={rightLetters} setRightLetters={setRightLetters} />
        </Grid>
        <Grid item lg={7}>
          <HolderForWrongLetters letterState={letterState} wrongLetters={wrongLetters} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GamePage;