import { Users, Star, Zap, Trophy, Award, TrendingUp } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LevelUpLogo from "../../assets/LevelUp.png";

const TraineeOverview = () => {
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
  const handleLogout = async () => {
    try {
      await fetch("/api/login/logout", {
        method: "POST",
        credentials: "include" // important so cookies are sent
      });
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/";
    }
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

  const achievements = [
    {
      title: "Early Bird",
      description: "5 days early check-in",
      status: "Earned",
      icon: "🌞",
      bgColor: "bg-yellow-50 border-yellow-200",
    },
    {
      title: "Streak Champion",
      description: "7-day attendance",
      status: "Earned",
      icon: "🔥",
      bgColor: "bg-yellow-50 border-yellow-200",
    },
  ];

  const recentActivities = [
    {
      task: "Completed Task: User Interface Designing",
      time: "2 hours",
    },
    {
      task: "Completed Task: Daily Quiz",
      time: "10 hours ago",
    },
    {
      task: "Completed Task: Daily Report",
      time: "24 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center gap-3">
            <img
              src={LevelUpLogo}
              alt="LevelUp Logo"
              className="w-10 h-10 object-contain"
            />
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
        </div>
      </div>

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

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Achievements */}
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-800">
                Achievements
              </h3>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-2 ${achievement.bgColor}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
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
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Activity
              </h3>
            </div>

            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="py-2 border-b border-gray-100 last:border-b-0"
                >
                  <p className="font-medium text-gray-800 mb-1">
                    {activity.task}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="bg-white rounded-xl p-4 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Weekly Progress
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Your performance this week
          </p>

          <div className="space-y-4">
            {/* Task Completed */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Task Completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Attendance Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Attendance Rate
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            {/* Points */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Points
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default TraineeOverview;
