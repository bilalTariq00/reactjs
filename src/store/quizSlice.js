// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   quizQuestions: [], // Array to hold quiz questions
//   currentQuestionIndex: 0, // Index of the current question being displayed
//   score: 0, // User's score
//   showResult: false, // Flag to indicate if quiz result should be displayed
//   timer: 60, // Timer countdown in seconds
//   timerOn: false, // Flag to indicate if timer is running
//   selectedAnswer: null, // Currently selected answer by user
//   userResponses: [], // Array to store user responses for each question
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {
//     // Set quiz questions fetched from localStorage
//     setQuizQuestions: (state, action) => {
//       state.quizQuestions = action.payload;
//     },

//     // Set current question index
//     setCurrentQuestionIndex: (state, action) => {
//       state.currentQuestionIndex = action.payload;
//     },

//     // Set user's score
//     setScore: (state, action) => {
//       state.score = action.payload;
//     },

//     // Set flag to show quiz result
//     setShowResult: (state, action) => {
//       state.showResult = action.payload;
//     },

//     // Set timer value
//     setTimer: (state, action) => {
//       state.timer = action.payload;
//     },

//     // Set flag to control timer
//     setTimerOn: (state, action) => {
//       state.timerOn = action.payload;
//     },

//     // Set currently selected answer
//     setSelectedAnswer: (state, action) => {
//       state.selectedAnswer = action.payload;
//     },

//     // Set user responses for each question
//     setUserResponses: (state, action) => {
//       const { index, response } = action.payload;
//       state.userResponses[index] = response;
//     },

//     // Start the quiz by setting initial values
//     startQuiz: (state) => {
//       state.currentQuestionIndex = 0;
//       state.score = 0;
//       state.showResult = false;
//       state.timer = 60;
//       state.timerOn = true;
//       state.selectedAnswer = null;
//       state.userResponses = [];
//     },

//     // Handle user's answer selection
//     handleAnswerSelect: (state, action) => {
//       const { selectedAnswer } = action.payload;
//       const currentQuestion = state.quizQuestions[state.currentQuestionIndex];
//       const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

//       // Store the user response for the current question
//       state.userResponses[state.currentQuestionIndex] = {
//         questionId: currentQuestion.id,
//         selectedAnswer,
//         correctAnswer: currentQuestion.correctAnswer,
//         isCorrect,
//       };

//       // Calculate score if answer is correct
//       if (isCorrect) {
//         state.score += 1;
//       }

//       // Move to next question or show result
//       if (state.currentQuestionIndex < state.quizQuestions.length - 1) {
//         state.currentQuestionIndex += 1;
//         state.selectedAnswer = null; // Reset selected answer for the next question
//       } else {
//         state.showResult = true;
//         state.timerOn = false;
//       }
//     },

//     // Restart the quiz by resetting all state values
//     restartQuiz: (state) => {
//       state.currentQuestionIndex = 0;
//       state.score = 0;
//       state.showResult = false;
//       state.timer = 60;
//       state.timerOn = true;
//       state.selectedAnswer = null;
//       state.userResponses = [];
//     },
//   },
// });

// export const {
//   setQuizQuestions,
//   setCurrentQuestionIndex,
//   setScore,
//   setShowResult,
//   setTimer,
//   setTimerOn,
//   setSelectedAnswer,
//   setUserResponses,
//   startQuiz,
//   handleAnswerSelect,
//   restartQuiz,
// } = quizSlice.actions;

// export default quizSlice.reducer;
