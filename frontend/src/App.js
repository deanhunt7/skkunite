import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Quiz from './components/Quiz/Quiz';
import Friends from './components/Friends/Friends';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  console.log(JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={token ? <Dashboard token={token} /> : <Login setToken={setToken} />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;