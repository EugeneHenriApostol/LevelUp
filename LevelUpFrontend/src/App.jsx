import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Signup from './pages/Signup.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/landingpage" replace />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} /> 
        </Routes>
    </Router>
  );
}

export default App
