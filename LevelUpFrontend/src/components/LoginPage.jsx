import React, { useState } from 'react';
import { Eye, Target, Zap, Users, Sparkles } from 'lucide-react';
import LevelUpLogo from '../assets/LevelUp.png';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

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
                navigate('/overviewtrainer');
            } else if (data.role === 'Trainee') {
                navigate('/overviewtrainee');
            } else {
                navigate('/landingpage');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    };

    const handleGoogleLogin = () => {
        console.log('Google login attempted');
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
            Don't have an account? <a href="signuppage" className="text-blue-600 hover:underline">Sign up</a>
            </div>
        </header>

        {/* Main Content */}
        <div className="flex px-6 py-12 gap-12">
            {/* Login Form */}
            <div className="w-1/3">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back!</h2>
                <p className="text-gray-600 mb-6">Sign in to continue your learning journey</p>

                <div className="space-y-4">
                    {/* Work Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Work Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <Eye className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors mt-6"
                    >
                        Login
                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col justify-center px-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Continue Your Learning Journey
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Unlock your potential, track your progress, and lead the way—whether you're mastering skills or empowering others to grow.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6">
                {/* Track Progress */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Track Progress</h3>
                    <p className="text-gray-600 text-sm">Keep training and learning on track</p>
                </div>

                {/* Fast Learning */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Fast Learning</h3>
                    <p className="text-gray-600 text-sm">Makes learning engaging and fun</p>
                </div>

                {/* Community */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
                    <p className="text-gray-600 text-sm">Learn with peers globally</p>
                </div>

                {/* Innovation */}
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                    <p className="text-gray-600 text-sm">Smart learning tool</p>
                </div>
            </div>
        </div>
    </div>
</div>
);
}