import { Link } from 'react-router-dom';
import React from "react";

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
                backgroundColor: '#008000', 
            }}
        >
            {children}
        </Link>
    );
}

export default NavLink;