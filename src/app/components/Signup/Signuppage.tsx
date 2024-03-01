import React from 'react';
import "./signup.css";
import Link from 'next/link';

const Signupbox = () => {
  return (
    <section className='Signup'>
      <div className="logocontainer">
        Logo or Illustration
      </div>
      <div className="signupcontainer">
        <header>Welcome to <span>Kentron</span></header>
        <div className="signupbox">
          <h1>Sign in</h1>
          <div className="inputs">
            <p>Organization Name</p>
            <input type="text" placeholder='Enter organization name' />
          </div>
          <div className="inputs">
            <p>Bussiness Email</p>
            <input type="email" placeholder='Enter bussiness name' />
          </div>
          <div className="inputs">
            <p>Password</p>
            <input type="password" placeholder='Enter Password' />
          </div>
          <p className='forgot'>Forgot Password?</p>
          <Link href="/components/Dashboard" className='loginbtn'>Login</Link>
        </div>
      </div>
    </section>
  )
}

export default Signupbox;