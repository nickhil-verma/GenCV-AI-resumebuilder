import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";
import LOGOHERO from '../images/loginhero.gif';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    identifier: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { identifier, password } = loginInfo;

    if (!identifier || !password) {
      toast.error('Email/Username and password are required');
      return;
    }

    try {
      const url = `https://auth-universal-repo.vercel.app/api/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier, password })
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Login failed");
        return;
      }

      // ✅ Universal Auth returns: token, username, email
      localStorage.setItem('token', result.token);
      localStorage.setItem('loggedInUser', result.username || 'User');
      localStorage.setItem('email', result.email);
      toast.success("Login successful!");

      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } catch (err) {
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className='container'>
      <div className='rightContainer'>
        <img src={LOGOHERO} alt='hero-banner img' />
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <h1>Login</h1>
          <label htmlFor='identifier'>Email or Username</label>
          <input
            onChange={handleChange}
            type='text'
            name='identifier'
            placeholder='Enter your email or username...'
            value={loginInfo.identifier}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Enter your password...'
            value={loginInfo.password}
          />
        </div>
        <button type='submit'>Login</button>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
