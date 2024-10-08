import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const BACKEND_URL = 'https://connections-backend-uo7c.onrender.com';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post( BACKEND_URL + '/api/auth/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/game');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className='register-all'>
      <h2 className='register-heading'>Register with email</h2>
      <p className='register-content'>Enter the email address associated with your account</p>
      <form className='register-form' onSubmit={handleRegister}>
        <div className='register-email-all'>
          <label className='register-email-heading'>Username:</label>
          <input
          className='register-email-input'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='register-email-all'>
          <label className='register-email-heading'>Email:</label>
          <input
            className='register-email-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='register-email-all'>
          <label className='register-email-heading'>Password:</label>
          <input
          className='register-email-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button className='register-button' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
