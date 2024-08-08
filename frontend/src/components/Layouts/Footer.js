import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Optional: for custom styling
import LOGO from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
         <img className='logo' src={LOGO}></img>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="/blog">&copy; 2024 Nikhil Verma </a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/signup">Sign up</a></li>
            <li><a href="/terms">Terms of use</a></li>
            <li><a href="/privacy">Privacy policy</a></li>
          </ul>
          <div className="footer-icons">
            <a href="https://github.com" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
