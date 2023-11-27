import React from 'react';
import { Link } from 'react-router-dom';

function UserCollaborationLanding() {
  return (
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
  );
}

export default UserCollaborationLanding;
