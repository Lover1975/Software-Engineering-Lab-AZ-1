import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const storedFirstName = localStorage.getItem('userFirstName');
        const storedPassword = localStorage.getItem('userPassword');

        if (username === storedFirstName && password === storedPassword) {
            alert('Login successful!');
            setLoginError('');
        } else {
            setLoginError('Invalid username or password.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
            <div style={{ padding: '20px', border: '2px solid black', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: 'fit-content' }}>
                <h1 style={{ textAlign: 'center' }}>Log In</h1>
                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <label htmlFor="username" style={{ display: 'block', marginBottom: '10px' }}>First Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            style={{ padding: '10px', width: '200px', margin: 'auto' }}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '10px' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            style={{ padding: '10px', width: '200px', margin: 'auto' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '200px', margin: 'auto' }}>
                        Log In
                    </button>
                    {loginError && <div style={{ color: 'red', marginTop: '10px' }}>{loginError}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;
