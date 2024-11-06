// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landingpage';
import GamePage from './Components/Gamepage';
import Test from './Components/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />

      </Routes>
    </Router>
  );
};

export default App;
