import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, deleteQuestion, saveQuiz } from '../store/quizcreateSlice'; // Import from quizCreateSlice

const QuizCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizzes = useSelector((state) => state.quizCreate.quizzes,[]); // Access quizzes from quizCreate slice

  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');



  const handleAddQuestion = () => {
    if (newQuestion.trim() === '' || options.some(opt => opt.trim() === '') || correctAnswer.trim() === '') {
      alert('Please fill in all fields before adding a question.');
      return;
    }

    const newQuizQuestion = {
      question: newQuestion,
      options: [...options],
      correctAnswer: correctAnswer,
    };

    dispatch(addQuestion(newQuizQuestion)); // Dispatch addQuiz action to Redux
    setNewQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index)); // Dispatch with correct index
  };
  const handleSaveQuiz = () => {
    if (quizzes && quizzes.length === 0) {
      alert('Cannot save quiz without any questions.');
      return;
    }
    dispatch(saveQuiz)
    // Save quiz to localStorage
    localStorage.setItem('savedQuiz', JSON.stringify({ questions: quizzes }));

    alert('Quiz saved successfully!');
    navigate('/my-quizzes'); // Navigate to the page that displays the quizzes
  };

  const handleViewQuizzes = () => {
    navigate('/my-quizzes'); // Navigate to the page that displays the quizzes
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
            Create Quiz
          </Typography>
          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          {options.map((option, index) => (
            <TextField
              key={index}
              label={`Option ${index + 1}`}
              variant="outlined"
              fullWidth
              margin="normal"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}
          <TextField
            label="Correct Answer"
            variant="outlined"
            fullWidth
            margin="normal"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddQuestion}
            style={{ marginTop: '10px' }}
          >
            Add Question
          </Button>

          <Divider style={{ margin: '20px 0' }} />

          <Typography variant="h6" gutterBottom>
            Your Quiz
          </Typography>
          {quizzes && quizzes.length === 0 ? (
            <Typography variant="body1">No questions added yet.</Typography>
          ) : (
            quizzes.map((q, index) => (
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
                  <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteQuestion(index)} // Pass the correct index
                  style={{ marginTop: '10px' }}
                >
                  Delete
                </Button>
                </div>
              ))
              
          )}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSaveQuiz}
            style={{ marginTop: '20px' }}
            sx={{mr:2}}
          >
            Save Quiz
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleViewQuizzes}
            style={{ marginTop: '20px' }}
          >
            View All Quizzes
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default QuizCreation;
