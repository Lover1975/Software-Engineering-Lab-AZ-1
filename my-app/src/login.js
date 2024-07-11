import React from 'react';

const Login = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
            <div style={{ padding: '20px', border: '2px solid black', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: 'fit-content' }}>
                <h1 style={{ textAlign: 'center' }}>Log In</h1>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <label htmlFor="username" style={{ display: 'block', marginBottom: '10px' }}>Username</label>
                    <input type="text" id="username" name="username" style={{ padding: '10px', width: '200px', margin: 'auto' }} />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '10px' }}>Password</label>
                    <input type="password" id="password" name="password" style={{ padding: '10px', width: '200px', margin: 'auto' }} />
                </div>
                <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '200px', margin: 'auto' }}>
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Login;
