
// src/components/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ registrationType }) => {
  const [formData, setFormData] = useState({
    name: '',
    // Common fields
    age: '',
    sex: '',
    // Doctor-specific fields
    speciality: '',
    // Patient-specific fields
    cnss: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send data to a server)

    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center' }}>{registrationType === 'doctor' ? 'Doctor' : 'Patient'} Registration</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            maxLength="50"
            required
            pattern="[A-Za-z]+"
            title="Please enter a valid name with only letters"
            style={{ padding: '5px', margin: '5px' }}
          />
        </label>

        {registrationType === 'patient' && (
          <>
            <label style={{ marginBottom: '10px' }}>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                style={{ padding: '5px', margin: '5px' }}
              />
            </label>

            <label style={{ marginBottom: '10px' }}>
              Sex:
              <select
                name="sex"
                value={formData.sex}
                onChange={handleInputChange}
                required
                style={{ padding: '5px', margin: '5px' }}
              >
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label style={{ marginBottom: '10px' }}>
              CNSS:
              <input
                type="text"
                name="cnss"
                value={formData.cnss}
                onChange={handleInputChange}
                maxLength="10"
                required
                pattern="[0-9]+"
                title="Please enter a valid CNSS number"
                style={{ padding: '5px', margin: '5px' }}
              />
            </label>
          </>
        )}

        {registrationType === 'doctor' && (
          <label style={{ marginBottom: '10px' }}>
            Speciality:
            <input
              type="text"
              name="speciality"
              value={formData.speciality}
              onChange={handleInputChange}
              maxLength="50"
              required
              pattern="[A-Za-z]+"
              title="Please enter a valid speciality with only letters"
              style={{ padding: '5px', margin: '5px' }}
            />
          </label>
        )}

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#d4edda', color: '#155724', padding: '10px' }}>
          {`${registrationType === 'doctor' ? 'Doctor' : 'Patient'} registered successfully!`}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
