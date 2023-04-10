import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Rain</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="/cart" className="nav-link">Cart</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
