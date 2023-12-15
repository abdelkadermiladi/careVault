// // src/components/Form.js
// import React, { useState } from 'react';

// const Form = () => {
//   // State to hold form data
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     birthday: '',
//     gender: '',
//     address: '',
//     email: '',
//     phoneNumber: '',
//   });

//   // State to manage confirmation message
//   const [submitted, setSubmitted] = useState(false);

//   // Function to handle form field changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here (e.g., send data to a server)

//     // Show confirmation message
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', display: 'flex', flexDirection: 'column' }}>
//       <h1 style={{ textAlign: 'center' }}>Form Page</h1>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//         <label style={{ marginBottom: '10px' }}>
//           First Name:
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//             maxLength="50"
//             required
//             pattern="[A-Za-z]+"
//             title="Please enter a valid name with only letters"
//             style={{ padding: '5px', margin: '5px' }}
//           />
//         </label>

//         <label style={{ marginBottom: '10px' }}>
//           Last Name:
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//             maxLength="50"
//             required
//             pattern="[A-Za-z]+"
//             title="Please enter a valid name with only letters"
//             style={{ padding: '5px', margin: '5px' }}
//           />
//         </label>

//         <label style={{ marginBottom: '10px' }}>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={{ padding: '5px', margin: '5px' }}
//           />
//         </label>

//         <label style={{ marginBottom: '10px' }}>
//           Phone Number:
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             pattern="[0-9]{8}"
//             title="Please enter a valid 8-digit phone number"
//             required
//             style={{ padding: '5px', margin: '5px' }}
//           />
//         </label>

//         <label style={{ marginBottom: '10px' }}>
//           Birthday:
//           <input
//             type="date"
//             name="birthday"
//             value={formData.birthday}
//             onChange={handleInputChange}
//             required
//             style={{ padding: '5px', margin: '5px' }}
//           />
//         </label>

//         <label style={{ marginBottom: '10px' }}>
//           Gender:
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             required
//             style={{ padding: '5px', margin: '5px' }}
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </label>

//         <label style={{ marginBottom: '10px' }}>
//           Address:
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             maxLength="500"
//             required
//             style={{ padding: '5px', margin: '5px' }}
//           />
//         </label>

//         <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
//           Submit
//         </button>
//       </form>

//       {submitted && (
//         <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#d4edda', color: '#155724', padding: '10px' }}>
//           Form submitted successfully!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;
