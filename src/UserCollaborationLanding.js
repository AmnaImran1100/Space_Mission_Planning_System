import React from 'react';
import { Link } from 'react-router-dom';
import './UserCollaborationLanding.css';

function UserCollaborationLanding() {
  return (
    <div className='UserCollabLanding'>
    <div>
      <h1>User Collaboration Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/UserCollaboration">Any message to write?</Link>
        </li>
        <li>
          <Link to="/UserCollaborationDisplay">Display messages</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default UserCollaborationLanding;
