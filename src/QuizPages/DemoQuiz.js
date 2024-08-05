import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DemoQuiz = () => {
  return (
    <div style={{ backgroundColor: '#354f52', padding: '20px' , border:10}}>
      <Grid container spacing={2} alignItems="center" >
        <Grid item xs={12} md={6} >
          <Card style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <CardMedia
              component="img"
              height="250"
              image="/Python-programming-logo-on-transparent-background-PNG.png"
              alt="Python Quiz"
              style={{
                padding: '5px',
                background: 'none', // Remove background color if any
                objectFit: 'contain', // Fit image within the defined height
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
              Python
            </Typography>
            <Typography variant="body1" style={{ color: 'white' }}>
              Got questions about Python that check your status and test your abilities about how much you know about it.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.topzenith.com%2F2020%2F04%2Fpython-quiz-with-questions-and-answers.html&psig=AOvVaw2zDviC-phyCmK2bfbZAETe&ust=1721985358784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKCW5vvtwYcDFQAAAAAdAAAAABAE"
              style={{ marginTop: '10px' }}
            >
              Check out this Quiz
            </Button>
          </CardContent>
        </Grid>

        {/* React Quiz info */}
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
              React
            </Typography>
            <Typography variant="body1" style={{ color: 'white' }}>
              Got questions about React that check your status and test your abilities about how much you know about it.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freshersnow.com%2Freact-js-quiz%2F&psig=AOvVaw1IAbDE0fLDK58tM5Dz53CZ&ust=1721986082293000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCIC9sJvwwYcDFQAAAAAdAAAAABAK"
              style={{ marginTop: '10px' }}
            >
              Check out this Quiz
            </Button>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <CardMedia
              component="img"
              height="250"
              image="/logo512.png"
              alt="React Quiz"
              style={{
                padding: '5px',
                background: 'none', // Remove background color if any
                objectFit: 'contain', // Fit image within the defined height
              }}
            />
          </Card>
        </Grid>

        {/* C++ Quiz info */}
        <Grid item xs={12} md={6}>
          <Card style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <CardMedia
              component="img"
              height="250"
              image="/pngwing.com.png"
              alt="C++ Quiz"
              style={{
                padding: '5px',
                background: 'none', // Remove background color if any
                objectFit: 'contain', // Fit image within the defined height
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
              C++
            </Typography>
            <Typography variant="body1" style={{ color: 'white' }}>
              Got questions about C++ that check your status and test your abilities about how much you know about it.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.topzenith.com%2F2020%2F04%2Fpython-quiz-with-questions-and-answers.html&psig=AOvVaw2zDviC-phyCmK2bfbZAETe&ust=1721985358784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKCW5vvtwYcDFQAAAAAdAAAAABAE"
              style={{ marginTop: '10px' }}
            >
              Check out this Quiz
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default DemoQuiz;
