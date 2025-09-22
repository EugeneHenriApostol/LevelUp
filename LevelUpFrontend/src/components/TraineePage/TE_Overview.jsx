import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, Zap, Trophy, Award, TrendingUp } from 'lucide-react';
import LevelUpLogo from '../../assets/LevelUp.png';

const TraineeOverview = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const stats = [
    {
      title: 'Total Points',
      value: '300',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: 'text-gray-900'
    },
    {
      title: 'Streak Days',
      value: '7',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: 'text-gray-900'
    },
    {
      title: 'Rank',
      value: '#5',
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      color: 'text-gray-900'
    }
  ];

  const achievements = [
    {
      title: 'Early Bird',
      description: '5 days early check-in',
      status: 'Earned',
      icon: '🌞',
      bgColor: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Streak Champion',
      description: '7-day attendance',
      status: 'Earned',
      icon: '🔥',
      bgColor: 'bg-yellow-50 border-yellow-200'
    }
  ];

  const recentActivities = [
    {
      task: 'Completed Task: User Interface Designing',
      time: '2 hours'
    },
    {
      task: 'Completed Task: Daily Quiz',
      time: '10 hours ago'
    },
    {
      task: 'Completed Task: Daily Report',
      time: '24 hours ago'
    }
  ];

  const tabs = ['Overview', 'Tasks', 'Leaderboard'];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5250/api/login/logout", {
            method: "POST",
            credentials: "include", // send the cookie so server can delete it
        });
        if (!response.ok) {
            console.error("Failed to log out:", response.statusText);
        }
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 border-2 border-gray-300 rounded-lg">
      {/* Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center p-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">LevelUp</h1>
              <p className="text-sm text-gray-600">Learning in sync.</p>
            </div>
          </div>

          {/* Right: User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <Users className="w-6 h-6 text-white" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => alert("Go to Edit Profile")}
                    >
                      Edit Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome, @username</h2>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="w-full bg-white rounded-xl p-1 shadow-sm border mb-8 flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center rounded-lg font-medium text-sm px-8 py-3 transition-colors ${
                  activeTab === tab
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-800">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${achievement.bgColor}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {achievement.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="py-3 border-b border-gray-100 last:border-b-0">
                  <p className="font-medium text-gray-800 mb-1">{activity.task}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Weekly Progress</h3>
          <p className="text-gray-600 text-sm mb-6">Your performance this week</p>
          
          <div className="space-y-4">
            {/* Task Completed */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Task Completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-800 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Attendance Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Attendance Rate</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-800 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            {/* Points */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Points</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-800 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TraineeOverview;