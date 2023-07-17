import React, { useState } from 'react';

const RealTimeMessaging = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSend = () => {
    // Lógica para enviar el mensaje en tiempo real
    console.log(`Sending message: ${message}`);
    // Restablecer el mensaje
    setMessage('');
  };

  return (
    <div>
      <h2>Real-Time Messaging</h2>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
};

export default RealTimeMessaging;
