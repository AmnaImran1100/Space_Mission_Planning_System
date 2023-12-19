import React from 'react';
import { Link } from 'react-router-dom';
import './MissionProfileLanding.css';

function MissionProfileLanding() {
  return (
    <div className='MissionLanding'>
    <div>
      <h1>Welcome to the Mission Profiles Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/MissionProfile">Create Mission</Link>
        </li>
        <li>
          <Link to="/MissionProfileDisplay">Display Missions</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default MissionProfileLanding;
