// src/pages/ForgotPassword.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPassword.css';
import LevelUpLogo from '../assets/LevelUp.png';

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      {/* Header with Logo */}
      <div className="forgot-password-header">
        <Link to="/landingpage" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo-section">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
            <div className="logo-text">
              <h1>LevelUp</h1>
              <p>Learning in sync.</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Forgot Password Card */}
      <div className="forgot-password-card">
        {/* Lock Icon */}
        <div className="lock-icon-container">
          <svg className="lock-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </div>


        <h1 className="forgot-password-title">Forgot Password?</h1>
        <p className="forgot-password-subtitle">
          Enter your email address and we'll send you a link to reset your password.
        </p>


        <form className="forgot-password-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
        </form>

        {/* Support Section */}
        <div className="support-section">
          <span className="support-text">Need help?</span>
          <a href="#" className="support-link">Contact Support</a>
        </div>

        {/* Back to Login */}
        <div className="back-to-login">
          <Link to="/login" className="back-to-login-link">
            <span className="back-arrow">←</span>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;