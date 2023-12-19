import React, { useState, useEffect } from 'react';
import './UserCollaborationDisplay.css';

function DiscussionForumMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Your Firebase endpoint for discussion forum messages
    const firebaseEndpoint = 'https://spacemission-d8661-default-rtdb.firebaseio.com/DiscussionForm.json';

    fetch(firebaseEndpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const messageData = Object.values(data);
          setMessages(messageData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='UserDisplay'>
    <div>
      <h2>Discussion Forum Messages</h2>
      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div>
          {messages.map((message, index) => (
            <div key={index}>
              <strong>{message.sender}:</strong>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default DiscussionForumMessages;
