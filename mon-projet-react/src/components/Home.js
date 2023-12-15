// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Carevault Portal</h1>
      <p>Please select your action:</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <h2>Registration</h2>
          <Link to="/doctor">
            <button style={{ marginRight: '10px' }}>Doctor Registration</button>
          </Link>
          <Link to="/patient">
            <button>Patient Registration</button>
          </Link>
        </div>
        <div>
          <h2>Login</h2>
          <Link to="/login/doctor">
            <button style={{ marginRight: '10px' }}>Doctor Login</button>
          </Link>
          <Link to="/login/patient">
            <button>Patient Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
