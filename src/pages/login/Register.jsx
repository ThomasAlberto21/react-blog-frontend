import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import back from '../../assets/images/my-account.jpg';

export const Register = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span>Email Address*</span>
            <input type='email' required />
            <span>Username*</span>
            <input type='text' required />
            <span>Password*</span>
            <input type='password' required />
            <button className='button'>Register</button>
            <Link to='/login'>Login</Link>
          </form>
        </div>
      </section>
    </>
  );
};
