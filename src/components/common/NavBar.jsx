import React from 'react';
import {Navbar, Nav,NavDropdown} from 'react-bootstrap'
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">Proyecto 2: Rick & Morty API</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ">
          <Nav.Link><Link to="/" style={{color: 'white'}}>Home</Link></Nav.Link>
          <Nav.Link><Link to="/characters" style={{color: 'white'}}>Personajes</Link></Nav.Link>
          <Nav.Link><Link to="/episodes" style={{color: 'white'}}>Episodios</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;