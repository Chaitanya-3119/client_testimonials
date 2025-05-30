import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you with any questions about Makonis Software. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatPopupRef = useRef(null);
  const chatIconRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Animation effects
  useEffect(() => {
    if (isOpen && chatPopupRef.current) {
      gsap.fromTo(chatPopupRef.current, 
        {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [isOpen]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Pulse animation for chat icon
  useEffect(() => {
    if (chatIconRef.current) {
      gsap.to(chatIconRef.current, {
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: getBotResponse(inputMessage),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive software solutions including IoT, AI, Web Development, Mobile Apps, Analytics, Testing, and Embedded Systems. Which service interests you most?";
    } else if (message.includes('contact') || message.includes('reach')) {
      return "You can reach us through our Contact page, call us, or email us directly. We're here to help with your project needs!";
    } else if (message.includes('price') || message.includes('cost')) {
      return "Our pricing varies based on project requirements. I'd recommend scheduling a consultation to discuss your specific needs and get a customized quote.";
    } else if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Makonis Software. What would you like to know?";
    } else if (message.includes('iot')) {
      return "Our IoT solutions help businesses connect and manage smart devices, collect data, and automate processes. We can help you build scalable IoT ecosystems!";
    } else if (message.includes('ai') || message.includes('artificial intelligence')) {
      return "We develop AI solutions including machine learning models, natural language processing, computer vision, and intelligent automation systems.";
    } else {
      return "That's a great question! For detailed information about that topic, I'd recommend speaking with our team directly. You can contact us through our Contact page or continue asking me questions!";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div
          ref={chatPopupRef}
          className="position-fixed"
          style={{
            bottom: '100px',
            right: '20px',
            width: '350px',
            height: '500px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            zIndex: 9998,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            className="p-3 text-white d-flex align-items-center justify-content-between"
            style={{
              background: 'linear-gradient(135deg, #002956 0%, #00a0e9 100%)',
              borderRadius: '20px 20px 0 0'
            }}
          >
            <div className="d-flex align-items-center">
              <div
                className="me-2"
                style={{
                  width: '10px',
                  height: '10px',
                  background: '#00ff88',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}
              />
              <span className="fw-bold">Makonis Assistant</span>
            </div>
            <button
              onClick={toggleChat}
              className="btn btn-sm text-white"
              style={{ background: 'none', border: 'none' }}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-grow-1 p-3"
            style={{
              overflowY: 'auto',
              maxHeight: '350px'
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className="px-3 py-2"
                  style={{
                    maxWidth: '80%',
                    borderRadius: message.sender === 'user' ? '15px 15px 5px 15px' : '15px 15px 15px 5px',
                    background: message.sender === 'user' 
                      ? 'linear-gradient(135deg, #00a0e9 0%, #0056b3 100%)'
                      : '#f8f9fa',
                    color: message.sender === 'user' ? 'white' : '#333',
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-top">
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              />
              <button
                onClick={handleSendMessage}
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, #00a0e9 0%, #0056b3 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Icon */}
      <div
        ref={chatIconRef}
        onClick={toggleChat}
        className="position-fixed d-flex align-items-center justify-content-center"
        style={{
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #00a0e9 0%, #0056b3 100%)',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 8px 25px rgba(0, 160, 233, 0.4)',
          transition: 'all 0.3s ease',
          border: '3px solid rgba(255, 255, 255, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 12px 35px rgba(0, 160, 233, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(0, 160, 233, 0.4)';
        }}
      >
        <i 
          className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-white`}
          style={{ fontSize: '1.5rem' }}
        />
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
