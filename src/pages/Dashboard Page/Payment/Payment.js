import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
  const { appointmentId } = useParams()
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then(res => res.json())
      .then(data => setAppointment(data))

  }, [appointmentId]);

  return (
    <div>
      <h2>Please Pay for : {appointment.serviceName} for {appointment.patientName}</h2>
      <h2>${appointment.price}</h2>
    </div>
  );
};

export default Payment;