import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import LevelUpLogo from "../assets/LevelUp.png";
import "../styles/ConfirmPassword.css"; // separate CSS file

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || "";
  const token = queryParams.get("token") || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5250/api/login/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, newPassword }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) throw new Error(data?.message || "Failed to reset password");

      setSuccess("Password reset successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => navigate("/login");

  return (
    <div className="confirm-password-container">
      {/* Logo Section outside card */}
      <Link to="/landingpage" className="logo-section">
        <img src={LevelUpLogo} alt="LevelUp Logo" className="logo-image" />
        <div className="logo-text">
          <h1>LevelUp</h1>
          <p>Learning in sync.</p>
        </div>
      </Link>

      {/* Card */}
      <div className="confirm-password-card">
        {/* Lock Icon */}
        <div className="lock-icon">
          <div className="lock-circle">
            <Lock className="lock-svg" />
          </div>
        </div>

        <h1 className="confirm-password-title">Reset Password</h1>
        <p className="confirm-password-description">
          Enter your new password below to reset your account password.
        </p>

        <form onSubmit={handleSubmit} className="confirm-password-form">
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <button type="submit" disabled={loading} className="confirm-password-button">
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="back-to-login">
          <button onClick={handleBackToLogin} className="back-link">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>Back to Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
