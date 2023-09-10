import React from 'react';
import Svg from '../img/gif.svg';

const Register = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Fast Chat</span>
          <span className="register">Register</span>
          <form>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <input type="password" placeholder="Confirm Password"/>
            <input type="file" style={{display: 'none'}} id="file" />
            <label htmlFor="file">click me</label>
            <button className="btnSignup" type="submit">
              Sign Up
            </button>
          </form>
          <p className="noAcc">
            Have an account? <span>Login</span>
          </p>
          <div>
            <img className="registerImg" src={Svg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
