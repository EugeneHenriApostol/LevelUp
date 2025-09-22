import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LevelUpLogo from "../../assets/LevelUp.png";
import { Star, Zap, Trophy, Award } from "lucide-react";

const TraineeLeaderboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Overview", path: "/traineeoverview" },
    { name: "Tasks", path: "/traineetasks" },
    { name: "Leaderboard", path: "/traineeleaderboard" },
  ];

  const topPerformers = [
    { id: 1, initials: "KX", name: "Kurt Xander Cabural", points: 585, streak: 12 },
    { id: 2, initials: "EA", name: "Eugene Apostal", points: 320, streak: 11 },
    { id: 3, initials: "MC", name: "Malou Canedo", points: 300, streak: 12 },
    { id: 4, initials: "RS", name: "Rachel Sanchez", points: 210, streak: 1 },
    { id: 5, initials: "ZB", name: "Zach Bihag", points: 200, streak: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center py-3 px-6 bg-white/80 backdrop-blur-sm shadow">
        <div className="flex items-center gap-3">
          <img src={LevelUpLogo} alt="LevelUp Logo" className="w-7 h-7 sm:w-10 sm:h-10" />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">LevelUp</h1>
            <p className="text-xs sm:text-sm text-gray-600">Learning in sync.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
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
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-8">Welcome, @username</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow border flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Total Points</p>
              <p className="text-2xl font-bold text-gray-800">300</p>
            </div>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Streak Days</p>
              <p className="text-2xl font-bold text-gray-800">7</p>
            </div>
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow border flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Rank</p>
              <p className="text-2xl font-bold text-gray-800">#5</p>
            </div>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row bg-[#a6adb9] rounded-xl p-2 gap-2 sm:gap-0 mb-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex-1 text-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === tab.path ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        {/* Top Performers */}
        <div className="bg-[#d4c6ff] rounded-2xl p-6 shadow mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" /> Top Performers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {topPerformers.map((user) => (
              <div key={user.id} className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700 font-semibold mb-2">
                  {user.initials}
                </div>
                <p className="text-sm font-medium text-gray-800 text-center">{user.name}</p>
                <p className="text-xs text-blue-600 font-semibold">{user.points} points</p>
                <p className="text-xs text-gray-500">{user.streak} days streak</p>

              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}

        <div className="bg-[#c1eedb] rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Full Leaderboard</h3>
          <div className="space-y-4">
            {topPerformers.map((user) => (
              <div key={user.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white border rounded-2xl p-4 shadow-sm gap-2 sm:gap-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-700 font-semibold">
                    {user.initials}
                  </div>
                  <div>
                    <p className="text-sm sm:font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.points} Tasks Completed · 100% Attendance · {user.streak} days streak</p>

                  </div>
                </div>
                <div className="text-blue-600 font-bold text-sm sm:text-base">{user.points} pts</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TraineeLeaderboard;
