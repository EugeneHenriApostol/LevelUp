import { useState, useEffect } from "react";
import {
  Users,
  Clock,
  Flag,
  Search,
  Filter,
  User,
  Calendar,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import LevelUpLogo from "../../assets/LevelUp.png";

const TrainerTasks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("User");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const tabs = [
    { name: "Overview", to: "/traineroverview" },
    { name: "Trainees", to: "/trainertrainees" },
    { name: "Tasks", to: "/trainertasks" },
  ];

  const stats = [
    {
      title: "Total Trainee",
      value: "24",
      icon: <Users className="w-8 h-8 text-blue-400" />,
      color: "text-blue-500",
    },
    {
      title: "Pending Tasks",
      value: "10",
      icon: <Clock className="w-8 h-8 text-red-400" />,
      color: "text-red-500",
    },
    {
      title: "Completed Tasks",
      value: "35",
      icon: <Flag className="w-8 h-8 text-purple-400" />,
      color: "text-purple-500",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Complete Database Schema Design",
      description: "Design and document the database schema for e-commerce project.",
      status: "Complete",
      statusColor: "text-green-600",
      points: 15,
      assignee: "Malou Canedo",
      dueDate: "DD/MM/YYYY",
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    },
    {
      id: 2,
      title: "Implement API",
      description: "Build backend API endpoints for the project.",
      status: "In-Progress",
      statusColor: "text-blue-600",
      points: 10,
      assignee: "Zach Bihag",
      dueDate: "DD/MM/YYYY",
      icon: <Circle className="w-5 h-5 text-blue-500" />,
    },
  ];

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName && lastName)
      setFullName(`${JSON.parse(firstName)} ${JSON.parse(lastName)}`);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const goToEditProfile = () => {
    closeDropdown();
    navigate("/editprofile");
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/landingpage";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
            <p className="text-sm text-gray-500 -mt-1">Learning in sync.</p>
          </div>
        </div>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer rounded-full bg-blue-500 p-2 flex items-center justify-center hover:bg-blue-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
              <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
            </svg>
          </div>

          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={closeDropdown} />
              <div className="absolute top-12 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                <button
                  onClick={closeDropdown}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {fullName}
                </button>
                <button
                  onClick={goToEditProfile}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit Profile
                </button>
                <div className="border-t my-1" />
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Welcome, {fullName}
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-blue-100 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors text-sm">
              + Create New Task
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors text-sm">
              + Export Reports
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors text-sm">
              + View All Submissions
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full bg-white rounded-xl p-1 shadow-sm border mb-8 flex">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.to}
              className={({ isActive }) =>
                `flex-1 text-center rounded-lg font-medium text-sm px-8 py-3 transition-colors ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-xl shadow-sm border p-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{task.icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">{task.description}</p>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Status:</span>
                      <span className={`font-medium ${task.statusColor}`}>
                        {task.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 font-medium">
                        + {task.points} points
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" /> <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> <span>Due: {task.dueDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerTasks;
