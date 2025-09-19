import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import LevelUpLogo from '../assets/LevelUp.png';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5250/api/login/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setError(data?.message || 'Email not registered');
        return;
      }

      // Show success card
      setIsSubmitted(true);

      // Redirect to ConfirmPassword page after 2 seconds
      setTimeout(() => {
        navigate(`/confirm-password?email=${encodeURIComponent(email)}&token=${encodeURIComponent(data.token)}`);
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => navigate('/login');
  const handleContactSupport = () => window.location.href = 'mailto:support@levelup.com';

  return (
    <div className="forgot-password-container">
      {/* Header / Logo */}
      <div className="forgot-password-header">
        <Link to="/landingpage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-section">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="logo-image" />
            <div className="logo-text">
              <h1>LevelUp</h1>
              <p>Learning in sync.</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Card */}
      <div className="forgot-password-card">
        {isSubmitted ? (
          <>
            <div className="success-icon">
              <div className="success-icon-circle">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="forgot-password-title">Check Your Email!</h1>
            <p className="forgot-password-description">
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
            </p>
            <button className="forgot-password-button" onClick={handleBackToLogin}>Back to Login</button>
          </>
        ) : (
          <>
            {/* Lock Icon */}
            <div className="lock-icon">
              <div className="lock-icon-circle">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="forgot-password-title">Forgot Password?</h1>
            <p className="forgot-password-description">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form className="forgot-password-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {error && <p className="error-text">{error}</p>}

              <button type="submit" className="forgot-password-button" disabled={loading}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            {/* Support */}
            <div className="support-section">
              <span className="support-text">Need help? </span>
              <button onClick={handleContactSupport} className="support-link">Contact Support</button>
            </div>

            {/* Back to Login */}
            <div className="back-to-login">
              <button onClick={handleBackToLogin} className="back-link">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back to Login</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
