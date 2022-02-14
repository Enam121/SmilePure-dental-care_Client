import { Button, Grid } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import Typography from '@mui/material/Typography';
import bgImage from '../../../images/appointment-bg.png'


const AppoientmentBanner = () => {

  const bg = {
    backgroundImage: `url(${bgImage})`,
    backgroundBlendMode: ' darken',
    backgroundColor: 'rgba(45,59,79,.9)',

  }

  return (
    <div style={{ ...bg, }} >
      <Grid container spacing="2" sx={{ placeItems: 'center', marginBottom: '50px', height: '400px' }} >

        <Grid item xs={6} md={4} sx={{ marginTop: '-102px' }}>
          <img src={doctor} alt="" style={{ width: "500px" }} />
        </Grid>
        <Grid item xs={6} md={8} sx={{ textAlign: 'left', color: 'white' }}>
          <Typography variant="h6">
            APPOIENTMENT
          </Typography>
          <Typography variant="h3" sx={{ marginY: '15px' }}>
            Make an appoientment today
          </Typography>
          <Typography variant="h6" sx={{
            fontWeight: 'light', marginY: '10px'
          }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cum sunt totam explicabo eum nisi unde, repellat debitis consectetur molestias.Nisi!
          </Typography>
          <Button variant="contained" sx={{ fontSize: '13px', backgroundColor: '#06dfd0', padding: '10px 25px', marginY: '10px' }}>
            LEARN MORE
          </Button>
        </Grid>

      </Grid >
    </div >
  );
};

export default AppoientmentBanner;