
import { Avatar, Box, Container, Grid, Icon, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MyButton from "../button"
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./../../assets/logo3.png"


function Home({ setRunTimer, runTimer, setLettersArray, setLetterState, setRightLetters, setWrongLetters }) {
  const handleStart = () => {
    console.log("handleStart called");
    setLetterState("pending")
    setRunTimer(true)
    setRightLetters([])
    setWrongLetters([])
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
          height: '100vh',
          backgroundImage: 'linear-gradient(to bottom right, #720E7A, #0F1A37)',
          color: '#fff',
        }}
      >
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>

          <IconButton>
            <InfoIcon fontSize="large" />
          </IconButton>

          <IconButton>
            <ContactMailIcon fontSize="large" />
          </IconButton>
        </Box>

        <Grid container direction="column" alignItems="center" sx={{ textAlign: 'center', marginTop: { lg: '2rem', xs: "4rem" } }}>
          <Avatar
            alt="Your Logo"
            src={Logo}
            sx={{ width: { lg: '34rem', xs: "20rem" }, height: 'auto', borderRadius: 0 }}

          />
          <Box sx={{ display: 'inline-block', border: { lg: "solid #FFC700 3px", xs: "solid #FFC700 2px" }, p: "0.5rem 1rem 0.5rem 1rem", borderRadius: "3rem" }}>
            <Typography sx={{ fontSize: { lg: "2rem", xs: "1.2rem" }, fontWeight: 400, color: "#FFC700" }} >
              GUESS THE SECRET WORD
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="center" >
          <Grid item lg={8} mt="2rem" >
            <Typography sx={{ fontSize: { lg: "16pt", xs: "12pt" } }} textAlign="center">
              Welcome to <span style={{ color: "#FFC700" }}>Word Fever</span>, where words come to life! Unleash your creativity, challenge your friends, and dive into a world of linguistic excitement. Start a new game or join the fun now!
            </Typography>
          </Grid>
          <Grid item lg={8} sx={{ mt: { xs: "5rem" } }} >
            <Grid container justifyContent="center" gap="1rem">
              <Link to="/start-new-game">
                <MyButton buttonText="Start New Game" color="gradient" onClick={handleStart} />
              </Link>
              <Link to="/join-game">
                <MyButton buttonText="Join the game" color="gradient" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </div >
  );
}

export default Home;
