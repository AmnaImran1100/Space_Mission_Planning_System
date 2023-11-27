import React, { useState, useEffect } from 'react';

const NotificationSystem1 = () => {
  const [notifications, setNotifications] = useState([]);
  const [customMessage, setCustomMessage] = useState('');

  useEffect(() => {
    // Load existing notifications from Firebase when the component mounts
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Notifications.json')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const notificationsArray = Object.keys(data).map((key) => ({
            id: key,
            message: data[key].message,
          }));
          setNotifications(notificationsArray);
        }
      })
      .catch((error) => {
        console.error('Error loading notifications from Firebase:', error);
      });
  }, []);

  const addCustomNotification = () => {
    if (customMessage.trim() === '') {
      return;
    }

    const newNotification = {
      message: customMessage,
    };

    // Send data to your Firebase endpoint
    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/Notifications.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNotification),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotifications([...notifications, { id: data.name, ...newNotification }]);
        setCustomMessage('');
      })
      .catch((error) => {
        console.error('Error adding notification to Firebase:', error);
      });
  };

  const removeNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);

    // Remove the notification from Firebase
    fetch(`https://spacemission-d8661-default-rtdb.firebaseio.com/Notifications/${id}.json`, {
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

export default NotificationSystem1;
