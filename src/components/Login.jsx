import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Remove error state since all logins succeed
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  return (
  <div className="login-body">
    <div className="login-container">
      <div className="eddi-logo" />
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Cybersecurity Auditing Portal</p>
      <form id="loginForm" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="username">👤 Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">🔒 Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="login-btn">
          🚀 Login
        </button>
        <div className="otp-info">
          <i className="fas fa-mobile-alt"></i>
          <span>OTP will be sent to your registered device</span>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
