import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-router-dom"; // <-- import Link

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Pricing", "Features", "Testimonials", "Contact"];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute w-[270px] h-[157px] bg-gradient-to-br from-[#83A1FF] to-[#B6C7FF] opacity-60 blur-[150px] left-[-154px] top-[116px]" />
      <div className="absolute w-[535px] h-[342px] bg-gradient-to-br from-[#83A1FF] to-[#E8EFFF] opacity-50 blur-[87.5px] left-[34px] top-[507px]" />

      {/* ================= HEADER ================= */}
      <header className="relative z-10 w-full h-[101px] border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="max-w-[1347px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80">
            <div className="w-12 h-12 rounded-xl border border-black/80 bg-[#83A1FF] flex items-center justify-center">
              <svg
                width="32"
                height="34"
                viewBox="0 0 40 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6543 19.1553L19.9238 20.833L27.7236 23.3164L24.6074 25.9014L25.3457 22.7051L20.0762 21.0273L12.2754 18.543L15.3916 15.958L14.6543 19.1553Z"
                  stroke="#131313"
                  strokeWidth="12"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-inter text-2xl font-bold text-black">
                LevelUp
              </h1>
              <p className="text-sm font-light text-black">Learning in sync.</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 font-poppins">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-base text-[#3F3636] hover:text-[#83A1FF] transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="w-24 h-[53px] rounded-xl border border-black/80 bg-gray-100 font-inter font-bold text-lg text-[#3F3636] hover:bg-gray-200 flex items-center justify-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="w-[132px] h-[53px] rounded-xl border border-black/80 bg-[#83A1FF] font-inter font-bold text-lg text-[#3F3636] shadow hover:bg-[#7a95f0] flex items-center justify-center"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-black/10 shadow-md">
            <div className="max-w-[1347px] mx-auto p-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-left text-base text-[#3F3636] hover:text-[#83A1FF]"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-black/10">
                <Link
                  to="/login"
                  className="flex-1 h-12 rounded-lg border border-black/80 bg-gray-100 font-inter font-bold text-[#3F3636] flex items-center justify-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 h-12 rounded-lg border border-black/80 bg-[#83A1FF] font-inter font-bold text-[#3F3636] shadow flex items-center justify-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <main className="relative z-10 max-w-[1347px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-4 items-center min-h-[calc(100vh-101px)]">
  {/* Left Content */}
  <div className="flex flex-col gap-6 justify-center ml-6">
    <h1 className="font-poppins font-bold text-3xl sm:text-5xl text-[#3F3636] leading-tight">
      <span className="text-[#83A1FF]">Build great teams</span>
      <br />
      through better training
    </h1>
    <p className="font-poppins text-lg text-black max-w-xl">
      LevelUp brings learning and training together—giving your team the tools,
      clarity, and control they need to excel.
    </p>
    <div>
      <Link
        to="/signup"
        className="w-[189px] h-[60px] rounded-xl bg-white shadow font-inter font-bold text-xl text-[#3F3636] hover:shadow-lg transition flex items-center justify-center"
      >
        Get Started →
      </Link>
    </div>

    {/* Stats */}
    <div className="flex flex-wrap gap-6 pt-4">
      {[
        { value: "10K+", label: "Active Users" },
        { value: "95%", label: "Success Rate" },
        { value: "24/7", label: "Support" },
      ].map((stat) => (
        <div key={stat.label} className="text-center min-w-[100px]">
          <div className="text-2xl font-bold">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Right Content */}
      <div className="flex justify-center lg:justify-start mr-6">
  <div className="bg-white rounded-xl shadow-lg p-4 w-full min-w-sm">
    <h3 className="font-bold text-lg mb-4">LevelUp Dashboard</h3>

    {/* Summary Cards */}
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-100 text-blue-700 p-3 rounded-lg text-center">
        87% <br /> Completion Rate
      </div>
      <div className="bg-yellow-100 text-yellow-700 p-3 rounded-lg text-center">
        24 <br /> Active Learners
      </div>
      <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center">
        156 <br /> Tasks Done
      </div>
    </div>

    {/* Courses */}
    <ul className="space-y-3">
      <li className="flex justify-between">
        <span>📘 JavaScript Fundamentals</span>
        <span className="text-sm text-gray-500">75%</span>
      </li>
      <li className="flex justify-between">
        <span>📊 Project Management</span>
        <span className="text-sm text-gray-500">45%</span>
      </li>
      <li className="flex justify-between">
        <span>🎨 UX Design Basics</span>
        <span className="text-sm text-gray-500">92%</span>
      </li>
    </ul>

    {/* Recent Activity */}
    <h4 className="mt-6 font-semibold text-gray-700">Recent Activity</h4>
    <ul className="text-sm text-gray-500 mt-2 space-y-1">
      <li>✅ Sarah completed React Components module</li>
      <li>📅 Team meeting scheduled for tomorrow</li>
      <li>✨ New course: Advanced Analytics added</li>
    </ul>
  </div>
</div>

</main>



    </div>
  );
}
