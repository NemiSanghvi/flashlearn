// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure Tailwind CSS is imported here

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen bg-gradient-to-t from-gray-300 to-slate-800">
      <h1 className="text-6xl font-bold text-white animate-bounce font-press-start">
        Flash Learn
      </h1>
      <div className="mt-10 flex space-x-6">

        <Link to="/login">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md  hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/game">
          <button className="px-6 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-400 transition">
            Guest
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
