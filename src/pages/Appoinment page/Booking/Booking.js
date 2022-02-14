import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const { name, time, price, space } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 5, m: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: '700', color: '#06dfd0' }}>
            {name}
          </Typography>
          <Typography variant="h6">
            {time}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '13px' }}>
            Price: ${price}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '13px' }}>
            {space} SPACES AVAILABLE
          </Typography>

          <Button onClick={handleOpen} variant="contained" sx={{ fontSize: '13px', backgroundColor: '#06dfd0', padding: '10px 15px', marginTop: '20px' }}>
            BOOK APPOINTMENT
          </Button>

        </Paper>
      </Grid>
      <BookingModal
        openModal={openModal}
        handleClose={handleClose}
        date={date}
        booking={booking}
      />
    </>
  );
};

export default Booking;