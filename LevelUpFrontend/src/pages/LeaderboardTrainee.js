import React from 'react';
import LevelUpLogo from '../assets/LevelUp.png';
import { Routes, Route, Navigate } from "react-router-dom";
import { useLocation, Link, } from "react-router-dom";
import { useState } from "react";
import '../styles/LeaderboardTrainee.css';

const LeaderboardTrainee = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    // Stats data
    const stats = {
        totalPoints: 300,
        streakDays: 7,
        rank: 5
    };

    // Top performers data
    const topPerformers = [
        {
            id: 1,
            initials: "KX",
            name: "Kurt Xander Cabural",
            points: 585,
            streak: 12
        },
        {
            id: 2,
            initials: "EA",
            name: "Eugene Apostol",
            points: 320,
            streak: 11
        },
        {
            id: 3,
            initials: "MC",
            name: "Malou Canedo",
            points: 300,
            streak: 12
        },
        {
            id: 4,
            initials: "RS",
            name: "Rachel Sanchez",
            points: 290,
            streak: 9
        },
        {
            id: 5,
            initials: "ZB",
            name: "Zach Bihag",
            points: 200,
            streak: 10
        }
    ];

    // Full leaderboard data
    const leaderboard = [
        {
            id: 1,
            initials: "KX",
            name: "Kurt Xander Cabural",
            tasks: 30,
            attendance: "100%",
            streak: 12,
            points: 585,
            tags: ["Early Bird", "Task Master", "💡"]
        },
        {
            id: 2,
            initials: "EA",
            name: "Eugene Apostol",
            tasks: 28,
            attendance: "100%",
            streak: 11,
            points: 320,
            tags: ["Quiz Master", "Team Player", "⚡"]
        },
        {
            id: 3,
            initials: "MC",
            name: "Malou Canedo",
            tasks: 27,
            attendance: "100%",
            streak: 12,
            points: 300,
            tags: ["Early Bird"]
        },
        {
            id: 4,
            initials: "RS",
            name: "Rachel Sanchez",
            tasks: 23,
            attendance: "100%",
            streak: 9,
            points: 290,
            tags: ["Early Bird", "Task Master", "💡"]
        }
    ];

    return (
        <div className="leaderboard-container">
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
                    <div className="stat-content">
                        <div className="stat-label">Total Points</div>
                        <div className="stat-number">{stats.totalPoints}</div>
                    </div>
                    <div className="stat-icon">⭐</div>
                </div>
                <div className="stat-card">
                    <div className="stat-content">
                        <div className="stat-label">Streak Days</div>
                        <div className="stat-number">{stats.streakDays}</div>
                    </div>
                    <div className="stat-icon">⚡</div>
                </div>
                <div className="stat-card">
                    <div className="stat-content">
                        <div className="stat-label">Rank</div>
                        <div className="stat-number">#{stats.rank}</div>
                    </div>
                    <div className="stat-icon">🏆</div>
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

            {/* Top Performers */}
            <div className="top-performers">
                <h3 className="section-title">
                    <span className="trophy-icon">🏆</span>
                    Top Performers
                </h3>
                <div className="performers-grid">
                    {topPerformers.map((performer, index) => (
                        <div key={performer.id} className="performer-card">
                            {index < 3 && <div className="rank-indicator">{index + 1}</div>}
                            <div className="performer-avatar">
                                {performer.initials}
                            </div>
                            <div className="performer-name">{performer.name}</div>
                            <div className="performer-points">{performer.points} points</div>
                            <div className="performer-streak">{performer.streak} days streak</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Leaderboard */}
            <div className="full-leaderboard">
                <h3 className="section-title">Full Leaderboard</h3>
                <div className="leaderboard-list">
                    {leaderboard.map((user) => (
                        <div key={user.id} className="leaderboard-card">
                            <div className="user-info">
                                <div className="user-avatar">
                                    {user.initials}
                                </div>
                                <div className="user-details">
                                    <div className="user-name">{user.name}</div>
                                    <div className="user-stats">
                                        {user.tasks} Tasks Completed • {user.attendance} Attendance • {user.streak} days streak
                                    </div>
                                </div>
                            </div>
                            <div className="user-achievements">
                                <span className="user-points">{user.points} points</span>
                                <div className="achievement-tags">
                                    {user.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`achievement-tag ${tag.includes('💡') || tag.includes('⚡') ? 'special' : ''}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardTrainee;