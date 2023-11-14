import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    console.log(JSON.stringify(userToken))
}

async function loginUser(credentials) {
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" />
                {/* <button type="button">Login</button>
                </input> */}
            </form>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}