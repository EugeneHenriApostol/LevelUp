import React from "react";
import { useState } from "react";
import "../styles/TasksTrainee.css";
import LevelUpLogo from '../assets/LevelUp.png';
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation, Link, } from "react-router-dom";


const TasksTrainee = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };


  // Sample data
  const stats = {
    totalPoints: 300,
    streakDays: 7,
    rank: 5
  };

  const tasks = [
    {
      id: 1,
      title: "Implement User Authentication",
      description: "Setup JWT for user authentication",
      status: "completed",
      points: 20,
      dueDate: "8/8/2025",
      icon: "✅"
    },
    {
      id: 2,
      title: "Create API Documentation",
      description: "Document all REST API endpoints",
      status: "pending",
      points: 10,
      dueDate: "8/8/2025",
      icon: "📄"
    },
    {
      id: 3,
      title: "Create Database Models Schema",
      description: "Design database models based on project requirements",
      status: "in-progress",
      points: 10,
      dueDate: "8/8/2025",
      icon: "🗂"
    }
  ];

  const completionPercentage = 25;

  return (
    <div className="tasks-trainee-container">
      {/* Header */}
      <div className="header-container">
        <div className="logo-section">
          <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
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
      </div>

      {/* Welcome Message */}
      <h2 className="welcome-title">Welcome, @username</h2>

      {/* Stats Panel */}
      <div className="stats-panel">
        <div className="stat-card">
          <div className="stat-number">{stats.totalPoints}</div>
          <div className="stat-label">Total Points</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.streakDays}</div>
          <div className="stat-label">Streak Days</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">#{stats.rank}</div>
          <div className="stat-label">Rank</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <section className="navigation-tabs">
        <div className="tabs-container">
          <Link
            to="/overviewtrainee"
            className={`tab-btn ${location.pathname === "/overviewtrainee" ? "active" : ""}`}
          >
            Overview
          </Link>
          <Link
            to="/taskstrainee"
            className={`tab-btn ${location.pathname === "/taskstrainee" ? "active" : ""}`}
          >
            Trainees
          </Link>
          <Link
            to="/leaderboardtrainee"
            className={`tab-btn ${location.pathname === "/leaderboardtrainee" ? "active" : ""}`}
          >
            Leaderboard
          </Link>
        </div>
      </section>

      {/* Task Progress */}
      <section className="progress-section">
        <h3 className="progress-title">Completed Tasks</h3>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <p className="progress-text">
          {completionPercentage}% of tasks completed this week
        </p>
      </section>

      {/* Task Cards */}
      <div className="task-cards-container">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.status}`}
          >
            <h4 className="task-title">
              <span className="task-icon">{task.icon}</span>
              {task.title}
            </h4>
            <p className="task-description">{task.description}</p>
            <div className="task-meta">
              <span className={`status-badge ${task.status}`}>
                {task.status === "in-progress" ? "In-progress" :
                  task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
              <span className="points-badge">+{task.points} points</span>
              <span className="due-date">Due: {task.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksTrainee;