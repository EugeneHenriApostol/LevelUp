import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LevelUpLogo from "../../assets/LevelUp.png"; // Make sure the file exists
import { Star, Zap, Trophy, CheckCircle } from "lucide-react";

const TraineeTasks = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Overview", path: "/traineeoverview" },
    { name: "Tasks", path: "/traineetasks" },
    { name: "Leaderboard", path: "/traineeleaderboard" },
  ];

  const tasks = [
    { id: 1, title: "Implement User Authentication", subtitle: "Setup API for user authentication", status: "complete", points: 40, dueDate: "Sept 18, 2025" },
    { id: 2, title: "Create API Documentation", subtitle: "Document all REST API endpoints", status: "in-progress", points: 25, dueDate: "Sept 20, 2025" },
    { id: 3, title: "Create Database Models Schema", subtitle: "Design database models based on project requirements", status: "not-started", points: 30, dueDate: "Sept 21, 2025" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "complete":
        return <span className="text-green-600 text-sm font-semibold">✔ Completed</span>;
      case "in-progress":
        return <span className="text-blue-600 text-sm font-semibold">⏳ In Progress</span>;
      case "not-started":
        return <span className="text-gray-600 text-sm font-semibold">▶ Start Task</span>;
      default:
        return null;
    }
  };

  const completedTasks = tasks.filter(t => t.status === "complete").length;
  const progress = Math.round((completedTasks / tasks.length) * 100);

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
          </header>
    
          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-8 py-16">
            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-8">
              Welcome, @username
            </h2>
    
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
                    location.pathname === tab.path
                      ? "bg-white shadow text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </div>

        {/* Task Progress */}
        <div className="bg-[#c1ceed] rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Task Progress</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4">Completed Tasks</p>
          <div className="w-full bg-gray-200 rounded-full h-5 sm:h-6 overflow-hidden">
            <div className="bg-[#3b3b3b] h-5 sm:h-6 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm sm:text-base text-gray-800 mt-3 font-semibold">{progress}% of tasks completed this week</p>
        </div>

        {/* Task Cards */}
        <div className="space-y-4 sm:space-y-6">
          {tasks.map(task => (
            <div key={task.id} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow hover:border-gray-300 transition">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className={`w-5 h-5 sm:w-6 sm:h-6 ${task.status === "complete" ? "text-green-500" : "text-gray-300"}`} />
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">{task.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">{task.subtitle}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {getStatusBadge(task.status)}
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium">{task.points} points</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 sm:mt-2">Due Date: {task.dueDate}</p>
                  </div>
                </div>
                <div className="hidden sm:block">{getStatusBadge(task.status)}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TraineeTasks;
