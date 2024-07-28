// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    password: '',
    loggedIn: false,
    error: ''
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    login: (state) => {
      if (state.password.length < 6) {
        state.error = 'Password must be at least 6 characters long';
      } else {
        state.loggedIn = true;
        state.error = '';
      }
    },
    logout: (state) => {
      state.loggedIn = false;
      state.username = '';
      state.password = '';
    }
  }
});

export const { setUsername, setPassword, setError, login, logout } = authSlice.actions;
export default authSlice.reducer;
