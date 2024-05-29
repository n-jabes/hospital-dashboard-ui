import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseURL = 'https://innovahyperbackend.onrender.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear error on input change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true
    try {
      const response = await axios.post(baseURL + '/user/auth', {
        email,
        password,
      });
      const { token, user } = response.data;

      // Store the token, user, and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', user.role);

      

      // Check the user's role and navigate accordingly
      if (user.role == 'doctor') {
        navigate('/dashboard/home');
      } else {
        console.log('you are not a doctor');
        navigate('/'); // or another page for patients
      }
    } catch (error) {
      setError(error.response ? error.response.data.error : 'Login failed');
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <img src="./doc-bg.png" alt="Background" />
      <div className="formContainer">
        <h1 className="title">VSR Robot</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email ..."
            required
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Your Password ..."
            required
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading} className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
