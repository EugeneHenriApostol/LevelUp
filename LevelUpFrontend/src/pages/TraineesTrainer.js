import React, { useState } from 'react';
import '../styles/TraineesTrainer.css';
import LevelUpLogo from '../assets/LevelUp.png'; // Imported logo
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation, Link, } from "react-router-dom";

const TraineesTrainer = () => {
  const [activeTab, setActiveTab] = useState('Trainees');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Sample data matching the design
  const trainees = [
    {
      id: 1,
      name: 'Emma Davis',
      email: 'emma.davis@npax.com',
      points: 485,
      attendance: 100,
      tasks: 28,
      status: 'active',
      lastActive: '2 days ago'
    },
    {
      id: 2,
      name: 'Emma Davis',
      email: 'emma.davis@npax.com',
      points: 420,
      attendance: 96,
      tasks: 25,
      status: 'active',
      lastActive: '2 days ago'
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@npax.com',
      points: 275,
      attendance: 88,
      tasks: 20,
      status: 'inactive',
      lastActive: '2 days ago'
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma.davis@npax.com',
      points: 260,
      attendance: 90,
      tasks: 17,
      status: 'inactive',
      lastActive: '2 days ago'
    }
  ];

  const stats = {
    totalTrainees: 24,
    pendingTasks: 10,
    completedTasks: 35
  };

  const tabs = ['Overview', 'Trainees', 'Tasks', 'Analytics'];

  const filteredTrainees = trainees.filter(trainee =>
    trainee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trainee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="trainees-container">
      {/* Header */}
      <div className="trainer-header">
        <div className="logo-section">
          <div className="logo">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="logo-text">
            <h1 className="logo-title">LevelUp</h1>
            <p className="logo-subtitle">Learning in sync.</p>
          </div>
        </div>
        <div className="header-right">
          <div className="profile-dropdown">
            <div className="" onClick={toggleDropdown}>
              <div className="profile-avatar">
                <svg width="40" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
                  <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            {isDropdownOpen && (
              <>
                <div className="dropdown-overlay" onClick={closeDropdown}></div>
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={closeDropdown}>
                    <div className="dropdown-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
                        <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor" />
                      </svg>
                    </div>
                    <span>Display</span>
                  </div>
                  <div className="dropdown-item" onClick={closeDropdown}>
                    <div className="dropdown-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H16C17.1046 20 18 19.1046 18 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Edit Profile</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item logout-item" onClick={closeDropdown}>
                    <div className="dropdown-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>Logout</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome, @username</h2>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {/* Total Points Card */}
        <div className="stat-card stat-card-purple">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Total Trainee</h3>
              <div className="stat-number">24</div>
            </div>
            <div className="stat-icon">👥</div>
          </div>
        </div>

        {/* Pending Task Card */}
        <div className="stat-card stat-card-indigo">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Pending Tasks</h3>
              <div className="stat-number">10</div>
            </div>
            <div className="stat-icon">⏰</div>
          </div>
        </div>

        {/* Completed Task */}
        <div className="stat-card stat-card-dark">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Completed Tasks</h3>
              <div className="stat-number">35</div>
            </div>
            <div className="stat-icon">🏆</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-buttons">
          <button className="action-btn secondary">+ Create New Task</button>
          <button className="action-btn secondary">+ Export Reports</button>
          <button className="action-btn secondary">+ View All Submissions</button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="navigation-tabs">
        <div className="tabs-container">
          <Link
            to="/overviewtrainer"
            className={`tab-btn ${location.pathname === "/overviewtrainer" ? "active" : ""}`}
          >
            Overview
          </Link>
          <Link
            to="/traineestrainer"
            className={`tab-btn ${location.pathname === "/traineestrainer" ? "active" : ""}`}
          >
            Trainees
          </Link>
          <Link
            to="/taskstrainer"
            className={`tab-btn ${location.pathname === "/taskstrainer" ? "active" : ""}`}
          >
            Tasks
          </Link>
        </div>
      </section>

      {/* Trainees Section */}
      <div className="trainees-section">
        <div className="section-header">
          <div className="search-filter">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search trainees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="filter-btn">
              <span>⚙️</span>
              Filter
            </button>
          </div>
        </div>

        <div className="trainees-list">
          <h3 className="section-title">All trainees ({filteredTrainees.length})</h3>

          {filteredTrainees.map(trainee => (
            <div key={trainee.id} className="trainee-card">
              <div className="trainee-info">
                <div className="trainee-avatar">
                  <div className="avatar-circle">
                    {trainee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="trainee-details">
                  <h4 className="trainee-name">{trainee.name}</h4>
                  <p className="trainee-email">{trainee.email}</p>
                  <p className="trainee-last-active">Last active: {trainee.lastActive}</p>
                </div>
              </div>

              <div className="trainee-stats">
                <div className="stat-item">
                  <p className="stat-value">
                    <span className="icon-star">⭐</span>
                    {trainee.points}
                  </p>
                  <p className="stat-label">Points</p>
                </div>

                <div className="stat-item">
                  <p className="stat-value">
                    <span className="icon-check">✅</span>
                    {trainee.attendance}%
                  </p>
                  <p className="stat-label">Attendance</p>
                </div>

                <div className="stat-item">
                  <p className="stat-value">
                    {trainee.tasks < 20 ? (
                      <span className="icon-trending-down">📉</span>
                    ) : (
                      <span className="icon-trending-up">📈</span>
                    )}
                    {trainee.tasks}
                  </p>
                  <p className="stat-label">Tasks</p>
                </div>
              </div>

              <div className="trainee-actions">
                <span className={`status-badge status-${trainee.status}`}>
                  {trainee.status}
                </span>
                <button className="menu-btn">
                  <span>⋯</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TraineesTrainer;