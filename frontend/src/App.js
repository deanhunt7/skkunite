import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Quiz from './components/Quiz/Quiz';
import Article1 from './components/Landing/Articles/Article1';
import Episode1 from './components/Landing/Episodes/Episode1';
import { About } from './components/About/About';
import AIchat from './components/AIchat/AIchat';
import logo from './logo.png'
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

function Footer() {
  return (
    <footer style={{ backgroundColor: '#E6FFE5', padding: '10px' }}>
      <Container className="d-flex justify-content-between align-items-center">
        <img src={logo} alt="SKKUnite Logo" className="logo" />
        <p>©2023. All Rights Reserved. SKKU</p>
      </Container>
    </footer>
  );
}

function App() {
  const token = getToken();
  return (
    <div className="wrapper">
      <BrowserRouter>
        <>
          <Container className="d-flex justify-content-between align-items-center">
            <img src={logo} alt="SKKUnite Logo" className="logo" />
            <Navbar bg="green" variant="green" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className="nav-link">About SKKUnite</Nav.Link>
                  <Nav.Link as={Link} to="/Preferences/preferences" className="nav-link">Preferences</Nav.Link>
                  <Nav.Link as={Link} to="/AIchat/AIchat" className="nav-link">Chat with AI</Nav.Link>
                  <Nav.Link as={Link} to="/Login/login" className="nav-link">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/Preferences/preferences" element={<Preferences />} />
            <Route path="/AIchat/AIchat" element={<AIchat />} />
            <Route path="/Login/login" element={<Login />} />
            <Route path="/articles/:slug" element={<Article1 />} />
            <Route path="/episodes/:slug" element={<Episode1 />} />
            <Route path="/friends" element={<Friends />} />
        </Routes>
          <Footer className="footer" />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
