import React, { useState, } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openModal, handleClose, date, booking }) => {
  const { user } = useAuth()
  const { name, time, price } = booking;
  const deafultBookingInfo = { patientName: user.displayName, email: user.email, phone: '' }

  const [bookingInfo, setBookingInfo] = useState(deafultBookingInfo)

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[field] = value;
    setBookingInfo(newBookingInfo);

  }

  const handleBookingform = (e) => {
    e.preventDefault();

    //collect booking data
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      price,
      time,
      date: date.toLocaleDateString(),
    }
    //send data to server
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(appointment)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('successfully booked')
        }
      })
    handleClose()

  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>

            <form onSubmit={handleBookingform}>
              <Typography sx={{ my: 1 }} >
                {name}
              </Typography>
              <TextField
                fullWidth
                defaultValue={time}
                size="small" sx={{ my: 1 }}
                InputProps={{
                  readOnly: true,
                }} />
              <TextField
                fullWidth
                defaultValue={date.toDateString()}
                size="small" sx={{ my: 1 }}
                InputProps={{
                  readOnly: true,
                }} />
              <TextField
                fullWidth
                label="Your Name"
                name="patientName"
                defaultValue={user.displayName}
                onBlur={handleOnBlur}
                size="small"
                sx={{ my: 1 }} />
              <TextField
                fullWidth
                label="Email"
                name="email"
                defaultValue={user.email}
                onBlur={handleOnBlur}
                size="small"
                sx={{ my: 1 }} />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onBlur={handleOnBlur}
                size="small"
                sx={{ my: 1 }} />

              <Button
                type="submit"
                variant="contained"
                sx={{ fontSize: '14px', backgroundColor: '#06dfd0', padding: '5px 45px', marginTop: '20px' }}
              >
                SEND
              </Button>
            </form>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;