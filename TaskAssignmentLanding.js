import React from 'react';
import { Link } from 'react-router-dom';

function TaskAssignmentLanding() {
  return (
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
  );
}

export default TaskAssignmentLanding;
