import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LevelUpLogo from "../assets/LevelUp.png";
import { Star, Zap, Trophy, Award } from "lucide-react";

const LeaderboardTrainee = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Overview", path: "/overviewtrainee" },
    { name: "Tasks", path: "/tasktrainee" },
    { name: "Leaderboard", path: "/leaderboardtrainee" },
  ];

  const topPerformers = [
    { id: 1, initials: "KX", name: "Kurt Xander Cabural", points: 585, streak: 12 },
    { id: 2, initials: "EA", name: "Eugene Apostal", points: 320, streak: 11 },
    { id: 3, initials: "MC", name: "Malou Canedo", points: 300, streak: 12 },
    { id: 4, initials: "RS", name: "Rachel Sanchez", points: 210, streak: 1 },
    { id: 5, initials: "ZB", name: "Zach Bihag", points: 200, streak: 10 },
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

        {/* Top Performers */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow mb-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            Top Performers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topPerformers.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center bg-gray-50 rounded-xl p-4 shadow-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center text-gray-700 font-semibold mb-2">
                  {user.initials}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                  {user.name}
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  {user.points} points
                </p>
                <p className="text-xs text-gray-500">{user.streak} days streak</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Full Leaderboard
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {topPerformers.map((user) => (
              <div
                key={user.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 border rounded-xl p-4 shadow-sm gap-2 sm:gap-0"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-gray-700 font-semibold">
                    {user.initials}
                  </div>
                  <div>
                    <p className="text-sm sm:font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">
                      {user.points} Tasks Completed · 100% Attendance ·{" "}
                      {user.streak} days streak
                    </p>
                  </div>
                </div>
                <div className="text-blue-600 font-bold text-sm sm:text-base">
                  {user.points} pts
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTrainee;
