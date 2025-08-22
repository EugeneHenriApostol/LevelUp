// src/pages/LandingPage.js
import React from 'react';
import '../styles/LandingPage.css'; // Custom styles
import LevelUpLogo from '../assets/LevelUp.png'; // Imported logo
import { Link } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
          <div className="logo-text">
            <h1>LevelUp</h1>
            <p>Learning in sync.</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#pricing">Pricing</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-buttons">
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Content */}
        <div className="hero-content">
          <h2 className="hero-title">
            <span className="highlight">Build great teams</span><br />
            <span className="secondary">through better training</span>
          </h2>

          <p className="hero-description">
            LevelUp brings learning and training together—giving your team the tools, clarity, and control they need to excel.
          </p>

          <a href="login" className="get-started-btn">
            Get Started →
          </a>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="dashboard-container">
          <div className="dashboard-preview">
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <img
                src={LevelUpLogo}
                alt="Dashboard Icon"
                className="w-8 h-8 object-contain rounded"
              />
              <div className="dashboard-title">LevelUp Dashboard</div>
              <div className="window-controls">
                <div className="window-dot dot-red"></div>
                <div className="window-dot dot-yellow"></div>
                <div className="window-dot dot-green"></div>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="metrics-grid">
              <div className="metric-card completion">
                <div className="metric-number">87%</div>
                <div className="metric-label">Completion Rate</div>
              </div>
              <div className="metric-card active">
                <div className="metric-number">24</div>
                <div className="metric-label">Active Learners</div>
              </div>
              <div className="metric-card tasks">
                <div className="metric-number">156</div>
                <div className="metric-label">Tasks Done</div>
              </div>
            </div>

            {/* Courses List */}
            <div className="courses-list">
              <div className="course-item">
                <div className="course-icon js">JS</div>
                <div className="course-info">
                  <h4>JavaScript Fundamentals</h4>
                  <p>Progress: 75%</p>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill progress-75"></div>
                </div>
              </div>

              <div className="course-item">
                <div className="course-icon pm">PM</div>
                <div className="course-info">
                  <h4>Project Management</h4>
                  <p>Progress: 45%</p>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill progress-45"></div>
                </div>
              </div>

              <div className="course-item">
                <div className="course-icon ux">UX</div>
                <div className="course-info">
                  <h4>UX Design Basics</h4>
                  <p>Progress: 92%</p>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill progress-92"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
