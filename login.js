import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://spacemission-d8661-default-rtdb.firebaseio.com/RegisteredUsers.json');

      if (response.status === 200) {
        return Object.values(response.data);
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fetch user data from your Firebase database
    const userData = await fetchUserData();

    // Check if the user's email and password match any entry in the database
    const user = userData.find((user) => user.email === email && user.Password === password);

    if (user) {
      alert('Login successful');

      // Navigate to the homepage after a successful login
      navigate('/homepage');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="form">
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
