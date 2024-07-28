// src/redux/startbtnSlice.js
import { createSlice } from '@reduxjs/toolkit';

const startbtnSlice = createSlice({
  name: 'startbtn',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    }
  }
});

export const { login, logout } = startbtnSlice.actions;
export default startbtnSlice.reducer;
