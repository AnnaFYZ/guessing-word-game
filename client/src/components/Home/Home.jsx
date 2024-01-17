
import { Box, IconButton, Typography, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MyButton from "../button"
import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
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

        <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
          <Typography variant="h1" gutterBottom>
            Word Fever
          </Typography>

          <Typography variant="h3" gutterBottom>
            GUESS THE SECRET WORD
          </Typography>

          <Typography variant="h4" paragraph>
            Welcome to Word Fever, where words come to life! Unleash your creativity, challenge your friends, and dive into a world of linguistic excitement. Start a new game or join the fun now!
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
            <Link to="/start-new-game">
              <MyButton buttonText="Start New Game" color="gradient" />
            </Link>

            <Link to="/join-game">
              <MyButton buttonText="Join the game" color="gradient" />
            </Link>
          </Box>
        </Box>
      </Box>

    </div>
  );
}

export default Home;
