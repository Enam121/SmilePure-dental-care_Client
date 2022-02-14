import React, { useState } from 'react';
import { Grid, Container, TextField, Paper, Button, Typography } from '@mui/material';
import loginImg from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginForm = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Your Password did not match!!')
      return
    }
    registerUser(loginData.email, loginData.password, loginData.name)
    e.preventDefault();

  }

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 3, placeItems: 'center ' }}>
        <Grid item xs={12} md={5} >
          <form onSubmit={handleLoginForm}>
            <Paper elevation={3} sx={{ p: 8 }}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Register
              </Typography>
              <TextField
                label="Enter Your Full Name"
                type="text"
                variant="standard"
                fullWidth
                name="name"
                onChange={handleOnChange}
              />
              <br />
              <br />
              <TextField
                label="Your Email"
                type="email"
                variant="standard"
                fullWidth
                name="email"
                onChange={handleOnChange}
              />
              <br />
              <br />
              <TextField
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                name="password"
                onChange={handleOnChange}
              />
              <br />
              <br />
              <TextField
                type="password"
                label="Re Enter Password"
                variant="standard"
                fullWidth
                name="password2"
                onChange={handleOnChange}
              />
              <br />
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ fontSize: '13px', backgroundColor: '#06dfd0', padding: '10px 55px', marginTop: '20px' }}>Register</Button>
              <NavLink to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="text">Already registered? Please Login</Button>
              </NavLink>
            </Paper>
          </form>
        </Grid>
        <Grid item xs={12} md={6} sx={{ ml: 'auto' }}>
          <img src={loginImg} alt="" width="90%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;