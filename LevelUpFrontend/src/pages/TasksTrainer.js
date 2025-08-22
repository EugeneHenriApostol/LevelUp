// src/pages/TasksTrainer.js
import React, { useState } from 'react';
import '../styles/TasksTrainer.css';
import LevelUpLogo from '../assets/LevelUp.png';
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation, Link, } from "react-router-dom";

const TasksTrainer = () => {
  const [activeTab, setActiveTab] = useState('Tasks');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Sample tasks data matching the design
  const tasks = [
    {
      id: 1,
      name: 'Complete Database Schema Design',
      description: 'Design and document the database schema for e-commerce project.',
      status: 'complete',
      points: 15,
      assignee: 'Malou Canedo',
      dueDate: 'DD/MM/YYYY'
    },
    {
      id: 2,
      name: 'Implement API',
      description: 'Design and document the database schema for e-commerce project.',
      status: 'in-progress',
      points: 15,
      assignee: 'Malou Canedo',
      dueDate: 'DD/MM/YYYY'
    }
  ];

  const stats = {
    totalTrainees: 24,
    pendingTasks: 10,
    completedTasks: 35
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tasks-container">
      {/* Header */}
      <header className="trainer-header">
        <div className="logo-section">
          <div className="logo">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="logo-text">
            <h1>LevelUp</h1>
            <p>Learning in sync.</p>
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
      </header>

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

      {/* Task Management Section */}
      <div className="task-management">
        <div className="task-header">
          <h2 className="task-title">Task Management</h2>
          <p className="task-subtitle">Create and manage training tasks</p>
        </div>

        <div className="search-filter">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <span>⚙️</span>
            Filter
          </button>
        </div>

        {/* Task Cards */}
        <div className="task-list">
          {filteredTasks.map(task => (
            <div key={task.id} className="task-card">
              <div className={`task-status-indicator ${task.status}`}></div>

              <div className="task-header-row">
                <div className={`task-icon ${task.status}`}>
                  {task.status === 'complete' ? '✅' : '⏳'}
                </div>
                <h3 className="task-name">{task.name}</h3>
              </div>

              <p className="task-description">{task.description}</p>

              <div className="task-details">
                <div className="task-status">
                  <span>Status:</span>
                  <span className={`status-text ${task.status}`}>
                    {task.status === 'complete' ? 'Complete' : 'In-Progress'}
                  </span>
                </div>

                <div className="task-points">
                  + {task.points} points
                </div>

                <div className="task-meta">
                  <span className="assignee-name">👤 {task.assignee}</span>
                  <span>•</span>
                  <span className="due-date">📅 Due: {task.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksTrainer;