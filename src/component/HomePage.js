import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { Card } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleButtonClick = () => {
    if (loggedIn) {
      navigate('/quiz'); // Redirect to quiz page if logged in
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  return (
    <div style={{ backgroundColor: '#354f52', height: '100vh', padding: '20px' }}>
      <Grid container spacing={2} alignItems="center" justifyContent='center' style={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom style={{ color: 'white' }}>
            Quiz Game
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, mr: 2 }} style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            hendrerit finibus ex sed ultrices. Duis commodo diam mauris, ac
            facilisis ante vehicula a. Sed vel arcu elit. Integer ac lorem nec
            leo lacinia ultricies.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            {loggedIn ? 'Go to Quiz' : 'Start Now!'}
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <CardMedia
              component="img"
              height="auto"
              image="/pngaaa.com-2050119.png" // Ensure this image has transparency
              alt="Quiz Illustration"
              style={{ width: '100%', objectFit: 'contain' }} // Ensure the image fits correctly
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
