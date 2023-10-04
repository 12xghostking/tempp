// Main.js (using React Bootstrap)

import React from 'react';
import { Container} from 'react-bootstrap';
import Header from './components/Header/Header'; // Import your Header component
import AddAppointment from './components/Appointment/AddAppointment';

function Main() {
  return (
    <Container fluid>
      <Header />
      
          <AddAppointment />
    

   
    </Container>
  );
}

export default Main;
