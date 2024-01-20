import React, { useState } from 'react';
import MyButton from "./button";
import Subtitle from "./subtitle";
import Input from "./input-component";
import { Box, Grid } from "@mui/material";

const DummyInputHolder = ({ guessingWord, setWrongLetters, wrongLetters, rightLetters, setRightLetters }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const lettersArray = guessingWord.split("").map((char) => char.toUpperCase());

  const handleInputChange = (value) => {
    if(value==="" || (value.length >1 && (value.split('').length < lettersArray.length || value.split('').length > lettersArray.length))){
      setDisabled(true);
    } else {
      setDisabled(false)
    }
  };

  const handleConfirm = () => {
    if(disabled){
      return
    } else {
      const newWrongLetters = !lettersArray.includes(inputValue)
        ? [...wrongLetters, inputValue]
        : wrongLetters;

      const newRightLetters = lettersArray.includes(inputValue)
        ? [...rightLetters, inputValue]
        : rightLetters;

      setWrongLetters(newWrongLetters);
      setRightLetters(newRightLetters);
      setInputValue("");
    }
    
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
          subtitle="Try to guess the letter or the whole word (must be 1 letter or the full word)"
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
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DummyInputHolder;
