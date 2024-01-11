// src/components/Login.js
// import React from 'react';

// const Login = () => {
//   return (
//     <div class="container">
//     <form class="login-form" action="/verify_otp" method="post">
//       <h2>Login</h2>
//       <div class="form-group">
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" required/>
//       </div>
//       <div class="form-group">
//         <label for="password">Password:</label>
//         <input type="password" id="password" name="password" required/>
//       </div>
//       <button type="submit">Submit</button>
      
//   </form>
   
//   </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any additional validation or submit logic here
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Submit the form data or perform further actions
    console.log('Submitting:', { email, password });
  };

  const validateEmail = (email) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

