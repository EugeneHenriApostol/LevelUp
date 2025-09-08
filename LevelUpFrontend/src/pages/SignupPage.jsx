import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api"; // adjust path if needed

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const newUser = {
      FullName: formData.fullName,
      Email: formData.email,
      PasswordHash: formData.password, // backend expects PasswordHash
      role: role,
    };

    try {
      const res = await signup(newUser);
      console.log("Signup success:", res);
      setMessage("✅ Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500); // redirect after 1.5s
    } catch (err) {
      console.error("Signup failed:", err.message);
      setMessage("❌ Signup failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-white font-poppins">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[262px] h-[174px] bg-yellow-400 opacity-50 blur-[75px] right-[10%] top-[37%]" />
        <div className="absolute w-[535px] h-[342px] bg-purple-600 opacity-50 blur-[125px] -left-[10%] top-[50%]" />
        <div className="absolute w-[270px] h-[157px] bg-orange-400 blur-[150px] -left-[6%] top-[3%]" />
        <div className="absolute w-[270px] h-[157px] bg-red-700 blur-[200px] right-[8%] bottom-[20%]" />
        <div className="absolute w-[426px] h-[260px] bg-pink-500 opacity-30 blur-[100px] right-[15%] top-[33%] rounded-[30px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full h-[96px] bg-white/80 backdrop-blur border-b border-black/10 rounded-t-xl">
        <div className="flex items-center justify-between h-full px-6 sm:px-10 lg:px-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <div className="w-12 h-12 rounded-xl border border-black/80 bg-indigo-300 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6543 19.1553L19.9238 20.833L27.7236 23.3164L24.6074 25.9014L25.3457 22.7051L20.0762 21.0273L12.2754 18.543L15.3916 15.958L14.6543 19.1553Z"
                  stroke="#131313"
                  strokeWidth="12"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">LevelUp</h1>
              <p className="text-sm text-gray-700">Learning in sync.</p>
            </div>
          </Link>

          {/* Login link */}
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <span className="hidden sm:inline text-gray-700">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center p-6">
        <div className="w-full max-w-[450px] bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Welcome!
          </h2>

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full name */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border border-black/50 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 border border-black/50 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-base font-semibold text-gray-800 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 pr-12 border border-black/50 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-[59px] px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              >
                <option value="">Select role</option>
                <option value="Trainer">Trainer</option>
                <option value="Trainee">Trainee</option>
              </select>
            </div>

            {/* Signup button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-indigo-400 text-white text-lg font-semibold rounded-lg shadow hover:bg-indigo-500 disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <p className="text-center mt-4 text-gray-700">{message}</p>
          )}
        </div>
      </main>
    </div>
  );
}
