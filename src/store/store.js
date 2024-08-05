
import { configureStore } from '@reduxjs/toolkit';
// import quizReducer from './quizSlice';
import authReducer from './authSlice';
import startbtnReducer from './startbtnSlice';
import quizCreateReducer from './quizcreateSlice';
export const store = configureStore({
  reducer: {
    // quiz: quizReducer,
    auth: authReducer,
    startbtn:startbtnReducer,
    quizCreate: quizCreateReducer,
  },
});
