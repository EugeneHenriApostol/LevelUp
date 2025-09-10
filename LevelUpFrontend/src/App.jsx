import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; 
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OverviewTrainee from "./pages/OverviewTrainee";
import OverviewTrainer from "./pages/OverviewTrainer";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmPassword from "./pages/ConfirmPassword";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overviewtrainee" element={<OverviewTrainee />} />
        <Route path="/overviewtrainer" element={<OverviewTrainer />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />

      </Routes>
    </Router>
  );
}
