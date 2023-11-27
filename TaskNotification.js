import React, { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const [customMessage, setCustomMessage] = useState('');

  

  const addCustomNotification = () => {
    if (customMessage.trim() === '') {
      return;
    }

    const newNotification = {
      id: Date.now(),
      message: customMessage,
    };

    // Update the local state
    setNotifications([...notifications, newNotification]);
    setCustomMessage('');

    // Send data to your Firebase endpoint
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Notifications.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNotification),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Notification added to Firebase.');
        } else {
          console.error('Failed to add notification to Firebase.');
        }
      })
      .catch((error) => {
        console.error('Error adding notification to Firebase:', error);
      });
  };

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);

    // Remove the notification from Firebase as well
    fetch(`YOUR_FIREBASE_DATABASE_URL/notifications/${id}.json`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Notification removed from Firebase.');
        } else {
          console.error('Failed to remove notification from Firebase.');
        }
      })
      .catch((error) => {
        console.error('Error removing notification from Firebase:', error);
      });
  };

  return (
    <div>
      <h2>Task Notification System</h2>
      <input
        type="text"
        placeholder="Enter Notification Message"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
      />
      <button onClick={addCustomNotification}>Add Notification</button>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationSystem;
