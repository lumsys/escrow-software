import React from 'react';
import { Nav, Navbar ,NavDropdown, Container, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Paythru from "../paythru.png";
import './homepage.css'

function Navbar1(){
    return(
    <div>
    <Navbar  expand="lg">
  <Container>
    <Navbar.Brand href="/"><img src={Paythru} className="logopay" alt="paythru logo" /></Navbar.Brand>
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/"  className="col-wh">Home</Nav.Link>
        <Nav.Link href="/aboutus"  className="col-wh">About us</Nav.Link>
        <Nav.Link href="/resource"  className="col-wh">Resources</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>    
    <Button><Link to="/auth/signin">Login</Link></Button>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>
    </div>)
}

export default Navbar1;