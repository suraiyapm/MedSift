// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Navigation({ navigate, userId }) {
  return (
    <nav className="nav-container">
      <div className="nav-logo" onClick={() => navigate("/")}>
        <img
          src="/MedSiftLogo1-SPM.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </div>
      <ul className = "navi-links">
        <li><a href="/">Home</a></li>
        <li><a href="/journals">Journals</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;