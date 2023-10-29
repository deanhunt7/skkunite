import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';


function App() {
  const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;