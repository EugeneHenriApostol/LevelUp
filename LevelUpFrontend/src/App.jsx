import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import OverviewTrainer from './pages/OverviewTrainer';
import OverviewTrainee from './pages/OverviewTrainee';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/landingpage" replace />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/overviewtrainer" element={<OverviewTrainer />} />
          <Route path="/overviewtrainee" element={<OverviewTrainee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
