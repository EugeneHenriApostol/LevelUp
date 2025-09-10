// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import LevelUpLogo from '../assets/LevelUp.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5250/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Login failed');
      }

      const data = await response.json();

      // Save JWT token & user info in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('userId', JSON.stringify(data.userId));
      localStorage.setItem('firstName', JSON.stringify(data.firstName));
      localStorage.setItem('lastName', JSON.stringify(data.lastName));
      localStorage.setItem('email', JSON.stringify(data.email));

      // Redirect based on role
      if (data.role === 'trainer') {
        navigate('/overviewtrainer');
      } else  if (data.role === 'trainee'){
        navigate('/overviewtrainee');
      } else {
        navigate('/landingpage');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
      
  };

  return (
    <div className="login-container">
      {/* Header */}
      <header className="login-header">
        <Link to="/landingpage" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-section">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
            <div className="logo-text">
              <h1>LevelUp</h1>
              <p>Learning in sync.</p>
            </div>
          </div>
        </Link>

        <div className="header-signup">
          Don't have an account?
          <Link to="/signup" className="signup-link">Sign up</Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="login-content">
        {/* Left Side - Login Form */}
        <div className="login-form-section">
          <div className="login-card">
            <div className="welcome-header">
              <h2 className="welcome-title">Welcome Back!</h2>
              <p className="welcome-subtitle">Sign in to continue your learning journey</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Work Email</label>
                <div className="form-input-container">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="form-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="form-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePassword}
                    aria-label="Toggle password visibility"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {showPassword ? (
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" />
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>

              {error && <p className="error-message">{error}</p>}

              
            </form>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="features-section">
          <div className="features-header">
            <h2 className="features-title">Continue Your Learning Journey</h2>
            <p className="features-description">
              Unlock your potential, track your progress, and lead the way—whether you're mastering skills or empowering others to grow.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature Cards */}
            <div className="feature-card">
              <div className="feature-icon progress">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="feature-title">Track Progress</h3>
              <p className="feature-description">Keep training and learning on track</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon learning">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
                </svg>
              </div>
              <h3 className="feature-title">Fast Learning</h3>
              <p className="feature-description">Makes learning engaging and fun</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon community">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="feature-title">Community</h3>
              <p className="feature-description">Learn with peers globally</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon innovation">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-2.172a2 2 0 0 1-1.414-.586L15 4h-6L7.586 5.414A2 2 0 0 1 6.172 6H4a2 2 0 0 0-2 2v3c0 .552.448 1 1 1s1-.448 1-1V8h1.172a4 4 0 0 0 2.828-1.172L9.414 6h5.172L16 7.414A4 4 0 0 0 18.828 8H20v3c0 .552.448 1 1 1z"/>
                </svg>
              </div>
              <h3 className="feature-title">Innovation</h3>
              <p className="feature-description">Smart learning tool</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
