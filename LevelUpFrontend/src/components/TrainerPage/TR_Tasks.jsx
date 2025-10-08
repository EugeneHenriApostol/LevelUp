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
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import LevelUpLogo from "../../assets/LevelUp.png";

const TrainerTasks = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("User");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // ✅ Tasks state (can be updated when new tasks are created)
  const [tasks, setTasks] = useState([
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
  ]);

  // ✅ Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmissionsModalOpen, setIsSubmissionsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // ✅ New task state
  const [newTask, setNewTask] = useState({
    taskId: "",
    title: "",
    description: "",
    dueDate: "",
    createdById: "",
    createdByName: "",
  });

  // Sample submissions for demo
  const sampleSubmissions = {
    1: [
      { trainee: "Emma Davis", submittedOn: "Sept 29, 2025", points: 20 },
      { trainee: "John Smith", submittedOn: "Sept 30, 2025", points: 20 },
    ],
    2: [{ trainee: "Emma Davis", submittedOn: "Oct 4, 2025", points: 50 }],
  };

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (firstName && lastName)
      setFullName(`${JSON.parse(firstName)} ${JSON.parse(lastName)}`);
  }, []);

  // ✅ Handlers
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleCreateTask = () => {
    if (!newTask.title || !newTask.description) return;

    const createdTask = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      status: "Pending",
      statusColor: "text-red-500",
      points: 10,
      assignee: newTask.createdByName || "Unassigned",
      dueDate: newTask.dueDate,
      icon: <Circle className="w-5 h-5 text-blue-500" />,
    };

    setTasks([...tasks, createdTask]);
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

  const exportToExcel = () => {
    const data = tasks.map((t) => ({
      TaskId: t.id,
      Title: t.title,
      Description: t.description,
      DueDate: t.dueDate,
      Points: t.points,
      Assignee: t.assignee,
      Status: t.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Tasks");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "TaskReport.xlsx");
  };

  const handleViewSubmissions = (task) => {
    setSelectedTask(task);
    setIsSubmissionsModalOpen(true);
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
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
              <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
            </svg>
          </div>

          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={closeDropdown} />
              <div className="absolute top-12 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700">
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

      <div className="max-w-6xl mx-auto">
        <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome, {fullName}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border">
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

        {/* ✅ Quick Actions */}
        <div className="bg-blue-100 rounded-xl p-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              + Create New Task
            </button>
            <button
              onClick={exportToExcel}
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              + Export Reports
            </button>
            <button
              onClick={() => handleViewSubmissions(tasks[0])}
              className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              + View All Submissions
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full bg-white rounded-xl p-0.5 shadow-sm border mb-6 flex">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.to}
              className={({ isActive }) =>
                `flex-1 text-center rounded-lg font-medium text-sm px-6 py-2 transition-colors ${
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
        <div className="space-y-3">
          {tasks
            .filter((task) =>
              task.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((task) => (
              <div key={task.id} className="bg-white rounded-xl shadow-sm border p-4">
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
                        <Calendar className="w-4 h-4" />{" "}
                        <span>Due: {task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
      </div>

      {/* ✅ Create Task Modal */}
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

      {/* ✅ Submissions Modal */}
      {isSubmissionsModalOpen && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">
              Submissions for "{selectedTask.title}"
            </h2>
            <div className="space-y-2">
              {(sampleSubmissions[selectedTask.id] || []).map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3 border rounded-md flex justify-between items-center"
                >
                  <span>{sub.trainee}</span>
                  <span className="text-sm text-gray-500">{sub.submittedOn}</span>
                  <span className="text-green-600 font-medium">{sub.points} pts</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsSubmissionsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainerTasks;
