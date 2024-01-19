import React from "react";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import DummyInputHolder from "../dummyInputHolder";
import DummyWordHolder from "../dummyWordHolder";
import HolderForWrongLetters from "../dummyWrongWords";

function GamePage({ runTimer, setRunTimer, letterState, setLetterState }) {

  const [wrongLetters, setWrongLetters] = useState([])

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
            runTimer={runTimer}
            setRunTimer={setRunTimer}
            letterState={letterState}
            setLetterState={setLetterState}
          />
        </Grid>
        <Grid item lg={7}>
          <DummyInputHolder />
        </Grid>
        <Grid item lg={7}>
          <HolderForWrongLetters letterState={letterState} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GamePage;