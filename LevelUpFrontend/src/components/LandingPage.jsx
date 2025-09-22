import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Clock } from "lucide-react";
import LevelUpLogo from '../assets/LevelUp.png';

const LandingPage = () => {
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
              className="w-10 h-10"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
            <p className="text-sm text-gray-500 -mt-1">Learning in sync.</p>
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-600">
          <a href="#pricing" className="hover:text-gray-800 transition-colors">Pricing</a>
          <a href="#features" className="hover:text-gray-800 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-gray-800 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-gray-800 transition-colors">Contact</a>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/loginpage"
            className="px-6 py-2 text-gray-600 font-medium rounded-lg border border-gray-400 hover:border-gray-950 hover:text-gray-950 transition-all"
          >
            Login
          </Link>
          <Link
            to="/signuppage"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg border border-gray-400 hover:border-gray-950 hover:bg-blue-950 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-blue-400">Build great teams</span>
                <br />
                <span className="text-gray-800">through better training</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                LevelUp brings learning and training together—giving your team the tools, clarity, and control they need to excel.
              </p>
            </div>

            {/* Get Started Button */}
            <div>
              <Link
                to="/loginpage"
                className="font-medium inline-flex items-center px-8 py-4 bg-white text-gray-700 border border-gray-500 font-
                 rounded-xl shadow-lg hover:text-gray-900 hover:gray-900 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              > Get Started
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Statistics */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-800">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 via-purple-200 to-blue-200 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-3">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between p-6 bg-gray-50 border-b">
                  <div className="flex items-center space-x-3">
                    <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
                    <h3 className="font-semibold text-gray-900">LevelUp Dashboard</h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 space-y-6">

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-500 text-white p-4 rounded-xl text-center">
                      <div className="text-xl font-bold">87%</div>
                      <div className="text-xs opacity-90">Completion Rate</div>
                    </div>
                    <div className="bg-yellow-500 text-white p-4 rounded-xl text-center">
                      <div className="text-xl font-bold">24</div>
                      <div className="text-xs opacity-90">Active Learners</div>
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded-xl text-center">
                      <div className="text-xl font-bold">156</div>
                      <div className="text-xs opacity-90">Tasks Done</div>
                    </div>
                  </div>

                  {/* Course Progress */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 text-sm">Course Progress</h4>
                    {[
                      { color: 'blue', abbr: 'JS', title: 'JavaScript Fundamentals', progress: '75', bar: 'w-[75%]' },
                      { color: 'yellow', abbr: 'PM', title: 'Project Management', progress: '45', bar: 'w-[45%]' },
                      { color: 'green', abbr: 'UX', title: 'UX Design Basics', progress: '92', bar: 'w-[92%]' },
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 bg-${c.color}-500 rounded-full flex items-center justify-center text-white text-xs font-bold`}>{c.abbr}</div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{c.title}</div>
                          <div className="text-xs text-gray-500">Progress: {c.progress}%</div>
                          <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                            <div className={`bg-${c.color}-500 h-1 rounded-full ${c.bar}`}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-sm">Recent Activity</span>
                      <span className="text-xs text-blue-500 cursor-pointer">View All</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-600">Sarah completed React Components module</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-600">Team meeting scheduled for tomorrow</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-600">New course: Advanced Analytics added</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Features Section */}
      <div className="container mx-auto px-6 py-9">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why teams choose LevelUp</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and track effective training programs for your team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
            <p className="text-gray-600">
              Bring your entire team together with shared learning paths, progress tracking, and collaborative features.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
            <p className="text-gray-600">
              Track progress, identify learning gaps, and measure success with comprehensive analytics and reporting.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Learning</h3>
            <p className="text-gray-600">
              Adaptive learning paths that fit your team's schedule and learning preferences with 24/7 accessibility.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">LevelUp</h3>
                <p className="text-sm text-gray-400">Learning in sync.</p>
              </div>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2025 LevelUp. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default LandingPage;