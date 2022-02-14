import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const getEmail = e => setEmail(e.target.value);

  const handleMakeAdmin = (e) => {
    e.preventDefault();

    const admin = { email };

    fetch('http://localhost:5000/admin', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(admin)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount) {
          alert('Make admin successfully')
        }
      });

  }

  return (

    <form onSubmit={handleMakeAdmin} style={{ display: 'flex', flexDirection: 'column', margin: '15px auto', width: '50%' }} >
      <Typography variant="h4">
        Make an admin
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Email"
          type="email"
          variant="filled"
          onBlur={getEmail}
        />
        <Button type="submit" variant="outlined">
          Make Admin
        </Button>
      </Box>
    </form>

  );
};

export default MakeAdmin;