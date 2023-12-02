import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function Register() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      studentID: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData({
        ...formData,
        [id]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      console.log("Registration Data:", formData);
  
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        studentID: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    };

    const { isAuthenticated, loginUser } = useAuth();
    const navigate = useNavigate();
    const handleQuizNavigation = () => {
        loginUser();
        navigate(`/Quiz/quiz`); // Navigate to the 'Quiz' page
    };
  

    return (
      <div className="container mt-5">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={formData.username} onChange={handleInputChange} className="form-control" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="studentID">Student ID:</label>
                <input type="text" id="studentID" value={formData.studentID} onChange={handleInputChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={formData.password} onChange={handleInputChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="form-control" required />
              </div>
            </div>
          </div>
          <button onClick={handleQuizNavigation} className="login-button" type="submit">Create account</button>
        </form>
      </div>
    );
  }
  
  export default Register;



