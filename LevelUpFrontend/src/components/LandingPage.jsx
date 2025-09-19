import React from 'react';
import { Link } from 'react-router-dom';
import LevelUpLogo from '../assets/LevelUp.png'; // Ensure you have a logo image in the specified path


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
                to="/trainertrainee"
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

          {/* Right: Dashboard Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 via-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Dashboard Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800">LevelUp Dashboard</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">87%</div>
                    <div className="text-xs text-blue-600">Completion Rate</div>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">24</div>
                    <div className="text-xs text-yellow-600">Active Learners</div>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-xs text-green-600">Tasks Done</div>
                  </div>
                </div>

                {/* Course Progress */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">TC</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">JavaScript Fundamentals</div>
                      <div className="text-xs text-gray-500">Progress: 75%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div className="bg-blue-500 h-1 rounded-full w-[92%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">TA</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Project Management</div>
                      <div className="text-xs text-gray-500">Progress: 45%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div className="bg-yellow-500 h-1 rounded-full w-[45%]"></div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">TS</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">UX Design Basics</div>
                      <div className="text-xs text-gray-500">Progress: 92%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div className="bg-green-500 h-1 rounded-full w-[92%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-sm">Recent Activity</span>
                    <span className="text-xs text-blue-500">View All</span>
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
      </main>
    </div>
  );
};

export default LandingPage;