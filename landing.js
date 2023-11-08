import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

function Landing() {
  return (
    <div className="landing">
      <div className="form">
        <h1>Welcome</h1>
        <Link to="/register" className="landing-button">Register</Link>
        <Link to="/login" className="landing-button">Login</Link>
      </div>
    </div>
  );
}

export default Landing;
