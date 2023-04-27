import React from 'react';
import './Loginpage.css';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Login() {
  return (
    <div className="container">
      <h1>SIGN UP</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">SIGN UP</button>
        <div class="or">
  <hr />
  <div class="or-text">or</div>
  <hr /> 
</div>

        <div className="social-login">
          <a href="#" className="btn btn-google"><FaGoogle /> Google</a>
          <a href="#" className="btn btn-facebook"><FaFacebook /> Facebook</a>
          <a href="#" className="btn btn-linkedin"><FaLinkedin /> LinkedIn</a>
        </div>
        <div class="login-link">
    <p>Already a user? <a href="#">Login</a></p>
  </div>
      </form>
    </div>
  );
}

export default Login;
