import React, { useState, useEffect } from 'react';
import { Users, Star, Zap, Trophy, CheckCircle } from 'lucide-react';
import LevelUpLogo from '../../assets/LevelUp.png';

const TraineeTasks = () => {
  const [activeTab, setActiveTab] = useState('Tasks');

  const stats = [
    {
      title: 'Total Points',
      value: '300',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: 'text-gray-900'
    },
    {
      title: 'Streak Days',
      value: '7',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: 'text-gray-900'
    },
    {
      title: 'Rank',
      value: '#5',
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      color: 'text-gray-900'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Implement User Authentication',
      description: 'Setup JWT for user authentication',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-600',
      points: '+20 points',
      pointsColor: 'bg-gray-700 text-white',
      dueDate: '8/3/2025',
      actionButton: 'Completed',
      actionButtonColor: 'bg-green-100 text-green-600',
      checkmarkColor: 'text-green-500'
    },
    {
      id: 2,
      title: 'Create API Documentation',
      description: 'Document all REST API endpoints',
      status: 'Pending',
      statusColor: 'bg-gray-100 text-gray-600',
      points: '+10 points',
      pointsColor: 'bg-gray-700 text-white',
      dueDate: '8/3/2025',
      actionButton: 'Start Task',
      actionButtonColor: 'bg-gray-800 text-white',
      checkmarkColor: 'text-green-500'
    },
    {
      id: 3,
      title: 'Create Database Models Schema',
      description: 'Design database models based on project requirements',
      status: 'In-progress',
      statusColor: 'bg-blue-100 text-blue-600',
      points: '+10 points',
      pointsColor: 'bg-gray-700 text-white',
      dueDate: '8/3/2025',
      actionButton: 'Mark as Complete',
      actionButtonColor: 'bg-gray-800 text-white',
      checkmarkColor: 'text-green-500'
    }
  ];

  const tabs = ['Overview', 'Tasks', 'Leaderboard'];

  return (
    <div className="min-h-screen bg-gray-100 border-2 border-gray-300 rounded-lg">
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

        {/* Task Progress Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Task Progress</h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Completed Tasks</h4>
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div className="bg-gray-800 h-3 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">25% of task completed this week</p>
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start gap-4">
                {/* Checkmark Icon */}
                <div className="mt-1">
                  <CheckCircle className={`w-5 h-5 ${task.checkmarkColor}`} />
                </div>
                
                {/* Task Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{task.title}</h4>
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium ${task.actionButtonColor}`}>
                      {task.actionButton}
                    </button>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{task.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.statusColor}`}>
                      {task.status}
                    </span>
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${task.pointsColor}`}>
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
  );
}

export default TraineeTasks;