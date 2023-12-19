import React, { useState } from 'react';

function UserProfile() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your registration API endpoint to create a new user
    // You can use the registrationData state to send user data to the server
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to your login API endpoint to authenticate the user
    // You can use the loginData state to send login credentials to the server
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log('Login successful');
        setIsLoggedIn(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {loginData.username}!</h2>
          {/* Add user profile and management features here */}
        </div>
      ) : (
        <div>
          <h2>User Registration</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={registrationData.username}
              onChange={handleRegistrationChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registrationData.email}
              onChange={handleRegistrationChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registrationData.password}
              onChange={handleRegistrationChange}
              required
            />
            <button type="submit">Register</button>
          </form>

          <h2>User Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
