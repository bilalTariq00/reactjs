import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const DemoQuiz=()=>{
    return(
        <div style={{ backgroundColor:'mediumpurple' }}>
    <Grid container spacing={2} alignItems="center"  >
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPMdKi9cGSJJPXUnlifQjbXwyn8nT5uRaJdx5P5KyjuVyiUHU-wlek9LoKbC3nmkaI64XAHcBqn5BuOZCgVi013MLRbLWcp1E_KNx10vTGm06U5TRWn0A6rBcfssGOhKas48AbdJwgDYs5/s1600/python+quiz.jpg"
            alt="Random"
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{mb:1}}>
            Paython
          </Typography>
          <Typography variant="body1" sx={{mb:1}}>
            Got questions about Paython that check your status and text your abilties about how much you know about it.
          </Typography>
          <Button variant="contained" color="primary" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.topzenith.com%2F2020%2F04%2Fpython-quiz-with-questions-and-answers.html&psig=AOvVaw2zDviC-phyCmK2bfbZAETe&ust=1721985358784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKCW5vvtwYcDFQAAAAAdAAAAABAE">
            Check out this Quiz
          </Button>
        </CardContent>
      </Grid>

      {/*React Quiz info */}

      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{mb:1}}>
            React
          </Typography>
          <Typography variant="body1" sx={{mb:1}}>
            Got questions about REACT that check your status and text your abilties about how much you know about it.
          </Typography>
          <Button variant="contained" color="primary" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freshersnow.com%2Freact-js-quiz%2F&psig=AOvVaw1IAbDE0fLDK58tM5Dz53CZ&ust=1721986082293000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCIC9sJvwwYcDFQAAAAAdAAAAABAK">
            Check out this Quiz
          </Button>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={6}>
        
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2C0BgaLxahbYMKAMX8Tn0krybK4RbSMbNmw&s"
            alt="Random"
          />
        </Card>
      </Grid>

      {/*C++ Quiz info */}

      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://blog.eduonix.com/wp-content/uploads/2016/02/c-17-02.jpg"
            alt="Random"
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{mb:1}}>
                C++
          </Typography>
          <Typography variant="body1" sx={{mb:1}}>
            Got questions about C++ that check your status and text your abilties about how much you know about it.
          </Typography>
          <Button variant="contained" color="primary" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.topzenith.com%2F2020%2F04%2Fpython-quiz-with-questions-and-answers.html&psig=AOvVaw2zDviC-phyCmK2bfbZAETe&ust=1721985358784000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCKCW5vvtwYcDFQAAAAAdAAAAABAE">
            Check out this Quiz
          </Button>
        </CardContent>
      </Grid>
    </Grid>
    </div>
    )
}
export default DemoQuiz