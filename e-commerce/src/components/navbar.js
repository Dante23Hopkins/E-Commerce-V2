import React from 'react';
import '../styles/Navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Rain</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          {/* <a href="/cart" className="nav-link">Cart</a> */}
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
