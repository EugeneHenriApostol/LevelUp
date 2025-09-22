import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LevelUpLogo from '../assets/LevelUp.png';

const EditProfile = () => {
    const navigate = useNavigate();

    // Dropdown state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [fullName, setFullName] = useState("User");

    // Load initial data from localStorage for reset
    const initialProfilePic =
        localStorage.getItem("profilePic") ||
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face";

    const initialFormData = {
        firstName: JSON.parse(localStorage.getItem("firstName") || '""'),
        lastName: JSON.parse(localStorage.getItem("lastName") || '""'),
        workEmail: JSON.parse(localStorage.getItem("workEmail") || '""'),
        role: JSON.parse(localStorage.getItem("role") || '""'),
    };

    const [profilePic, setProfilePic] = useState(initialProfilePic);
    const [formData, setFormData] = useState(initialFormData);

    // Set full name for display
    useEffect(() => {
        if (formData.firstName && formData.lastName) {
            setFullName(`${formData.firstName} ${formData.lastName}`);
        }
    }, [formData.firstName, formData.lastName]);

    // Handlers
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
    const closeDropdown = () => setIsDropdownOpen(false);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/landingpage";
    };

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        if (window.confirm("Are you sure you want to update your profile?")) {
            localStorage.setItem("firstName", JSON.stringify(formData.firstName));
            localStorage.setItem("lastName", JSON.stringify(formData.lastName));
            localStorage.setItem("workEmail", JSON.stringify(formData.workEmail));
            localStorage.setItem("role", JSON.stringify(formData.role));
            localStorage.setItem("profilePic", profilePic);
            // TODO: call backend API if needed
            navigate(-1);
        }
    };

    const handleCancel = () => {
        // Reset to initial values and go back
        setProfilePic(initialProfilePic);
        setFormData(initialFormData);
        navigate(-1);
    };

    const goToEditProfile = () => {
        closeDropdown();
        navigate("/editprofile");
    };

    return (
        <div className="min-h-screen bg-blue-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="flex justify-between items-center p-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <img src={LevelUpLogo} alt="LevelUp Logo" className="w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-gray-800">LevelUp</h1>
                            <p className="text-sm text-gray-600">Learning in sync.</p>
                        </div>
                    </div>
                    <div className="relative flex justify-end items-center">
                        {/* Profile icon */}
                        <div
                            onClick={toggleDropdown}
                            className="cursor-pointer rounded-full bg-blue-500 p-2 flex items-center justify-center hover:bg-blue-600 transition"
                        >
                            {/* Avatar icon (SVG) */}
                            <svg
                                className="w-6 h-6 text-white"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
                                <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
                            </svg>
                        </div>

                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <>
                                {/* Click-away overlay */}
                                <div className="fixed inset-0 z-10" onClick={closeDropdown} />
                                <div className="absolute top-12 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                                    {/* User name */}
                                    <button
                                        onClick={closeDropdown}
                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2 text-gray-600"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
                                            <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" />
                                        </svg>
                                        <span>{fullName}</span>
                                    </button>

                                    {/* Edit Profile */}
                                    <button
                                        onClick={goToEditProfile}
                                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2 text-gray-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                            <path d="M18.5 2.5a2 2 0 0 1 2.83 2.83L12 14l-4 1 1-4 9.5-8.5z" />
                                        </svg>
                                        <span>Edit Profile</span>
                                    </button>

                                    <div className="border-t my-1" />

                                    {/* Logout */}
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2 text-red-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <path d="M16 17l5-5-5-5" />
                                            <path d="M21 12H9" />
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal Content */}
            <div className="flex items-center justify-center px-6 py-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl relative">
                    {/* Profile Section */}
                    <div className="flex items-start gap-6 mb-8">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-200 relative">
                                <img
                                    src={profilePic}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                <label className="absolute bottom-2 right-2 bg-white rounded-full p-1 cursor-pointer shadow">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleProfilePicChange}
                                        className="hidden"
                                    />
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 5v14m7-7H5" />
                                    </svg>
                                </label>
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-1">Username</h2>
                            <p className="text-gray-600">User Email</p>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name:
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

                        {/* Work Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Work Email:
                            </label>
                            <input
                                type="email"
                                name="workEmail"
                                value={formData.workEmail}
                                onChange={handleInputChange}
                                placeholder="Enter your Work Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name:
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

                        {/* Role */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Role:
                            </label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleInputChange}
                                placeholder="Enter your Role"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={handleUpdate}
                            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;