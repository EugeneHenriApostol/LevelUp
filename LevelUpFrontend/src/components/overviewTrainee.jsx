import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LevelUpLogo from "../assets/LevelUp.png";
import { Star, Zap, Trophy, Sun, Flame } from "lucide-react";

const OverviewTrainee = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Overview", path: "/overviewtrainee" },
    { name: "Tasks", path: "/tasktrainee" },
    { name: "Leaderboard", path: "/leaderboardtrainee" },
  ];

  const achievements = [
    {
      icon: Sun,
      title: "Early Bird",
      description: "5 days early check-in",
      status: "Earned",
    },
    {
      icon: Flame,
      title: "Streak Champion",
      description: "7-day attendance",
      status: "Earned",
    },
  ];

  const recentActivities = [
    { title: "Completed Task: User Interface Designing", time: "2 hours ago" },
    { title: "Completed Task: Daily Quiz", time: "10 hours ago" },
    { title: "Completed Task: Daily Report", time: "24 hours ago" },
  ];

  const progressData = [
    { label: "Task Completed", progress: 85 },
    { label: "Attendance Rate", progress: 95 },
    { label: "Points", progress: 70 },
  ];

  return (
    <div className="min-h-screen bg-[#EAF1FF]">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between p-4 gap-4">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">LevelUp</h1>
              <p className="text-xs sm:text-sm text-gray-600">Learning in sync.</p>
            </div>
          </div>

          {/* Avatar Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200"
            >
              <img
                src="https://www.gravatar.com/avatar/?d=mp"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-40 sm:w-48 bg-white rounded-xl shadow-lg border py-2 z-50">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-gray-800">Username</p>
                  <p className="text-xs text-gray-500 truncate">user@email.com</p>
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-medium text-gray-700 mb-6">
          Welcome, @username
        </h2>

        {/* Stats + Tabs */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 mb-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow border flex justify-between items-center">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Total Points</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">300</p>
              </div>
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow border flex justify-between items-center">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Streak Days</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">7</p>
              </div>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow border flex justify-between items-center">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Rank</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">#5</p>
              </div>
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row bg-gray-100 rounded-xl p-1 gap-2 sm:gap-0">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`flex-1 text-center py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  location.pathname === tab.path
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Achievements & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Achievements */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md">
            <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-4">
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, index) => {
                const IconComponent = ach.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-yellow-50 rounded-lg p-3 sm:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-800 text-sm sm:text-base">
                          {ach.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600">{ach.description}</p>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold bg-yellow-200 px-2 sm:px-3 py-0.5 sm:py-1 rounded">
                      {ach.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md">
            <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow border">
                  <p className="text-sm sm:text-base font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-600">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2">
            Weekly Progress
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-6">Your performance this week</p>
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div key={index}>
                <p className="text-xs sm:text-sm text-gray-700 mb-1">{item.label}</p>
                <div className="w-full bg-gray-200 h-2 sm:h-3 rounded-full">
                  <div
                    className="bg-black h-2 sm:h-3 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTrainee;
