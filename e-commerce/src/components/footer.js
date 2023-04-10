import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 RAIN. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
