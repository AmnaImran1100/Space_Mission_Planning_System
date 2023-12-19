import React from 'react';
import { Link } from 'react-router-dom';
import './TaskNotificationLanding.css';

function TaskNotificationLanding() {
  return (
    <div className='notificationLanding'>
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
    </div>
  );
}

export default TaskNotificationLanding;
