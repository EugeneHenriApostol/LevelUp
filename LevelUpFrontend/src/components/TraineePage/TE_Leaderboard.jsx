import React, { useState, useEffect } from 'react';
import { Users, Star, Zap, Trophy } from 'lucide-react';
import LevelUpLogo from '../../assets/LevelUp.png';

const TraineeLeaderboard = () => {
  const [activeTab, setActiveTab] = useState('Leaderboard');

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

  const topPerformers = [
    {
      initials: 'KX',
      name: 'Kurt Xander',
      surname: 'Cabural',
      points: 585,
      pointsColor: 'text-purple-600',
      streak: '12 days streak',
      borderColor: 'border-gray-300'
    },
    {
      initials: 'EA',
      name: 'Eugene',
      surname: 'Apostol',
      points: 320,
      pointsColor: 'text-purple-600',
      streak: '11 days streak',
      borderColor: 'border-gray-300'
    },
    {
      initials: 'MC',
      name: 'Malou',
      surname: 'Canedo',
      points: 300,
      pointsColor: 'text-purple-600',
      streak: '12 days streak',
      borderColor: 'border-gray-800'
    },
    {
      initials: 'RS',
      name: 'Rachel',
      surname: 'Sanchez',
      points: 290,
      pointsColor: 'text-purple-600',
      streak: '9 days streak',
      borderColor: 'border-gray-300'
    },
    {
      initials: 'ZB',
      name: 'Zach',
      surname: 'Bihag',
      points: 200,
      pointsColor: 'text-purple-600',
      streak: '10 days streak',
      borderColor: 'border-gray-300'
    }
  ];

  const fullLeaderboard = [
    {
      rank: 1,
      initials: 'KX',
      name: 'Kurt Xander Cabural',
      tasksCompleted: '30 Tasks Completed',
      attendance: '100% Attendance',
      streak: '12 days streak',
      points: 585,
      badges: ['Early Bird', 'Task Master', '+1']
    },
    {
      rank: 2,
      initials: 'KX',
      name: 'Eugene Apostol',
      tasksCompleted: '28 Tasks Completed',
      attendance: '100% Attendance',
      streak: '11 days streak',
      points: 320,
      badges: ['Quiz Master', 'Team Player', '+1']
    },
    {
      rank: 3,
      initials: 'KX',
      name: 'Malou Canedo',
      tasksCompleted: '27 Tasks Completed',
      attendance: '100% Attendance',
      streak: '12 days streak',
      points: 300,
      badges: ['Early Bird']
    },
    {
      rank: 4,
      initials: 'KX',
      name: 'Rachel Sanchez',
      tasksCompleted: '23 Tasks Completed',
      attendance: '100% Attendance',
      streak: '9 days streak',
      points: 290,
      badges: ['Early Bird', 'Task Master', '+1']
    }
  ];

  const tabs = ['Overview', 'Tasks', 'Leaderboard'];

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

        {/* Top Performers Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-800">Top Performers</h3>
          </div>
          
          <div className="grid grid-cols-5 gap-6">
            {topPerformers.map((performer, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full border-2 ${performer.borderColor} border-dotted flex items-center justify-center mb-3 mx-auto`}>
                  <span className="text-lg font-semibold text-gray-700">{performer.initials}</span>
                </div>
                <h4 className="font-medium text-gray-800 text-sm">{performer.name}</h4>
                <h4 className="font-medium text-gray-800 text-sm">{performer.surname}</h4>
                <p className={`text-sm font-semibold ${performer.pointsColor} mt-1`}>{performer.points} points</p>
                <p className="text-xs text-gray-500 mt-1">{performer.streak}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Full Leaderboard</h3>
          </div>
          
          <div className="divide-y">
            {fullLeaderboard.map((user, index) => (
              <div key={index} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 border-dotted flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-700">{user.initials}</span>
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
                      <span key={badgeIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-purple-600">{user.points}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeLeaderboard;