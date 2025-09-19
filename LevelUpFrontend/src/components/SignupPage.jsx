import React, { useState } from 'react';
import LevelUpLogo from '../assets/LevelUp.png';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        workEmail: '',
        password: '',
        role: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

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
            <div className="text-gray-600">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Login</a>
            </div>
        </header>

        {/* Main Content */}
        <div className="flex items-center justify-center px-6 py-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Welcome!</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                        />
                    </div>

                    {/* Work Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Work Email
                        </label>
                        <input
                            type="email"
                            name="workEmail"
                            value={formData.workEmail}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-400 bg-white"
                        >
                            <option value="">-- Select Role --</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="administrator">Administrator</option>
                            <option value="parent">Parent</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}