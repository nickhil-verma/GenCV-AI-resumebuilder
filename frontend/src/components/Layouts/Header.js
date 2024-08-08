import React from 'react';
import './Header.css';
import Hero from '../../images/hero.gif'
import Gemini from '../../images/GeminiLogo.png'

const Header = () => {
  return (
    <div className="container">
      <div className="stack row">
        <div className="stack">
          <h1 className="heading">
             ATS score? <br></br> you are at the right place
          </h1>
          <p className="text">
            GenCV is a tool that is powered by <img className="geminiLogo"src={Gemini} /> and often constitutes an automated process in which you follow a template and input your information. Ability to build, print, and download your resume for free in minutes.
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
