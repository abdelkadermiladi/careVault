// src/components/PatientLoginForm.js
import React, { useState } from 'react';

const PatientLoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the server
      // Check if the user is registered as a patient
      // If successful, set submitted to true
      // If not, setLoginError to true
      // Example:
      // const response = await fetch('/api/patient/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await response.json();
      // if (data.success) {
      //   setSubmitted(true);
      // } else {
      //   setLoginError(true);
      // }

      // For demonstration purposes, just set submitted to true
      setSubmitted(true);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '10px' }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={{ padding: '5px', margin: '5px' }}
          />
        </label>

        <label style={{ marginBottom: '10px' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ padding: '5px', margin: '5px' }}
          />
        </label>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Login
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#d4edda', color: '#155724', padding: '10px' }}>
          Patient logged in successfully!
        </div>
      )}

      {loginError && (
        <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#f8d7da', color: '#721c24', padding: '10px' }}>
          Invalid username or password. Please try again.
        </div>
      )}
    </div>
  );
};

export default PatientLoginForm;
