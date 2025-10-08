import { Users, Star, Zap, Trophy } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LevelUpLogo from "../../assets/LevelUp.png";

const TraineeLeaderboard = () => {
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

  const topPerformers = [
    {
      initials: "KX",
      name: "Kurt Xander",
      surname: "Cabural",
      points: 585,
      pointsColor: "text-purple-600",
      streak: "12 days streak",
      borderColor: "border-gray-300",
    },
    {
      initials: "EA",
      name: "Eugene",
      surname: "Apostol",
      points: 320,
      pointsColor: "text-purple-600",
      streak: "11 days streak",
      borderColor: "border-gray-300",
    },
    {
      initials: "MC",
      name: "Malou",
      surname: "Canedo",
      points: 300,
      pointsColor: "text-purple-600",
      streak: "12 days streak",
      borderColor: "border-gray-800",
    },
    {
      initials: "RS",
      name: "Rachel",
      surname: "Sanchez",
      points: 290,
      pointsColor: "text-purple-600",
      streak: "9 days streak",
      borderColor: "border-gray-300",
    },
    {
      initials: "ZB",
      name: "Zach",
      surname: "Bihag",
      points: 200,
      pointsColor: "text-purple-600",
      streak: "10 days streak",
      borderColor: "border-gray-300",
    },
  ];

  const fullLeaderboard = [
    {
      rank: 1,
      initials: "KX",
      name: "Kurt Xander Cabural",
      tasksCompleted: "30 Tasks Completed",
      attendance: "100% Attendance",
      streak: "12 days streak",
      points: 585,
      badges: ["Early Bird", "Task Master", "+1"],
    },
    {
      rank: 2,
      initials: "KX",
      name: "Eugene Apostol",
      tasksCompleted: "28 Tasks Completed",
      attendance: "100% Attendance",
      streak: "11 days streak",
      points: 320,
      badges: ["Quiz Master", "Team Player", "+1"],
    },
    {
      rank: 3,
      initials: "KX",
      name: "Malou Canedo",
      tasksCompleted: "27 Tasks Completed",
      attendance: "100% Attendance",
      streak: "12 days streak",
      points: 300,
      badges: ["Early Bird"],
    },
    {
      rank: 4,
      initials: "KX",
      name: "Rachel Sanchez",
      tasksCompleted: "23 Tasks Completed",
      attendance: "100% Attendance",
      streak: "9 days streak",
      points: 290,
      badges: ["Early Bird", "Task Master", "+1"],
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

        {/* Top Performers Section */}
        <div className="bg-white rounded-xl p-4 shadow-sm border mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">
              Top Performers
            </h3>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full border-2 ${performer.borderColor} border-dotted flex items-center justify-center mb-3 mx-auto`}
                >
                  <span className="text-lg font-semibold text-gray-700">
                    {performer.initials}
                  </span>
                </div>
                <h4 className="font-medium text-gray-800 text-sm">
                  {performer.name}
                </h4>
                <h4 className="font-medium text-gray-800 text-sm">
                  {performer.surname}
                </h4>
                <p
                  className={`text-sm font-semibold ${performer.pointsColor} mt-1`}
                >
                  {performer.points} points
                </p>
                <p className="text-xs text-gray-500 mt-1">{performer.streak}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              Full Leaderboard
            </h3>
          </div>

          <div className="divide-y">
            {fullLeaderboard.map((user, index) => (
              <div
                key={index}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 border-dotted flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">
                      {user.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span>{user.tasksCompleted}</span>
                      <span>{user.attendance}</span>
                      <span>{user.streak}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {user.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">
                      {user.points}
                    </p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TraineeLeaderboard;
