import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';

const Services = () => {

  const services = [
    {
      name: 'Fluoride Treatment',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at dolorum sed eveniet placeat',
      img: fluoride
    },
    {
      name: 'Cavity Filling',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at dolorum sed eveniet placeat',
      img: cavity
    },
    {
      name: 'Teath Whitening',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at dolorum sed eveniet placeat',
      img: whitening
    }
  ]



  return (
    <Box sx={{ flexGrow: 1, margin: '80px auto' }}>
      <Typography variant="h6" component="div" sx={{ color: 'info.main', fontWeight: '500' }}>
        OUR SERVICES
      </Typography>
      <Typography variant="h4" component="div" sx={{ fontWeight: '600', marginTop: '15px', marginBottom: '40px', color: '#081229' }}>
        Services We Provide
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          services.map(service => <Service key={service.name} service={service} />)
        }
      </Grid>
    </Box>
  );
};

export default Services;