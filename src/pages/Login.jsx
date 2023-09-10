import React from 'react';
import Svg from '../img/gif.svg';

const Login = () => {
  return (
    <div>
      <>
        <div className="formContainer">
          <div className="formWrapper">
            <span className="logo">Fast Chat</span>
            <span className="register">Login</span>
            <form>
              <input type="email" name="" id="" placeholder="Email" />
              <input type="password" name="" id="" placeholder="Password" />
              <button className="btnSignup" type="submit">
                Login
              </button>
            </form>
            <p className="noAcc">
              Don't have an account? <span>Sign Up</span>
            </p>
            <div>
              <img className="registerImg" src={Svg} alt="" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
