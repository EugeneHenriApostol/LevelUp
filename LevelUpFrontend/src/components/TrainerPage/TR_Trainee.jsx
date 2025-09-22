import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Users,
  Clock,
  Flag,
  Search,
  Filter,
  MoreHorizontal,
  Star,
  CheckCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import LevelUpLogo from "../../assets/LevelUp.png";

const TrainerTrainees = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state
  const [newTask, setNewTask] = useState({
    taskId: "",
    title: "",
    description: "",
    dueDate: "",
    createdById: "",
    createdByName: "",
  });

  const location = useLocation();

  const stats = [
    { title: "Total Trainee", value: "24", icon: Users, color: "text-blue-500" },
    { title: "Pending Tasks", value: "10", icon: Clock, color: "text-red-500" },
    { title: "Completed Tasks", value: "35", icon: Flag, color: "text-purple-500" },
  ];

  const trainees = [
    { name: "Emma Davis", email: "emma.davis@npax.com", lastActive: "2 days ago", points: 485, attendance: "100%", tasks: 28, status: "active", trend: "up" },
    { name: "John Smith", email: "john.smith@npax.com", lastActive: "3 days ago", points: 420, attendance: "96%", tasks: 25, status: "active", trend: "up" },
    { name: "Sophia Lee", email: "sophia.lee@npax.com", lastActive: "1 day ago", points: 275, attendance: "88%", tasks: 20, status: "inactive", trend: "down" },
    { name: "Michael Chen", email: "michael.chen@npax.com", lastActive: "5 days ago", points: 260, attendance: "90%", tasks: 17, status: "inactive", trend: "down" },
  ];

  const tabs = [
    { name: "Overview", path: "/traineroverview" },
    { name: "Trainees", path: "/trainertrainees" },
    { name: "Tasks", path: "/trainertasks" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.description) return;
    alert(`Task "${newTask.title}" created successfully!`); // placeholder for actual creation logic

    setNewTask({
      taskId: "",
      title: "",
      description: "",
      dueDate: "",
      createdById: "",
      createdByName: "",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center py-3 px-6 bg-white shadow relative">
        <div className="flex items-center gap-3">
          <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
            <p className="text-sm text-gray-600">Learning in sync.</p>

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
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-medium text-gray-700 mb-8">Welcome, @username</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow border flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-[#cfdcfa] rounded-xl p-4 flex flex-col sm:flex-row gap-3 mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-white hover:bg-gray-50 py-2 px-4 rounded-md shadow text-sm font-medium"
          >
            + Create New Task
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 py-2 px-4 rounded-md shadow text-sm font-medium">
            + Export Reports
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 py-2 px-4 rounded-md shadow text-sm font-medium">
            + View All Submissions
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-200 rounded-lg p-1 mb-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`flex-1 text-center py-2 rounded-md text-sm font-medium transition-all ${
                location.pathname === tab.path
                  ? "bg-white shadow text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-xl p-6 shadow border mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search trainees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Trainees List */}
        <div className="bg-white rounded-xl shadow border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              All trainees ({trainees.length})

            </h3>
          </div>

          <div className="divide-y">

            {trainees.map((trainee, idx) => (
              <div
                key={idx}
                className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{trainee.name}</h4>
                  <p className="text-sm text-gray-500">{trainee.email}</p>
                  <p className="text-xs text-gray-400">Last active: {trainee.lastActive}</p>

                </div>

                <div className="flex items-center gap-8">
                  {/* Points */}
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-900">
                        {trainee.points}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Points</p>
                  </div>

                  {/* Attendance */}
                  <div className="text-center">
                    <div className="flex items-center gap-1">

                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-gray-900">{trainee.attendance}</span>

                    </div>
                    <p className="text-xs text-gray-500">Attendance</p>
                  </div>

                  {/* Tasks */}
                  <div className="text-center">
                    <div className="flex items-center gap-1">

                      <span className="font-medium text-gray-900">{trainee.tasks}</span>

                      {trainee.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Tasks</p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        trainee.status === "active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {trainee.status}
                    </span>

                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
            <div className="space-y-3">
              <input
                type="text"
                name="taskId"
                placeholder="Task ID"
                value={newTask.taskId}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={newTask.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <textarea
                name="description"
                placeholder="Task Description"
                value={newTask.description}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="date"
                name="dueDate"
                value={newTask.dueDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                name="createdById"
                placeholder="Created By ID"
                value={newTask.createdById}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                name="createdByName"
                placeholder="Created By Name"
                value={newTask.createdByName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTask}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerTrainees;
