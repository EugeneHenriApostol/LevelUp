import React, { useState } from 'react';
import { Users, Clock, Flag, Search, Filter, User, Calendar, CheckCircle2, Circle } from 'lucide-react';
import LevelUpLogo from '../../assets/LevelUp.png';

const TrainerTasks = () => {
  const [activeTab, setActiveTab] = useState('Tasks');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'Total Trainee',
      value: '24',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      color: 'text-blue-500'
    },
    {
      title: 'Pending Tasks',
      value: '10',
      icon: <Clock className="w-8 h-8 text-red-400" />,
      color: 'text-red-500'
    },
    {
      title: 'Completed Tasks',
      value: '35',
      icon: <Flag className="w-8 h-8 text-purple-400" />,
      color: 'text-purple-500'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Complete Database Schema Design',
      description: 'Design and document the database schema for e-commerce project.',
      status: 'Complete',
      statusColor: 'text-green-600',
      points: 15,
      assignee: 'Malou Canedo',
      dueDate: 'DD/MM/YYYY',
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
    },
    {
      id: 2,
      title: 'Implement API',
      description: 'Design and document the database schema for e-commerce project.',
      status: 'In-Progress',
      statusColor: 'text-blue-600',
      points: 15,
      assignee: 'Malou Canedo',
      dueDate: 'DD/MM/YYYY',
      icon: <Circle className="w-5 h-5 text-blue-500" />
    }
  ];

  const tabs = ['Overview', 'Trainees', 'Tasks'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
    {/* Header */}
        <header className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-sm">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
                <img 
                src={LevelUpLogo} 
                alt="LevelUp Logo" 
                className="w-10 h-10"  />
            </div>
            <div>
                <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
                <p className="text-sm text-gray-500 -mt-1">Learning in sync.</p>
            </div>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
            </div>
        </header>

      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome, @username</h2>
          
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
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center rounded-lg font-medium text-sm px-8 py-3 transition-colors ${
                  activeTab === tab
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Task Management Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management</h3>
          <p className="text-gray-600 text-sm">Create and manage training tasks</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                {/* Task Icon */}
                <div className="mt-1">
                  {task.icon}
                </div>
                
                {/* Task Content */}
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{task.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{task.description}</p>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Status:</span>
                      <span className={`font-medium ${task.statusColor}`}>{task.status}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <span className="text-green-600 font-medium">+ {task.points} points</span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainerTasks;