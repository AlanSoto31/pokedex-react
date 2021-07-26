import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => (
  <Nav className="navbar navbar-light bg-light d-flex justify-content-center align-content-center">
    <div className="">
      <img
        alt="POKEMON"
        src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"
      />
      <Link className="navbar-brand" to="/"><p className="nav-home text-center">Home</p></Link>
    </div>
  </Nav>
);

export default Navbar;
