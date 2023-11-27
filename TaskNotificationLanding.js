import React from 'react';
import { Link } from 'react-router-dom';

function TaskNotificationLanding() {
  return (
    <div>
      <h1>Welcome to the Notifications Portal</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/TaskNotification">Add new notification</Link>
        </li>
        <li>
          <Link to="/TaskNotificationDisplay">Display Notifications</Link>
        </li>
      </ul>
    </div>
  );
}

export default TaskNotificationLanding;
