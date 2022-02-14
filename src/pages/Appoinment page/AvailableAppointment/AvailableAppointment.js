import React from 'react';
import { Typography } from '@mui/material';
import { Container, Grid } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
  { id: 1, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', price: 21, space: 10 },
  { id: 2, name: 'Cosmetic Dentistry', time: '10:05 AM - 11:30 AM', price: 30, space: 10 },
  { id: 3, name: 'Teeth Cleaning', time: '5:00 PM - 6:30 PM', price: 19, space: 10 },
  { id: 4, name: 'Cavity Protection', time: '7:00 AM - 8:30 AM', price: 25, space: 10 },
  { id: 5, name: 'Pediatric Dental', time: '8:00 AM - 9:00 AM', price: 28, space: 10 },
  { id: 6, name: 'Oral Surgery', time: '8:00 AM - 9:00 AM', price: 35, space: 10 },

]

const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 12, color: '#06dfd0', fontWeight: '600' }}>
        Available Appointments on {date.toDateString()}
      </Typography>

      <Grid container spacing={2}>
        {
          bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} />)
        }
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;