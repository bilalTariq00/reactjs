// quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
  showResult: false,
  timer: 60,
  timerOn: false,
  selectedAnswer: null,
  userResponses: [],
  quizQuestions: [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'Who wrote the novel "To Kill a Mockingbird"?',
      options: ['Jane Austen', 'Harper Lee', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
      correctAnswer: 'Harper Lee',
    },
    {
      id: 3,
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      id: 4,
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      correctAnswer: 'Mount Everest',
    },
    {
      id: 5,
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci',
    },
  ],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setShowResult: (state, action) => {
      state.showResult = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    setTimerOn: (state, action) => {
      state.timerOn = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    setUserResponses: (state, action) => {
      state.userResponses = action.payload;
    },
    startQuiz: (state) => {
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.timer = 60;
      state.showResult = false;
      state.timerOn = true;
      state.userResponses = [];
    },
    handleAnswerSelect: (state, action) => {
      const selectedOption = action.payload;
      const currentQuestion = state.quizQuestions[state.currentQuestionIndex];
      const isCorrect = selectedOption === currentQuestion.correctAnswer;

      state.selectedAnswer = selectedOption;

      state.userResponses.push({
        questionId: currentQuestion.id,
        selectedAnswer: selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect,
      });

      if (isCorrect) {
        state.score += 1;
      }

      if (state.currentQuestionIndex === state.quizQuestions.length - 1) {
        state.showResult = true;
        state.timerOn = false;
      } else {
        state.currentQuestionIndex += 1;
        state.selectedAnswer = null;
      }
    },
    restartQuiz: (state) => {
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.showResult = false;
      state.timer = 60;
      state.timerOn = false;
      state.selectedAnswer = null;
      state.userResponses = [];
    },
  },
});

// Export actions
export const {
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
} = quizSlice.actions;

// Export reducer
export default quizSlice.reducer;
