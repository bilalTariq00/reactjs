import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentQuestionIndex,
  setScore,
  setShowResult,
  setTimer,
  setTimerOn,
  setSelectedAnswer,
  setUserResponses,
  startQuiz,
  handleAnswerSelect,
  restartQuiz,
} from '../store/quizSlice';

const Quiz = () => {
  const dispatch = useDispatch();
  const {
    currentQuestionIndex,
    score,
    showResult,
    timer,
    timerOn,
    selectedAnswer,
    userResponses,
    quizQuestions,
  } = useSelector((state) => state.quiz);

  // Timer countdown effect
  useEffect(() => {
    let interval;
    if (timerOn && timer > 0) {
      interval = setInterval(() => {
        dispatch(setTimer(timer - 1));
      }, 1000);
    } else if (timer === 0) {
      dispatch(setShowResult(true)); // Show result after timer expires
      dispatch(setTimerOn(false)); // Stop the timer
    }
    return () => clearInterval(interval);
  }, [dispatch, timerOn, timer]);

  const handleAnswer = (selectedOption) => {
    if(timer===60){
      dispatch(startQuiz());
    }
    dispatch(setSelectedAnswer(selectedOption));
    dispatch(handleAnswerSelect(selectedOption));
   
  };

  const handleRestart = () => {
    dispatch(restartQuiz());
  };

  const handleStart = () => {
    dispatch(startQuiz());
  };

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh',backgroundColor:'mediumpurple' }}

    >
        
      <Grid item xs={10} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          {showResult ? (
            <div>
              <Typography variant="h4" gutterBottom>
                Quiz Results
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your score: {score}/{quizQuestions.length}
              </Typography>
              <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                {userResponses.map((response, index) => (
                  <div key={index} style={{ marginBottom: '10px' }}>
                    <Typography variant="body1" gutterBottom>
                      {index + 1}. {quizQuestions.find(q => q.id === response.questionId).question}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Your Answer: {response.selectedAnswer}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Correct Answer: {response.correctAnswer}
                    </Typography>
                    <Typography variant="body2" gutterBottom style={{ color: response.isCorrect ? 'green' : 'red' }}>
                      {response.isCorrect ? 'Correct' : 'Incorrect'}
                    </Typography>
                  </div>
                ))}
              </div>
              <Button variant="contained" color="primary" onClick={handleRestart}>
                Restart Quiz
              </Button>
            </div>
          ) : (
            <div >
              <Typography variant="h5" gutterBottom>
                Question {currentQuestionIndex + 1}/{quizQuestions.length}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {quizQuestions[currentQuestionIndex].question}
              </Typography>
              <div style={{ marginBottom: '20px' }} >
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    color='secondary'
                    style={{
                      margin: '5px',
                      backgroundColor:
                        selectedAnswer === option
                          ? option === quizQuestions[currentQuestionIndex].correctAnswer
                            ? '#4caf50' // Green for correct answer
                            : '#f44336' // Red for incorrect answer
                          : '',
                      color: selectedAnswer === option ? 'white' : '',
                      
                    }}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {timerOn ? (
                <Typography variant="body2" gutterBottom>
                  Time left: {timer} seconds
                </Typography>
              ) : (
                <Button variant="contained" color="primary" onClick={handleStart} >
                  Start Quiz
                </Button>
              )}
              {selectedAnswer !== null && (
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Correct Answer: {quizQuestions[currentQuestionIndex].correctAnswer}
                </Typography>
              )}
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Quiz;
