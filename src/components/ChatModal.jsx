import React, { useEffect, useState, useRef } from 'react';

const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Soham's virtual assistant. I can answer any questions about Soham's background, skills, projects, and experience. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // n8n webhook URL
  const webhookUrl = 'https://n8n-production-c38c.up.railway.app/webhook/88679559-8e5d-4a00-ac66-25c7c9305444/chat';

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      // Call n8n webhook with different payload formats
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          chatInput: currentInput,
          message: currentInput,
          query: currentInput,
          text: currentInput,
          sessionId: `chat_${Date.now()}`,
          timestamp: new Date().toISOString()
        })
      });

      let data;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // Handle text response
        const textResponse = await response.text();
        data = { response: textResponse };
      }

      console.log('Webhook response:', data); // Debug log

      // Try multiple possible response formats
      let botMessage = '';
      if (typeof data === 'string') {
        botMessage = data;
      } else if (data.output) {
        botMessage = data.output;
      } else if (data.response) {
        botMessage = data.response;
      } else if (data.message) {
        botMessage = data.message;
      } else if (data.text) {
        botMessage = data.text;
      } else if (data.reply) {
        botMessage = data.reply;
      } else if (data.answer) {
        botMessage = data.answer;
      } else if (Array.isArray(data) && data.length > 0) {
        // Handle array responses
        botMessage = data[0].output || data[0].response || data[0].message || data[0].text || JSON.stringify(data[0]);
      } else {
        // Last resort - stringify the entire response
        botMessage = JSON.stringify(data);
      }

      const botResponse = {
        id: Date.now() + 1,
        text: botMessage || "I received your message but couldn't generate a proper response. Please try rephrasing your question.",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling n8n webhook:', error);
      
      // More specific error handling
      let errorMessage = "I'm having trouble connecting right now. ";
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage += "Please check your internet connection.";
      } else if (error.message.includes('CORS')) {
        errorMessage += "There's a CORS issue with the webhook.";
      } else {
        errorMessage += "Please try again in a moment.";
      }
      
      const errorResponse = {
        id: Date.now() + 1,
        text: errorMessage,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Chat Modal */}
          <div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{
              opacity: 1,
              transform: 'translateY(0px) scale(1)',
              transition: 'all 0.3s ease-out'
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Soham's Assistant</h3>
                    <p className="text-xs opacity-75">Online • Powered by AI</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full hover:bg-white hover:bg-opacity-20 flex items-center justify-center transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px)',
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                      {message.text.split('\n').map((line, i, arr) => {
                        // Check if line is a bullet point
                        const isBullet = line.trim().match(/^[-•*]\s/);
                        const isNumbered = line.trim().match(/^\d+\.\s/);
                        const isHeading = line.trim().match(/^#{1,3}\s/);
                        const isBold = line.trim().match(/^\*\*(.*)\*\*$/);
                        
                        // Remove markdown symbols
                        let cleanLine = line;
                        if (isHeading) {
                          cleanLine = line.replace(/^#{1,3}\s/, '');
                        }
                        if (isBold) {
                          cleanLine = line.replace(/^\*\*/, '').replace(/\*\*$/, '');
                        }
                        
                        return (
                          <React.Fragment key={i}>
                            {isHeading ? (
                              <div className="font-semibold mt-2 mb-1">{cleanLine}</div>
                            ) : isBold ? (
                              <div className="font-semibold">{cleanLine}</div>
                            ) : isBullet ? (
                              <div className="ml-4 my-1">
                                <span className="mr-2">•</span>
                                {line.replace(/^[-•*]\s/, '')}
                              </div>
                            ) : isNumbered ? (
                              <div className="ml-4 my-1">{line}</div>
                            ) : line.trim() === '' ? (
                              <div className="h-2" />
                            ) : (
                              <div className="my-1">{line}</div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-blue-100' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div
                  className="flex justify-start"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px)',
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatModal;
