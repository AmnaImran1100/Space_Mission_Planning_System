import React, { useState } from 'react';

function DiscussionForum() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [userName, setUserName] = useState('');

  const sendMessage = () => {
    if (currentMessage.trim() === '' || userName.trim() === '') {
      alert('Please enter both your username and a message.');
      return;
    }

    // Create a new message object with a unique ID
    const newMessage = {
      id: Date.now(),
      sender: userName,
      message: currentMessage,
    };

    // Update the list of messages
    setMessages([...messages, newMessage]);
    setCurrentMessage('');

    // Send data to your Firebase endpoint
    const dataToSend = {
      sender: userName,
      message: currentMessage,
    };

    fetch('https://spacemission-d8661-default-rtdb.firebaseio.com/DiscussionForm.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data successfully sent to Firebase.');
        } else {
          console.error('Failed to send data to Firebase.');
        }
      })
      .catch((error) => {
        console.error('Error sending data to Firebase:', error);
      });
  };

  return (
    <div>
      <h2>Discussion Forum</h2>
      <div>
        <div>
          {messages.map((message) => (
            <div key={message.id}>
              <strong>{message.sender}:</strong>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <div>
          <label>
            Your Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <textarea
            placeholder="Type your message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default DiscussionForum;
