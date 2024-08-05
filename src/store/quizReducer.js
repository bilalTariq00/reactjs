// // quizReducer.js
// import { createStore, combineReducers } from 'redux';

// const initialState = {
//   quizQuestions: [],
//   currentQuestionIndex: 0,
//   score: 0,
//   showResult: false,
//   timer: 60,
//   timerOn: false,
//   selectedAnswer: null,
//   userResponses: [],
// };

// const quizReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_QUIZ_QUESTIONS':
//       return { ...state, quizQuestions: action.payload };
//     case 'SET_CURRENT_QUESTION_INDEX':
//       return { ...state, currentQuestionIndex: action.payload };
//     case 'SET_SCORE':
//       return { ...state, score: action.payload };
//     case 'SET_SHOW_RESULT':
//       return { ...state, showResult: action.payload };
//     case 'SET_TIMER':
//       return { ...state, timer: action.payload };
//     case 'SET_TIMER_ON':
//       return { ...state, timerOn: action.payload };
//     case 'SET_SELECTED_ANSWER':
//       return { ...state, selectedAnswer: action.payload };
//     case 'SET_USER_RESPONSES':
//       return { ...state, userResponses: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   quiz: quizReducer,
// });

// const store = createStore(rootReducer);

// export default store;