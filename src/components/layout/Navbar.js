import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbar2 = () => {

  return (
    <Navbar bg="white" expand="md" variant="light">
    <Container fluid>

      <Navbar.Brand href="#" className="m-2">
        LOGO
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
       
        <Nav className="ms-auto me-5">
          <Nav.Link href="" className="fw-bold">Home</Nav.Link>
          <Nav.Link href="" className="fw-bold">Services</Nav.Link>
          <Nav.Link href="" className="fw-bold">About</Nav.Link>
          <Nav.Link href="" className="fw-bold">Blogs</Nav.Link>
          <Nav.Link href="" className="fw-bold">Contact</Nav.Link>
          <Nav.Link href="" className="fw-bold">Branches</Nav.Link>
        </Nav>

        <Button variant="warning" className=" fw-bold">
          GET A QUOTE
        </Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navbar2;
