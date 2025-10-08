import { Users, Star, Zap, Trophy, CheckCircle } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LevelUpLogo from "../../assets/LevelUp.png";

const TraineeTasks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("User");
  const navigate = useNavigate();

  //   const handleUpdate = async () => {
  //     try {
  //         // Call your API to update the profile
  //         // Example: await api.updateProfile(formData);
  //         // Simulate API call:
  //         // await fetch('/api/update-profile', { method: 'POST', body: JSON.stringify(formData) });

  //         // Save updated info to localStorage
  //         localStorage.setItem("firstName", JSON.stringify(formData.firstName));
  //         localStorage.setItem("lastName", JSON.stringify(formData.lastName));
  //         localStorage.setItem("role", JSON.stringify(formData.role));
  //         localStorage.setItem("workEmail", JSON.stringify(formData.workEmail));

  //         // Optionally, show a success message

  //         // Go back to previous page (dashboard)
  //         navigate(-1);
  //     } catch (error) {
  //         // Handle error (show error message)
  //         console.error("Failed to update profile", error);
  //     }
  // };

  const goToEditProfile = () => {
    closeDropdown();          // close the dropdown first
    navigate("/editprofile"); // 👈 route to EditProfile.jsx
  };

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName && lastName) {
      setFullName(`${JSON.parse(firstName)} ${JSON.parse(lastName)}`);
    }
  }, []);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/landingpage";
  };

  const tabs = [
    { name: "Overview", to: "/traineeoverview" },
    { name: "Tasks", to: "/traineetasks" },
    { name: "Leaderboard", to: "/traineeleaderboard" },
  ];

  const stats = [
    {
      title: "Total Points",
      value: "300",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: "text-gray-900",
    },
    {
      title: "Streak Days",
      value: "7",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: "text-gray-900",
    },
    {
      title: "Rank",
      value: "#5",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      color: "text-gray-900",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Implement User Authentication",
      description: "Setup JWT for user authentication",
      status: "Completed",
      statusColor: "bg-green-100 text-green-600",
      points: "+20 points",
      pointsColor: "bg-gray-700 text-white",
      dueDate: "8/3/2025",
      actionButton: "Completed",
      actionButtonColor: "bg-green-100 text-green-600",
      checkmarkColor: "text-green-500",
    },
    {
      id: 2,
      title: "Create API Documentation",
      description: "Document all REST API endpoints",
      status: "Pending",
      statusColor: "bg-gray-100 text-gray-600",
      points: "+10 points",
      pointsColor: "bg-gray-700 text-white",
      dueDate: "8/3/2025",
      actionButton: "Start Task",
      actionButtonColor: "bg-gray-800 text-white",
      checkmarkColor: "text-green-500",
    },
    {
      id: 3,
      title: "Create Database Models Schema",
      description: "Design database models based on project requirements",
      status: "In-progress",
      statusColor: "bg-blue-100 text-blue-600",
      points: "+10 points",
      pointsColor: "bg-gray-700 text-white",
      dueDate: "8/3/2025",
      actionButton: "Mark as Complete",
      actionButtonColor: "bg-gray-800 text-white",
      checkmarkColor: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-sm">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
            <p className="text-sm text-gray-500 -mt-1">Learning in sync.</p>
          </div>
        </div>
        <div className="relative flex justify-end items-center">
          {/* Profile icon */}
          <div
            onClick={toggleDropdown}
            className="cursor-pointer rounded-full bg-blue-500 p-2 flex items-center justify-center hover:bg-blue-600 transition"
          >
            {/* Avatar icon (SVG) */}
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
              <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
            </svg>
          </div>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <>
              {/* Click-away overlay */}
              <div className="fixed inset-0 z-10" onClick={closeDropdown} />
              <div className="absolute top-12 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                {/* User name */}
                <button
                  onClick={closeDropdown}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
                    <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
                  </svg>
                  <span>{fullName}</span>
                </button>

                {/* Edit Profile */}
                <button
                  onClick={goToEditProfile}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                    <path d="M18.5 2.5a2 2 0 0 1 2.83 2.83L12 14l-4 1 1-4 9.5-8.5z" />
                  </svg>
                  <span>Edit Profile</span>
                </button>

                <div className="border-t my-1" />

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-red-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <path d="M16 17l5-5-5-5" />
                    <path d="M21 12H9" />
                  </svg>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="p-4">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome, {fullName}
          </h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border"
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

          {/* Navigation Tabs */}
          <div className="w-full bg-white rounded-xl p-0.5 shadow-sm border mb-6 flex">
            {tabs.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.to}
                className={({ isActive }) =>
                  `flex-1 text-center rounded-lg font-medium text-sm px-6 py-2 transition-colors ${isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Task Progress Section */}
        <div className="bg-white rounded-xl p-4 shadow-sm border mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Task Progress
          </h3>

          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Completed Tasks
            </h4>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className="bg-gray-800 h-3 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              25% of task completed this week
            </p>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-xl shadow-sm border p-4"
            >
              <div className="flex items-start gap-4">
                {/* Checkmark Icon */}
                <div className="mt-1">
                  <CheckCircle className={`w-5 h-5 ${task.checkmarkColor}`} />
                </div>

                {/* Task Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {task.title}
                    </h4>
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${task.actionButtonColor}`}
                    >
                      {task.actionButton}
                    </button>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {task.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${task.statusColor}`}
                    >
                      {task.status}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${task.pointsColor}`}
                    >
                      {task.points}
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-gray-500">
                    <span>Due Date: {task.dueDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default TraineeTasks;
