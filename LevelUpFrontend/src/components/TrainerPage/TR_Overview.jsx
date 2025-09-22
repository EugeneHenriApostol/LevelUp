import { useState, useEffect } from "react";
import {
  Users,
  Clock,
  Flag,
  CheckCircle2,
  Circle,
  Search,
  Filter,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import LevelUpLogo from "../../assets/LevelUp.png";

const TrainerOverview = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("User");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
  const goToEditProfile = () => {
    closeDropdown();
    navigate("/editprofile");
  };

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

  // Sample data
  const recentActivity = [
    {
      name: "Malou Canedo",
      action: "Submitted Task 1",
      time: "2h ago",
      status: "Completed",
      statusColor: "text-green-600",
    },
    {
      name: "John Doe",
      action: "Checked in",
      time: "1h ago",
      status: "Present",
      statusColor: "text-blue-600",
    },
  ];

  const attendance = [
    { name: "Malou Canedo", status: "Present", statusColor: "text-green-600" },
    { name: "John Doe", status: "Absent", statusColor: "text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-sm">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
            <p className="text-sm text-gray-500 -mt-1">Learning in sync.</p>
          </div>
        </div>

        {/* Profile */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer rounded-full bg-blue-500 p-2 flex items-center justify-center hover:bg-blue-600 transition"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
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
        {/* Welcome Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome, {fullName}</h2>

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

        {/* Quick Actions */}
        <div className="bg-blue-100 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
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
                  isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Recent Activity</h3>
              <p className="text-gray-600 text-sm">Latest trainee activities and submissions</p>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">{activity.name}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${activity.statusColor}`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Attendance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Attendance</h3>
              <p className="text-gray-600 text-sm">Real-Time Check-in Status</p>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Check-in Rate</span>
                <span className="text-2xl font-bold text-gray-800">92%</span>
              </div>
            </div>
            <div className="space-y-4">
              {attendance.map((person, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{person.name}</span>
                  <span className={`font-medium ${person.statusColor}`}>{person.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerOverview;
