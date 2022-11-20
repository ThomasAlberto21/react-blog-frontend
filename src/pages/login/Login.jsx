import React from 'react';
import back from '../../assets/images/my-account.jpg';
import { Link } from 'react-router-dom';
import './login.css';

export const Login = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span>Username or email address*</span>
            <input type='text' required />
            <span>Password*</span>
            <input type='password' required />
            <button className='button'>Log In</button>
            <Link to='/register'>Register</Link>
          </form>
        </div>
      </section>
    </>
  );
};
