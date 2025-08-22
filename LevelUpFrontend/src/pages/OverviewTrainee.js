import React, { useState } from "react";
import "../styles/OverviewTrainee.css";
import LevelUpLogo from '../assets/LevelUp.png';

const OverviewTrainee = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="overview-container">
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

      {/* Welcome Text */}
      <div className="welcome-text">Welcome, @username</div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {/* Total Points Card */}
        <div className="stat-card stat-card-purple">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Total Points</h3>
              <div className="stat-number">300</div>
            </div>
            <div className="stat-icon">⭐</div>
          </div>
        </div>

        {/* Streak Days Card */}
        <div className="stat-card stat-card-blue">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Streak Days</h3>
              <div className="stat-number">7</div>
            </div>
            <div className="stat-icon">⚡</div>
          </div>
        </div>

        {/* Attendance Card */}
        <div className="stat-card stat-card-indigo">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Attendance</h3>
              <div className="stat-number">92%</div>
            </div>
            <div className="stat-icon">📅</div>
          </div>
        </div>

        {/* Rank Card */}
        <div className="stat-card stat-card-dark">
          <div className="stat-content">
            <div className="stat-info">
              <h3>Rank</h3>
              <div className="stat-number">#5</div>
            </div>
            <div className="stat-icon">🏆</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button className="nav-tab active">Overview</button>
        <button className="nav-tab">Attendance</button>
        <button className="nav-tab">Tasks</button>
        <button className="nav-tab">Leaderboard</button>
        <button className="nav-tab">Reports</button>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Achievements */}
        <div className="achievements-card">
          <div className="achievements-header">
            <span>🏅</span>
            <h3>Achievements</h3>
          </div>

          <div className="achievement-item">
            <div className="achievement-content">
              <div className="achievement-icon">☀️</div>
              <div className="achievement-info">
                <h4>Early Bird</h4>
                <p>5 days early check-in</p>
                <span className="achievement-badge">Earned</span>
              </div>
            </div>
          </div>

          <div className="achievement-item">
            <div className="achievement-content">
              <div className="achievement-icon">🔥</div>
              <div className="achievement-info">
                <h4>Streak Champion</h4>
                <p>7-day attendance</p>
                <span className="achievement-badge">Earned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-card">
          <div className="activity-header">
            <span>📈</span>
            <h3>Recent Activity</h3>
          </div>

          <div className="activity-item">
            <h4>Completed Task: User Interface Designing</h4>
            <div className="activity-time">2 hours ago</div>
          </div>

          <div className="activity-item">
            <h4>Completed Task: Daily Quiz</h4>
            <div className="activity-time">10 hours ago</div>
          </div>

          <div className="activity-item">
            <h4>Completed Task: Daily Report</h4>
            <div className="activity-time">24 hours ago</div>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="progress-card">
        <div className="progress-header">
          <h3>Weekly Progress</h3>
          <p>Your performance this week</p>
        </div>

        <div className="progress-item">
          <div className="progress-label">Task Completed</div>
          <div className="progress-bar">
            <div className="progress-fill progress-fill-80"></div>
          </div>
        </div>

        <div className="progress-item">
          <div className="progress-label">Attendance Rate</div>
          <div className="progress-bar">
            <div className="progress-fill progress-fill-90"></div>
          </div>
        </div>

        <div className="progress-item">
          <div className="progress-label">Points</div>
          <div className="progress-bar">
            <div className="progress-fill progress-fill-75"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTrainee;