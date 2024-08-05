import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyQuizzes = () => {
  const [savedQuiz, setSavedQuiz] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load quiz from localStorage
    const savedQuizData = localStorage.getItem('savedQuiz');
    if (savedQuizData) {
      try {
        const parsedData = JSON.parse(savedQuizData);
        setSavedQuiz(parsedData);
      } catch (error) {
        console.error('Error parsing saved quiz data:', error);
        setSavedQuiz({ questions: [] }); // Fallback to empty quiz in case of error
      }
    } else {
      setSavedQuiz({ questions: [] }); // Fallback to empty quiz if no data found
    }
  }, []);

  const handleStartQuiz = () => {
    navigate('/quiz'); // Navigate to quiz page
  };

  return (
    <Grid  container
    spacing={0}
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh', backgroundColor: '#354f52' }}>
      <Grid item xs={10} sm={8} md={6} sx={{ mt: 10, mb: 10 }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            My Quiz
          </Typography>
          {!savedQuiz || !savedQuiz.questions || savedQuiz.questions.length === 0 ? (
            <Typography variant="body1">No quiz available.</Typography>
          ) : (
            <>
              {savedQuiz.questions.map((q, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                  <Typography variant="body1" style={{ marginTop: '10px' }}>
                    <strong>Question {index + 1}:</strong> {q.question}
                  </Typography>
                  {q.options && q.options.length > 0 ? (
                    <Typography variant="body2">
                      <strong>Options:</strong> {q.options.join(', ')}
                    </Typography>
                  ) : (
                    <Typography variant="body2">
                      <strong>Options:</strong> No options available
                    </Typography>
                  )}
                  <Typography variant="body2">
                    <strong>Correct Answer:</strong> {q.correctAnswer}
                  </Typography>
                  <Divider style={{ margin: '20px 0' }} />
                </div>
              ))}
              <Button
                variant="contained"
                color="primary"
                onClick={handleStartQuiz}
                style={{ marginTop: '20px' }}
              >
                Start Quiz
              </Button>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
  


};

export default MyQuizzes;
