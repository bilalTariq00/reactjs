// src/components/LogIn.js
import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setError, login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the auth slice from the Redux state
  const { username, password, error, loggedIn } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login());
  };

  React.useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
  }, [loggedIn, navigate]);

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px', height: '400px', backgroundColor: 'lavender' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <TextField
            color='secondary'
            label="Username"
            variant="filled"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <TextField
            color='secondary'
            label="Password"
            variant="filled"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          {error && (
            <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            style={{ marginTop: '10px' }}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LogIn;
