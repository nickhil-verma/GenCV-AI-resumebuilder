import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../../utils';
import './Navbar.css';
import Logo from '../../images/logo.svg'
import Logout from '../../pages/Logout';
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])
    return (
        <header className="navbar-container">
            <div className="navbar-flex">
                <img className='logo' src={Logo}></img>
                <nav className="navbar-nav">
                    <a href="/" className="navbar-link">Home</a>
                    <a href="/" className="navbar-link"><RiAccountCircleFill /> {loggedInUser}</a>
                    <a href="/" className="navbar-link"><Logout/></a>
                    {/* <a href='https://payementgateway-nikhilverma.netlify.app/'><button className="navbar-button">Support me</button></a> */}
                    
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
