import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import "../Css/Login.css";



function Login() {
  return (
    <div className="Login">
      <div className="loginpi">
        <h1>Login</h1>
        <form noValidate name="ln">
          <div className="email">
            <label >Email Adress</label>
          </div>
          <div>
            <input className="tx" type="email" id="email" name="email" />
          </div>
          <div className="password">
            <label >Password</label>
          </div>
          <div>
            <input className="tx" type="password" id="password" name="password" />
          </div>
          <br />

          <button className="button-savei">
            <div className="linki">
              Sign in
            </div>

          </button>

        </form>
        <br />
        <div><a className="txs" href="/register">Don't have an account? Sign Up</a></div>
      </div>

    </div>
  );
}

export default Login;