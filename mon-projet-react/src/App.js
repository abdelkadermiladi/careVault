// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import DoctorLoginForm from './components/DoctorLoginForm.js'; // Create DoctorLoginForm component
import PatientLoginForm from './components/PatientLoginForm'; // Create PatientLoginForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<RegistrationForm registrationType="doctor" />} />
        <Route path="/patient" element={<RegistrationForm registrationType="patient" />} />
        <Route path="/login/doctor" element={<DoctorLoginForm />} />
        <Route path="/login/patient" element={<PatientLoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
