import React, { useState } from 'react';
import LevelUpLogo from '../assets/LevelUp.png';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5250/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.message || 'Login failed');
            }

            const data = await response.json();

            // Redirect based on role
            if (data.role === 'Trainer') {
                navigate('/traineroverview');
            } else if (data.role === 'Trainee') {
                navigate('/traineeoverview');
            } else {
                navigate('/landingpage');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-purple-100 to-pink-100 overflow-hidden">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-sm">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
            <Link to="/landingpage" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10 object-contain" />
                                </Link>
            <div>
                <h1 className="text-xl font-bold text-gray-800">LevelUp</h1>
                <p className="text-sm text-gray-500 -mt-1">Learning in sync.</p>
            </div>
            </div>
            <div className="text-gray-600">
            Already have an account? <a href="loginpage" className="text-blue-600 hover:underline">Login</a>
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-400 bg-white"
                        >
                            <option value="">-- Select Role --</option>
                            <option value="trainer">Trainer</option>
                            <option value="trainee">Trainee</option>
                        </select>
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
