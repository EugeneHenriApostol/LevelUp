import React, { useState, useEffect } from 'react';
import { Users, Clock, Flag } from 'lucide-react';
import LevelUpLogo from '../../assets/LevelUp.png';

const TrainerOverview = () => {
  const [activeTab, setActiveTab] = useState('Overview');

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

  const recentActivity = [
    {
      name: 'Malou Canedo',
      action: 'Submitted work log',
      time: '5 minutes ago',
      status: 'Pending',
      statusColor: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'Zach Bihag',
      action: 'Submitted work log',
      time: '5 minutes ago',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      name: 'Kurt Cabural',
      action: 'Submitted work log',
      time: '5 minutes ago',
      status: 'Warning',
      statusColor: 'bg-red-100 text-red-600'
    }
  ];

  const attendance = [
    { name: 'Malou Canedo', status: 'Present', statusColor: 'text-green-500' },
    { name: 'Zack Bihag', status: 'Present', statusColor: 'text-green-500' },
    { name: 'Kurt Cabural', status: 'Absent', statusColor: 'text-red-500' }
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

            {/* Check-in Rate */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Check-in Rate</span>
                <span className="text-2xl font-bold text-gray-800">92%</span>
              </div>
            </div>

            {/* Attendance List */}
            <div className="space-y-4">
              {attendance.map((person, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{person.name}</span>
                  <span className={`font-medium ${person.statusColor}`}>
                    {person.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerOverview;