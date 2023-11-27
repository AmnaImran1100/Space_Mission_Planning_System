import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './homepage.css';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Space Mission Project</h1>
        <p>Explore the mysteries of the cosmos with us!</p>
        <Link to="/mainpage" className="button">Explore Missions</Link> {/* Use Link for navigation */}
      </header>
    </div>
  );
}

export default Homepage;
