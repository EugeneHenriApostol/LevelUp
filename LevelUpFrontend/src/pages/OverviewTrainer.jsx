// src/pages/OverviewTrainer.js
import React, { useEffect, useState } from "react";
import "../styles/OverviewTrainer.css"; 
import LevelUpLogo from '../assets/LevelUp.png';

const OverviewTrainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("User");

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName && lastName) {
      setFullName(`${JSON.parse(firstName)} ${JSON.parse(lastName)}`);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/landingpage'; 
  }

  return (
    <div className="overview-container">
      {/* Header */}
      <header className="header-container">
        <div className="header-left">
          <div className="logo-section">
            <div className="logo">
              <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
              <div className="logo-text">
                <h1>LevelUp</h1>
                <p>Learning in sync.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="profile-dropdown">
            <div className="" onClick={toggleDropdown}>
              <div className="profile-avatar">
                <svg width="40" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                    <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor"/>
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
                        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                        <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span>{fullName}</span>
                  </div>
                  <div className="dropdown-item" onClick={closeDropdown}>
                    <div className="dropdown-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H16C17.1046 20 18 19.1046 18 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>Edit Profile</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item logout-item" onClick={closeDropdown}>
                    <div className="dropdown-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div onClick={handleLogout}>Logout </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>Welcome,{fullName}</h2>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-icon trainee-icon">👥</div>
          <div className="stat-content">
            <h3>Total Trainee</h3>
            <p className="stat-number blue">24</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon present-icon">✓</div>
          <div className="stat-content">
            <h3>Present Today</h3>
            <p className="stat-number green">24</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon pending-icon">⏰</div>
          <div className="stat-content">
            <h3>Pending Tasks</h3>
            <p className="stat-number red">10</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon completed-icon">🏆</div>
          <div className="stat-content">
            <h3>Completed Tasks</h3>
            <p className="stat-number purple">35</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-buttons">
          <button className="action-btn secondary">Generate Daily QR Code</button>
          <button className="action-btn secondary">+ Create New Task</button>
          <button className="action-btn secondary">+ Export Reports</button>
          <button className="action-btn secondary">+ View All Submissions</button>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="navigation-tabs">
        <div className="tabs-container">
          <button className="tab-btn active">Overview</button>
          <button className="tab-btn">Trainees</button>
          <button className="tab-btn">Tasks</button>
          <button className="tab-btn">Analytics</button>
          <button className="tab-btn">Reports</button>
        </div>
      </section>

      {/* Bottom Section - Recent Activity and Today's Attendance */}
      <section className="bottom-section">
        {/* Recent Activity */}
        <div className="recent-activity">
          <div className="section-header">
            <h3>Recent Activity</h3>
            <p>Latest trainee activities and submissions</p>
          </div>
          
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-info">
                <h4>Malou Canedo</h4>
                <p>Submitted work log</p>
                <span className="activity-time">5 minutes ago</span>
              </div>
              <div className="activity-status pending">Pending</div>
            </div>
            
            <div className="activity-item">
              <div className="activity-info">
                <h4>Zach Bihag</h4>
                <p>Submitted work log</p>
                <span className="activity-time">5 minutes ago</span>
              </div>
              <div className="activity-status completed">Completed</div>
            </div>
            
            <div className="activity-item">
              <div className="activity-info">
                <h4>Kurt Cabural</h4>
                <p>Submitted work log</p>
                <span className="activity-time">5 minutes ago</span>
              </div>
              <div className="activity-status warning">Warning</div>
            </div>
          </div>
        </div>

        {/* Today's Attendance */}
        <div className="todays-attendance">
          <div className="section-header">
            <h3>Today's Attendance</h3>
            <p>Real-Time Check-in Status</p>
          </div>
          
          <div className="attendance-summary">
            <div className="check-in-rate">
              <span className="rate-label">Check-in Rate</span>
              <span className="rate-percentage">92%</span>
            </div>
          </div>
          
          <div className="attendance-list">
            <div className="attendance-item">
              <span className="trainee-name">Malou Canedo</span>
              <span className="attendance-status present">Present</span>
            </div>
            
            <div className="attendance-item">
              <span className="trainee-name">Zack Bihag</span>
              <span className="attendance-status present">Present</span>
            </div>
            
            <div className="attendance-item">
              <span className="trainee-name">Kurt Cabural</span>
              <span className="attendance-status absent">Absent</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewTrainer;