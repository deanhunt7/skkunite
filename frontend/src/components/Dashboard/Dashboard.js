import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({ userName }) {

    function getToken() {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }

    const token = getToken();

    return (
        <div>
            {/* Header with welcome message */}
            <header style={{ background: '#004d00', color: 'white', padding: '0px', textAlign: 'center', verticalAlign: 'middle' }}>
                <h1 style={{ marginBottom: '10px', color: "black" }}>User Dashboard</h1>
                <h2 style={{ color: 'black' }}>Welcome, {token}!</h2>
                <nav style={{ background: '#004d00', padding: '10px', textAlign: 'center' }}>
                    <NavLink to="/friends">Friends</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/quiz">Quiz</NavLink>
                </nav>
            </header>

            {/* Navigation links using React Router Link */}

            {/* Main content area */}
            <main style={{ padding: '20px', textAlign: 'center' }}>
                {/* Add more content as needed */}
                <p>Your dashboard content goes here.</p>
            </main>
        </div>
    );
}

// Define a custom NavLink component
const NavLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            style={{
                display: 'inline-block',
                padding: '10px',
                margin: '0 15px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
                backgroundColor: '#008000', // Dark green background color
            }}
        >
            {children}
        </Link>
    );
};