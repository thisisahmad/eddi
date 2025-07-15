import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.css';
import eddiLogo from '../assets/eddi-logo.png';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [nextId, setNextId] = useState(2);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    const message = inputValue.trim();
    if (!message) return;

    const userMessage = {
      id: nextId,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setNextId(prev => prev + 1);
    setTimeout(() => setIsTyping(true), 300);

    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That's an interesting question! Let me help you with that.",
        "I understand what you're asking. Here's what I can tell you about that topic.",
        "Great question! I'd be happy to assist you with this.",
        "Thanks for asking! Here's some information that might be helpful.",
        "I can definitely help you with that. Let me provide you with some details.",
        "That's a good point. Here's my take on this matter.",
        "I see what you're getting at. Let me break this down for you.",
        "Excellent question! Here's what you should know about this.",
        "Let me think about that for a moment... Here's what I can tell you.",
        "That's a fascinating topic! I'd love to share some insights about it.",
        "I appreciate your question. Here's a detailed response for you.",
        "You've touched on an important subject. Let me explain this further."
      ];

      const botMessage = {
        id: nextId + 1,
        type: 'bot',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setNextId(prev => prev + 2);
    }, 1000 + Math.random() * 2000);
  };

  const sendQuickMessage = (text) => {
    setInputValue(text);
    setTimeout(() => sendMessage(), 100);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Hello! I'm your AI assistant. How can I help you today?",
        timestamp: new Date()
      }
    ]);
    setNextId(2);
    setIsTyping(false);
  };

  return (
    <div className="chatbot-container">
      {/* Header */}
      <div className="chatbot-header">
        <div className="bot-info">
          <div className="bot-avatar">
            <img src={eddiLogo} alt="EDDI Logo" />
          </div>
          <div className="bot-details">
            <h3>AI Assistant</h3>
            <div className="bot-status">
              <div className="status-dot"></div>
              Online
            </div>
          </div>
        </div>
        <div className="header-actions">
          <button onClick={clearChat} className="clear-button" title="Clear chat">
            🗑️
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            <div className="message-content">
              {message.content}
              <div className="timestamp">{formatTime(message.timestamp)}</div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <div className="typing-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input">
        <div className="quick-actions">
          <button onClick={() => sendQuickMessage('Hello')} className="quick-action">👋 Hello</button>
          <button onClick={() => sendQuickMessage('How can you help me?')} className="quick-action">❓ Help</button>
          <button onClick={() => sendQuickMessage('What can you do?')} className="quick-action">⚡ Features</button>
          <button onClick={() => sendQuickMessage('Tell me something interesting')} className="quick-action">💡 Surprise me</button>
        </div>
        <div className="input-container">
          <div className="input-wrapper">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="message-input"
              rows="1"
              maxLength="2000"
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="send-button"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
