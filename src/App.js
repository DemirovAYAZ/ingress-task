import React from 'react';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
