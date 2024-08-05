import { createSlice } from '@reduxjs/toolkit';

// Function to load quizzes from localStorage
const loadStateFromLocalStorage = () => {
  const savedQuiz = localStorage.getItem('quiz');
  return savedQuiz ? JSON.parse(savedQuiz) : { quizzes: [], questions: [] };
};

const initialState = {
  quizzes: [],
  questions: loadStateFromLocalStorage().questions,
};


const saveStateToLocalStorage = (state) => {
  localStorage.setItem('quiz', JSON.stringify(state));
};

export const quizCreateSlice = createSlice({
  name: 'quizCreate',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.quizzes.push(action.payload);
      saveStateToLocalStorage(state);
    },
    deleteQuestion: (state, action) => {
      const indexToRemove = action.payload;
      state.quizzes = state.quizzes.filter((_, index) => index !== indexToRemove);
      saveStateToLocalStorage(state);
    },
    saveQuiz: (state, action) => {
      if (Array.isArray(state.questions)) {
        state.questions.push(action.payload);
      } else {
        state.questions = [action.payload];
      }
      saveStateToLocalStorage(state);
    },
  },
});

export const { addQuestion, deleteQuestion, saveQuiz } = quizCreateSlice.actions;

export default quizCreateSlice.reducer;
