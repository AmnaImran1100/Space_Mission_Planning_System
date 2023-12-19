import React from 'react';
import { Link } from 'react-router-dom';
import './TaskAssignmentLanding.css';

function TaskAssignmentLanding() {
  return (
    <div className="TaskAssLanding">
    <div>
      <h1>Welcome to the TaskAssignment Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/TaskAssignment">Create Taks</Link>
          
        </li>
        <li>
          <Link to="/TaskAssignmentDisplay">Display Tasks</Link>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default TaskAssignmentLanding;
