import React, { useState } from 'react';
import MyButton from "./button";
import Subtitle from "./subtitle";
import Input from "./input-component";
import { Box, Grid } from "@mui/material";

const DummyInputHolder = ({ lettersArray, setWrongLetters, wrongLetters, rightLetters, setRightLetters }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
  };

  const handleConfirm = () => {
    console.log("Input Value:", inputValue);
    const newWrongLetters = !lettersArray.includes(inputValue)
      ? [...wrongLetters, inputValue]
      : wrongLetters;

    const newRightLetters = lettersArray.includes(inputValue)
      ? [...rightLetters, inputValue]
      : rightLetters;

    setWrongLetters(newWrongLetters);
    setRightLetters(newRightLetters);
  };

  return (
    <div>
      <Box
        sx={{
          display: "inline-block",
          minWidth: "30rem",
          mb: "2rem",
        }}
      >
        <Subtitle
          subtitle="Try to guess the letter or the whole word"
          fontSize="16pt"
        />
        <Grid container justifyContent="left" alignItems="center">
          <Grid item>
            <Input
              inputValue={inputValue}
              setInputValue={setInputValue}
              onInputChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <MyButton
              buttonText="Confirm"
              color="yellow"
              onClick={handleConfirm}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DummyInputHolder;
