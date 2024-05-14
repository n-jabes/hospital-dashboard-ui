import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="formContainer">
                <h1 className="title">My Doctor</h1>
                <form action="#">
                    <input type="email" placeholder='Your Email ...' required/>
                    <input type="password" placeholder='Your Password ...' required/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;