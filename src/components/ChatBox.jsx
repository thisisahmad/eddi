import React, { useState } from 'react';
import eddilogo from '../assets/eddi-logo.png';
import './ChatBox.css';

const ChatBox = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Dummy auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'Thank you for your message. I’ll get back to you shortly!' }]);
    }, 800);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-card">
      <div className="chat-card-content">
        <img
          src={eddilogo}
          alt="EDDI Governance Advisor"
          className="chat-advisor-image"
        />
        <h3 className="chat-advisor-title">EDDI Governance Advisor</h3>

        <div className="chat-history">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="How can I help you today?"
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default ChatBox;
