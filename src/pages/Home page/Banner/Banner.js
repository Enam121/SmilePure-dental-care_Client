import { Container, Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';
import banner from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const Banner = () => {

  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover'
  }

  const virticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height: '550px',
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={2} style={bgImage}>
          <Grid item xs={12} md={5} sx={{ ...virticalAlign, textAlign: 'left' }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: "13", fontWeight: '600' }}>
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: '300', color: 'secondary', fontSize: '15px', paddingY: '15px', width: '75%' }}>
                We provide you beautiful smile on your teath.
                if you stay with us you enjoy your smile more than..
                with your healthy teath.

              </Typography>
              <Button variant="contained" sx={{ fontSize: '12px', backgroundColor: '#06dfd0', padding: '10px 15px' }}>
                GET APPOINTMENT
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} style={virticalAlign}>
            <img src={banner} alt="" height="300px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;