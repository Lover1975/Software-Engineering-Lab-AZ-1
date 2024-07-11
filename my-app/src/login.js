import React from 'react';

const Login = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
            <h1>Log In</h1>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="username" style={{ display: 'block', marginBottom: '10px' }}>Username:</label>
                <input type="text" id="username" name="username" style={{ padding: '10px', width: '200px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '10px' }}>Password:</label>
                <input type="password" id="password" name="password" style={{ padding: '10px', width: '200px' }} />
            </div>
            <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Log In
            </button>
        </div>
    );
};

export default Login;
