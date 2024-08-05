import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questionTimer, setQuestionTimer] = useState(15); // Timer for each question
  const [userResponses, setUserResponses] = useState([]); // To track user responses

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch quiz data from localStorage
    const savedQuizData = localStorage.getItem('savedQuiz');
    if (savedQuizData) {
      try {
        const parsedData = JSON.parse(savedQuizData);
        setQuizData(parsedData);
      } catch (error) {
        console.error('Error parsing saved quiz data:', error);
        setQuizData({ questions: [] }); // Fallback to empty quiz in case of error
      }
    } else {
      setQuizData({ questions: [] }); // Fallback to empty quiz if no data found
    }
  }, []);

  useEffect(() => {
    let interval;
    if (questionTimer > 0 && !showResult) {
      interval = setInterval(() => {
        setQuestionTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (questionTimer === 0) {
      handleAnswer(null); // Auto-handle if no answer selected when timer runs out
    }

    return () => clearInterval(interval);
  }, [questionTimer, showResult]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setQuestionTimer(15); // Reset timer for the next question
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      setShowResult(true); // Show result if no more questions
    }
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizData?.questions[currentQuestionIndex];

    // Check if selectedOption is the correct answer
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Update user responses
    const updatedResponses = [...userResponses];
    updatedResponses[currentQuestionIndex] = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedOption,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: isCorrect
    };
    setUserResponses(updatedResponses);

    // Update score if the answer is correct
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to the next question or show result if it's the last question
    moveToNextQuestion();
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setQuestionTimer(15); // Reset timer for the first question
    setSelectedAnswer(null); // Reset selected answer
    setUserResponses([]); // Reset user responses
  };

  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return <div>Loading...</div>; // Or some other fallback UI
  }

  const numberOfQuestions = quizData.questions.length;
  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', backgroundColor: '#354f52' }}
    >
      <Grid item xs={10} sm={8} md={6} sx={{ mt: 10, mb: 10 }}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          {showResult ? (
            <div>
              <Typography variant="h4" gutterBottom style={{ color: 'darkgreen' }}>
                Quiz Results
              </Typography>
              <Typography variant="h6" gutterBottom style={{ color: 'darkgreen' }}>
                Your score: {score}/{numberOfQuestions}
              </Typography>
              <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                {quizData.questions.map((q, index) => {
                  const userResponse = userResponses[index];
                  return (
                    <div key={index} style={{ marginBottom: '10px' }}>
                      <Typography variant="body1" gutterBottom style={{ color: 'darkgreen' }}>
                        {index + 1}. {q.question}
                      </Typography>
                      <Typography variant="body2" gutterBottom style={{ color: 'darkgreen' }}>
                        Your Answer: {userResponse ? userResponse.selectedAnswer : 'No answer selected'}
                      </Typography>
                      <Typography variant="body2" gutterBottom style={{ color: 'darkgreen' }}>
                        Correct Answer: {q.correctAnswer}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ color: userResponse ? (userResponse.isCorrect ? '#4caf50' : '#f44336') : 'gray' }}
                      >
                        {userResponse ? (userResponse.isCorrect ? 'Correct' : 'Incorrect') : 'No response'}
                      </Typography>
                    </div>
                  );
                })}
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRestart}
                style={{ marginTop: '20px' }}
              >
                Restart Quiz
              </Button>
            </div>
          ) : (
            <div>
              <Typography variant="h5" gutterBottom style={{ color: 'darkgreen' }}>
                Question {currentQuestionIndex + 1}/{numberOfQuestions}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: 'darkgreen' }}>
                {currentQuestion.question || 'No question available'}
              </Typography>
              <div style={{ marginBottom: '20px' }}>
                {currentQuestion.options?.map((option, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    color="secondary"
                    style={{
                      margin: '5px',
                      backgroundColor:
                        selectedAnswer === option
                          ? option === currentQuestion.correctAnswer
                            ? '#4caf50' // Green for correct answer
                            : '#f44336' // Red for incorrect answer
                          : '',
                      color: selectedAnswer === option ? 'white' : 'darkgreen',
                    }}
                    onClick={() => {
                      setSelectedAnswer(option); // Set selected answer
                      handleAnswer(option); // Handle answer and move to next question
                    }}
                    disabled={selectedAnswer !== null} // Disable options after selection
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <Typography variant="body2" gutterBottom style={{ color: 'darkgreen' }}>
                Time left: {questionTimer} seconds
              </Typography>
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Quiz;