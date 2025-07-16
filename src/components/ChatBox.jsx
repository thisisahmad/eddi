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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

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
      const botMessage = {
        id: nextId + 1,
        type: 'bot',
        content: getBotResponse(message),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setNextId(prev => prev + 2);
    }, 1000 + Math.random() * 1000);
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

  const getBotResponse = (input) => {
    const msg = input.toLowerCase();

    if (msg.includes("$1.2m") || msg.includes("insurance should cover that") || msg.includes("where did you come up")) {
      return (
        <>
          <p><strong>Here’s how I calculated the $1.2M exposure — and why it’s not fully covered by your insurance:</strong></p>
          <p><strong>Your Estimated $1.2M Exposure Breakdown:</strong></p>
          <ul className="response-ul">
            <li><strong>Data Breach Response Costs (Forensics, Notification, Legal):</strong> $400K</li>
            <li><strong>Business Interruption / Downtime (3 days estimated):</strong> $300K</li>
            <li><strong>Regulatory Fines & Penalties (if non-compliant at breach):</strong> $250K</li>
            <li><strong>Potential Class Action or Legal Defense Costs:</strong> $250K</li>
          </ul>
          <p><strong>Why Insurance May Not Fully Cover You:</strong></p>
          <ul className="response-ul">
            <li>🔸 Your current cyber insurance policy (based on typical Nevada mid-market terms) covers incident response and legal defense — but requires documented proof of “reasonable security” practices (Safe Harbor compliance) to defend claims fully.</li>
            <li>🔸 Your compliance score is <strong>68%</strong>. That’s below the defensibility threshold for most carriers. If there’s a gap — for example, unpatched software or dormant accounts left active — your claim could be reduced or denied.</li>
          </ul>
          <p><strong>This $1.2M is your estimated uninsured or contestable exposure today.</strong></p>
          <p>Would you like to:</p>
          <ul className="response-ul">
            <li>✅ See the specific gaps?</li>
            <li>✅ View a 90-day remediation plan?</li>
            <li>✅ Understand how to reduce this risk?</li>
          </ul>
        </>
      );
    } else if (msg.includes("show me the gaps")) {
      return (
        <>
          <p><strong>Absolutely. Here’s your current risk breakdown by control gap:</strong></p>
          <ul className="response-ul">
            <li><strong>Users:</strong> 48 Dormant Accounts Still Active — High Risk. These are doors left open for attackers.</li>
            <li><strong>Applications:</strong> 9 Critical Applications Missing Patches — High Risk. Vulnerabilities may be exploited.</li>
            <li><strong>Incident Response:</strong> No Documented Plan / No Tabletop Exercise — Medium Risk. Regulators expect readiness.</li>
          </ul>
          <p>⚠️ Additional contributing factors:</p>
          <ul className="response-ul">
            <li>MFA not consistently enforced on admin accounts</li>
            <li>Audit logs enabled but not monitored</li>
            <li>No inventory of sensitive data aligned to access rights</li>
          </ul>
        </>
      );
    } else if (msg.includes("remediation")) {
      return (
        <>
          <p><strong>📅 Remediation Timeline: 90-Day Plan</strong></p>
          <ul className="response-ul">
            <li>Week 1-2: Disable 48 dormant accounts — Reduces user risk by 20%</li>
            <li>Week 3-4: Enforce MFA on admin accounts — Reduces user risk by 10%</li>
            <li>Week 5-6: Patch 9 critical apps — Reduces app risk by 25%</li>
            <li>Week 7-8: Update incident response plan — Strengthens compliance</li>
            <li>Week 9-10: Monitor audit logs — Improves monitoring</li>
            <li>Week 11-12: Complete data inventory — Reduces data risk by 15%</li>
          </ul>
        </>
      );
    } else if (msg.includes("verify")) {
      return (
        <>
          <p><strong>✅ How Can You Verify This is True?</strong></p>
          <p>Ask your IT team for:</p>
          <ul className="response-ul">
            <li>Report of active accounts — Look for dormant ones</li>
            <li>List of unpatched apps</li>
            <li>Confirmation of MFA enforcement on admin accounts</li>
            <li>Incident Response Plan document (if available)</li>
          </ul>
          <p><strong>All data shown is pulled from:</strong></p>
          <ul className="response-ul">
            <li>Active Directory / Azure AD</li>
            <li>Endpoint tools like Intune or Belarc</li>
            <li>Patch management logs</li>
            <li>Security audit logs</li>
          </ul>
        </>
      );
    }

    return "Thanks for your message! Let me look into that for you.";
  };

  return (
    <div className="chatbot-container">
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

      <div className="chat-input">
        <div className="quick-actions">
          <button onClick={() => sendQuickMessage('Where did $1.2M come from?')} className="quick-action">💸 $1.2M Exposure</button>
          <button onClick={() => sendQuickMessage('Show me the gaps')} className="quick-action">🛠️ Gaps</button>
          <button onClick={() => sendQuickMessage('Remediation timeline')} className="quick-action">📆 Timeline</button>
          <button onClick={() => sendQuickMessage('How do I verify this?')} className="quick-action">📋 Verify</button>
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
