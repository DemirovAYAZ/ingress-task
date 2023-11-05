import React from 'react';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
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
