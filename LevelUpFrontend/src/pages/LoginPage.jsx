import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api"; // adjust path if needed

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const data = await login({ email, passwordHash: password });
    console.log("✅ Logged in:", data);

    // If backend returns a token
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    // If backend only returns a message
    if (data.role) {
      localStorage.setItem("role", data.role);

      if (data.role === "Trainer") {
        navigate("/trainer-dashboard");
      } else if (data.role === "Trainee") {
        navigate("/trainee-dashboard");
      } else {
        navigate("/dashboard"); // fallback
      }
    } else {
      navigate("/dashboard"); // if role not returned
    }

    } catch (err) {
      setError("Invalid email or password");
    }
};

  return (
    <div className="min-h-screen relative bg-white text-gray-800 font-inter">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[262px] h-[174px] bg-yellow-400 opacity-50 blur-[75px] right-48 top-80" />
        <div className="absolute w-[535px] h-[342px] bg-purple-500 opacity-50 blur-[175px] -left-40 top-[631px]" />
        <div className="absolute w-[270px] h-[157px] bg-orange-400 blur-[200px] -left-48 top-10" />
        <div className="absolute w-[270px] h-[157px] bg-red-700 blur-[175px] right-24 bottom-36" />
        <div className="absolute w-[426px] h-[260px] bg-pink-500 opacity-30 blur-[100px] right-56 top-52" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full h-[101px] bg-white/80 backdrop-blur border-b border-black/10 rounded-t-xl">
        <div className="max-w-6xl mx-auto px-8 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-300 rounded-xl border border-black/80 flex items-center justify-center">
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
              <h1 className="text-2xl font-bold">LevelUp</h1>
              <p className="text-sm">Learning in sync.</p>
            </div>
          </Link>

          <div className="flex items-center gap-2 text-base">
            <span>Don&apos;t have an account?</span>
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-101px)]">
        {/* Left: Login */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-[448px] bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-poppins mb-2">
                Welcome Back!
              </h2>
              <p className="text-gray-700">
                Sign in to continue your learning journey
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-lg font-semibold font-poppins mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full h-[59px] px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-lg font-semibold font-poppins mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-[59px] px-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              {/* Error message */}
              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              {/* Forgot password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full h-[54px] bg-indigo-400 text-white text-lg font-semibold rounded-lg shadow hover:bg-indigo-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Right: Features */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          {/* ... your features section unchanged ... */}
        </div>
      </div>
    </div>
  );
}
