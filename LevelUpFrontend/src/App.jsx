  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import LandingPage from "./components/LandingPage"; 
  import OverviewTrainee from "./components/overviewTrainee";
  import TaskTrainee from "./components/taskTrainee"; 
  import LeaderboardTrainee from "./components/leaderboardTrainee";  

  export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/overviewtrainee" element={<OverviewTrainee />} />
          <Route path="/tasktrainee" element={<TaskTrainee />} />
          <Route path="/leaderboardtrainee" element={<LeaderboardTrainee />} />
         
        </Routes>
      </Router>
    );
  }
