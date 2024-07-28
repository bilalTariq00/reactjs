// src/components/Navbar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  logout } from '../store/startbtnSlice'; 

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.startbtn.loggedIn); 

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); 
  };

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quiz App
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/demoquiz" color="inherit">
          Other Quiz
        </Button>
        {loggedIn && (
          <Button color="inherit" variant='contained' onClick={handleLogout}>
            LogOut
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
