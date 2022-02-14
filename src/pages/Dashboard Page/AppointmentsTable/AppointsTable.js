import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';


const AppointsTable = ({ date }) => {
  const { user } = useAuth();
  const [bookedAppointment, setBookedAppointment] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booked-appointments?email=${user.email}&date=${date.toLocaleDateString()}`)
      .then(res => res.json())
      .then(data => setBookedAppointment(data))

  }, [date])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Patient Name</TableCell>
            <TableCell align="center">Schedule</TableCell>
            <TableCell align="center">appointment</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookedAppointment.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center">{appointment.patientName}</TableCell>
              <TableCell align="center">{appointment.time}</TableCell>
              <TableCell align="center">{appointment.serviceName}</TableCell>
              <TableCell align="center">{appointment.payment ? 'Paid' :
                <Link to={`/dashboard/payment/${appointment._id}`}><button>Pay</button></Link>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointsTable;