import React from "react";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import DummyInputHolder from "../dummyInputHolder";
import DummyWordHolder from "../dummyWordHolder";
import HolderForWrongLetters from "../dummyWrongWords";

function GamePage () {

    //the states for letterState (pending, guessed, wrong)
  const [letterState, setLetterState] = useState("wrong");
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
    <Grid container alignItems="left" direction="column" lg={6}>
        <Grid item>
    <DummyWordHolder
      letterState={letterState}
      setLetterState={setLetterState}
    />
    </Grid>
    <Grid item>
    <DummyInputHolder />
    </Grid>
    <Grid item>
    <HolderForWrongLetters letterState={letterState} />
    </Grid>
    </Grid>
  </Box>
);
}

export default GamePage;