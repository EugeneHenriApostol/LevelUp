// src/pages/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Signup.css";
import LevelUpLogo from "../assets/LevelUp.png";

const Signup = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5250/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || JSON.stringify(data) || "Signup failed");
      }

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Header with Logo */}
      <div className="signup-header">
        <Link
          to="/landingpage"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="logo-section">
            <img
              src={LevelUpLogo}
              alt="LevelUp Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="logo-text">
              <h1>LevelUp</h1>
              <p>Learning in sync.</p>
            </div>
          </div>
        </Link>
        <Link to="/login" className="header-login">
          Login
        </Link>
      </div>

      {/* Main Signup Card */}
      <div className="signup-card">
        <h1 className="signup-title">Welcome!</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Work Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role Dropdown */}
          <div className="form-group">
            <label className="form-label">Role</label>
            <select
              name="role"
              className="form-input"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                -- Select Role --
              </option>
              <option value="trainer">Trainer</option>
              <option value="trainee">Trainee</option>
            </select>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
