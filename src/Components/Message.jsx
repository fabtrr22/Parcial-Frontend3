import React from 'react';
import '../styles/Message.css';

const Message = ({ message }) => {
  return (
    <div className="message-container">
      <h4>{message}</h4>
    </div>
  );
};

export default Message;
