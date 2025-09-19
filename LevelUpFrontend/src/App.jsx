import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; 
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import OverviewTraineePage from "./components/overviewTrainee";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/overviewtrainee" element={<OverviewTraineePage />} />
      </Routes>
    </Router>
  );
}
