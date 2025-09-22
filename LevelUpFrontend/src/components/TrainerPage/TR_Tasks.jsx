import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  Users,
  Clock,
  Flag,
  Search,
  Filter,
  User,
  Calendar,
  CheckCircle,
} from "lucide-react";
import LevelUpLogo from "../../assets/LevelUp.png";

const TrainerTasks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Module 1",
      description: "Finish the exercises in module 1 and submit before the due date.",
      status: "Pending",
      statusColor: "text-red-500",
      points: 20,
      assignee: "Emma Davis",
      dueDate: "Sept 30, 2025",
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Group Project",
      description: "Collaborate with your group and prepare the presentation slides.",
      status: "Completed",
      statusColor: "text-green-600",
      points: 50,
      assignee: "John Smith",
      dueDate: "Oct 5, 2025",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
  ]);

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

    const createdTask = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      status: "Pending",
      statusColor: "text-red-500",
      points: 10,
      assignee: newTask.createdByName || "Unassigned",
      dueDate: newTask.dueDate,
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
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


  //for export try
  const exportToExcel = () => {
  // Convert tasks state to array of objects suitable for Excel
  const data = tasks.map((t) => ({
    TaskId: t.id,
    Title: t.title,
    Description: t.description,
    DueDate: t.dueDate,
    Points: t.points,
    Assignee: t.assignee,
    Status: t.status,
  }));

  // Create worksheet from data
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Tasks");

  // Write workbook and trigger download
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, "TaskReport.xlsx");
};

//for view submission try
const [isSubmissionsModalOpen, setIsSubmissionsModalOpen] = useState(false);
const [selectedTask, setSelectedTask] = useState(null); // currently viewed task
const sampleSubmissions = {
  1: [
    { trainee: "Emma Davis", submittedOn: "Sept 29, 2025", points: 20 },
    { trainee: "John Smith", submittedOn: "Sept 30, 2025", points: 20 },
  ],
  2: [
    { trainee: "Emma Davis", submittedOn: "Oct 4, 2025", points: 50 },
  ],
};
const handleViewSubmissions = (task) => {
  setSelectedTask(task);
  setIsSubmissionsModalOpen(true);
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
          <button
          onClick={exportToExcel}
           className="flex-1 bg-white hover:bg-gray-50 py-2 px-4 rounded-md shadow text-sm font-medium">
            + Export Reports
          </button>
          <button
             onClick={() => handleViewSubmissions(tasks[0])} // Example: default task
           className="flex-1 bg-white hover:bg-gray-50 py-2 px-4 rounded-md shadow text-sm font-medium">
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

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Recent Activity
              </h3>
              <p className="text-gray-600 text-sm">
                Latest trainee activities and submissions
              </p>
            </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {tasks
            .filter((task) =>
              task.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((task) => (
              <div key={task.id} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-start gap-4">
                  {/* Task Icon */}
                  <div className="mt-1">{task.icon}</div>

                  {/* Task Content */}
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
                        <User className="w-4 h-4" />
                        <span>{task.assignee}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {task.dueDate}</span>
                      </div>
                    </div>

                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${activity.statusColor}`}
                  >
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Attendance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Today's Attendance
              </h3>
              <p className="text-gray-600 text-sm">Real-Time Check-in Status</p>
            </div>

            {/* Check-in Rate */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Check-in Rate
                </span>
                <span className="text-2xl font-bold text-gray-800">92%</span>
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
