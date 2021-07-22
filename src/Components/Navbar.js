import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav>
    <Link className="navbar-brand" to="/"><p>Home</p></Link>
  </Nav>
);

export default Navbar;
