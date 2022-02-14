import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Calender from '../../Shared/Calendar/Calender';
import AppointmentsTable from '../AppointmentsTable/AppointsTable';

const DashboardHome = () => {

  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Calender date={date} setDate={setDate} />
        </Grid>
        <Grid item md={7}>
          <AppointmentsTable date={date} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;