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

// export default function Login() {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//             username,
//             password
//         });
//         setToken(token);
//     }

//     return (
//         <div className="login-wrapper">
//             <h1>Please Log In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <p>Username</p>
//                     <input type="text" onChange={e => setUserName(e.target.value)} />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input type="password" onChange={e => setPassword(e.target.value)} />
//                 </label>
//                 <NavLink to="/dashboard" onClick={handleSubmit}>Login</NavLink>
//             </form>
//         </div>
//     )
// }
function Button({ value, username, password, handleSubmit }) {
    return (
        <Link
            to="/dashboard">
            <button
                onClick={handleSubmit}
                className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">
                {value}
            </button>
        </Link >
    )
}

function Input({ type, id, name, label, placeholder, autofocus, onchange }) {
    return (
        <label className="text-gray-500 block mt-3">{label}
            <input
                autoFocus={autofocus}
                type={type}
                id={id}
                name={name}
                onChange={onchange}
                placeholder={placeholder}
                className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" />
        </label>
    )
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
        <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
            <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
                <h1 className="font-bold text-center block text-2xl">Log In</h1>
                <form>
                    <Input type="username" id="username" name="username" label="username" placeholder="skku123" autofocus={true} onChange={e => setUserName(e.target.value)} />
                    <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••" onChange={e => setPassword(e.target.value)} />
                    <Button value="Submit" username={username} password={password} onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}



Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
