import React, { useState } from 'react';
import { Grid, Container, TextField, Paper, Button, Typography } from '@mui/material';
import loginImg from '../../../images/login.png';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Nav from '../../Shared/Nav/Nav';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser } = useAuth();
  const location = useLocation()
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginForm = (e) => {
    loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault();
  }

  return (
    <>
      <Nav />
      <Container>
        <Grid container spacing={2} sx={{ mt: 3, placeItems: 'center ' }}>
          <Grid item xs={12} md={5} >
            <form onSubmit={handleLoginForm}>
              <Paper elevation={3} sx={{ p: 8 }}>
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Login
                </Typography>
                <TextField
                  label="Eamil"
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ fontSize: '13px', backgroundColor: '#06dfd0', padding: '10px 55px', marginTop: '20px' }}>Login</Button>
                <NavLink to="/register" style={{ textDecoration: 'none' }}>
                  <Button variant="text">New uer? Please Register</Button>
                </NavLink>
              </Paper>
            </form>
          </Grid>
          <Grid item xs={12} md={6} sx={{ ml: 'auto' }}>
            <img src={loginImg} alt="" width="90%" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;