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
    <div style={{ backgroundColor: 'mediumpurple', height: '575px' }}>
      <Grid container spacing={2} alignItems="center" justifyContent='center'>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Quiz Game
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, mr: 2 }}>
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
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://static.vecteezy.com/system/resources/previews/009/656/928/original/the-template-of-the-mobile-application-interface-for-the-quiz-on-a-blue-background-test-exam-questions-and-answers-for-a-tv-show-illustration-of-eps10-vector.jpg"
              alt="Random"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
