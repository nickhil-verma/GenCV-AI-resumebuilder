import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.svg'

const Navbar = () => {
    return (
        <header className="navbar-container">
            <div className="navbar-flex">
                <img className='logo' src={Logo}></img>
                <nav className="navbar-nav">
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#" className="navbar-link">Templates</a>
                    <a href="#" className="navbar-link">About</a>
                    <a href='https://payementgateway-nikhilverma.netlify.app/'><button className="navbar-button">Support me</button></a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
