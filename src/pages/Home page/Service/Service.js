import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = ({ service }) => {

  const { name, img, description } = service;

  return (
    <Grid item xs={4} sm={4} md={4}>


      <Card sx={{ minWidth: 250, boxShadow: 0 }}>

        <CardMedia
          component="img"
          sx={{ width: 'auto', margin: '5px auto' }}
          height="60"
          image={img}
          alt={name}
        />

        <CardContent>
          <Typography variant="h6" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ width: '50%', margin: '10px auto' }}>

            {description}
          </Typography>
        </CardContent>

      </Card>

    </Grid>
  );
};

export default Service;