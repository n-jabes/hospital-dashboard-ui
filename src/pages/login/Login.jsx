import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <img src="./doc-bg.png" alt="" />
      <div className="formContainer">
        <h1 className="title">My Doctor</h1>
        <form action="#">
          <input type="email" placeholder="Your Email ..." required />
          <input type="password" placeholder="Your Password ..." required />
          <Link className='button' to='/'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
