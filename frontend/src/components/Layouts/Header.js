import React from 'react';
import './Header.css';
import Hero from '../../images/hero.gif'

const Header = () => {
  return (
    <div className="container">
      <div className="stack row">
        <div className="stack">
          <h1 className="heading">
            If You Want To Get Gaining, Get A Resume
          </h1>
          <p className="text">
            Resumegen is a tool that often constitutes an automated process in which you follow a template and input your information. Ability to build, print, and download your resume for free in minutes.
          </p>
          <div className="buttons row">
            <a href="#builder" className="button">
              Build Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="Hero Image" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Header;
