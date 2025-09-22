import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import LevelUpLogo from "../../assets/LevelUp.png";
import { Users, Clock, Flag } from "lucide-react";

const TR_Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [newTask, setNewTask] = useState({
    taskId: "",
    title: "",
    description: "",
    dueDate: "",
    createdById: "",
    createdByName: "",
  });

  const location = useLocation();

  const tabs = [
    { name: "Overview", path: "/traineroverview" },
    { name: "Trainees", path: "/trainertrainees" },
    { name: "Tasks", path: "/trainertasks" },
  ];

  const stats = [
    { title: "Total Trainee", value: "24", icon: Users, color: "text-blue-500" },
    { title: "Pending Tasks", value: "10", icon: Clock, color: "text-red-500" },
    { title: "Completed Tasks", value: "35", icon: Flag, color: "text-purple-500" },
  ];

  const activities = [
    { name: "Malou Canedo", task: "Submitted work log", time: "5 minutes ago", status: "Pending" },
    { name: "Zach Bihag", task: "Submitted work log", time: "5 minutes ago", status: "Completed" },
    { name: "Kurt Cabural", task: "Submitted work log", time: "5 minutes ago", status: "Warning" },
  ];

  const attendance = [
    { name: "Malou Canedo", status: "Present" },
    { name: "Zach Bihag", status: "Present" },
    { name: "Kurt Cabural", status: "Absent" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = () => {
    console.log("Task created:", newTask);
    setIsModalOpen(false);
    setNewTask({
      taskId: "",
      title: "",
      description: "",
      dueDate: "",
      createdById: "",
      createdByName: "",
    });
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
        <div className="flex items-center gap-4" ref={dropdownRef}>
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

        {/* Activity & Attendance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <p className="text-sm text-gray-500 mb-4">Latest trainee activities and submissions</p>
            <div className="space-y-4">
              {activities.map((a, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 shadow-sm border">
                  <p className="font-medium text-gray-900">{a.name}</p>
                  <p className="text-sm text-gray-600">{a.task}</p>
                  <p className="text-xs text-gray-400">{a.time}</p>
                  <span
                    className={`text-xs font-medium ${
                      a.status === "Completed"
                        ? "text-green-600"
                        : a.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
              ))}

            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>


          {/* Attendance */}
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today’s Attendance</h3>
            <p className="text-sm text-gray-500 mb-4">Real-Time Check-in Status</p>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700">Check-In Rate</p>
              <p className="text-xl font-bold text-green-600">92%</p>
            </div>
            <div className="space-y-2">
              {attendance.map((p, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{p.name}</span>
                  <span
                    className={`font-medium ${
                      p.status === "Present" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {p.status}
                  </span>

                </div>
              </div>
            </div>
          ))}
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


export default TR_Overview;

