import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const QuizAttempt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const quiz = location.state?.quiz; // Get quiz data from location.state

  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  if (!quiz) {
    return <Typography variant="body1">No quiz found.</Typography>;
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === quiz.correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect! The correct answer is: ' + quiz.correctAnswer);
    }
  };

  const handleBack = () => {
    navigate('/my-quizzes'); // Navigate back to MyQuizzes page
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Attempt Quiz
          </Typography>
          <Typography variant="h6">
            <strong>Question:</strong> {quiz.question}
          </Typography>
          {quiz.options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              style={{ margin: '5px' }}
              onClick={handleOptionChange}
              value={option}
            >
              {option}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
          {feedback && (
            <Typography variant="body1" style={{ marginTop: '20px' }}>
              {feedback}
            </Typography>
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBack}
            style={{ marginTop: '20px' }}
          >
            Back to Quizzes
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default QuizAttempt;
