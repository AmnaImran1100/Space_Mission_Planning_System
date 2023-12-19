import React from 'react';
import { Link } from 'react-router-dom';
import './TeamManagementLanding.css';

function TeamManagementLanding() {
  return (
    <div className='TeamLanding'>
    <div>
      <h1>Team Management Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/TeamManagement">Create new Team</Link>
        </li>
        <li>
          <Link to="/TeamManagementDisplay">Display existing teams</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default TeamManagementLanding;
