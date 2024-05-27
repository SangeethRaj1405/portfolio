// src/pages/Navbar.js
import React from 'react';

// Using react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navvbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>P S Sangeeth Raj</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>projects</Nav.Link>
            <Nav.Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navvbar;
