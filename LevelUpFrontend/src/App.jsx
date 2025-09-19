import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; 
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

import TraineeLeaderboard from "./components/TraineePage/TE_Leaderboard";
import TraineeOverview from "./components/TraineePage/TE_Overview";
import TraineeTasks from "./components/TraineePage/TE_Tasks";
import TrainerOverview from "./components/TrainerPage/TR_Tasks";
import TrainerTasks from "./components/TrainerPage/TR_Overview";
import TrainerTrainees from "./components/TrainerPage/TR_Trainee";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        {/* Trainee Routes */}
        <Route path="/traineeleaderboard" element={<TraineeLeaderboard/>} />
        <Route path="/traineeoverview" element={<TraineeOverview/>} />
        <Route path="/traineetasks" element={<TraineeTasks/>} />
        {/* Trainee Routes */}
        <Route path="/traineroverview" element={<TrainerOverview/>}/>
        <Route path="/trainertasks" element={<TrainerTasks/>}/>
        <Route path="/trainertrainee" element={<TrainerTrainees/>}/>

      </Routes>
    </Router>
  );
}
