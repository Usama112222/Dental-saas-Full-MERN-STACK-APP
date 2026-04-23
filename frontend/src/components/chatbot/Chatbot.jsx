import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane, FaRobot, FaUser, FaSpinner } from 'react-icons/fa';
import { faqData, fallbackResponses } from './chatData';
import ChatMessage from './ChatMessage';

const Chatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! 👋 I'm your DentalCare assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages, isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const findBestMatch = (userMessage) => {
        const message = userMessage.toLowerCase();
        
        // Find best matching FAQ
        let bestMatch = null;
        let highestScore = 0;
        
        for (const faq of faqData) {
            let score = 0;
            
            // Check question match
            if (faq.question.toLowerCase().includes(message)) {
                score += 3;
            }
            
            // Check keyword matches
            for (const keyword of faq.keywords) {
                if (message.includes(keyword.toLowerCase())) {
                    score += 1;
                }
            }
            
            if (score > highestScore) {
                highestScore = score;
                bestMatch = faq;
            }
        }
        
        if (highestScore >= 2) {
            return bestMatch.answer;
        }
        
        // Return random fallback response
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;
        
        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        
        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = findBestMatch(inputValue);
            const botMessage = {
                id: messages.length + 2,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const clearChat = () => {
        setMessages([
            {
                id: 1,
                text: "Hello! 👋 I'm your DentalCare assistant. How can I help you today?",
                sender: 'bot',
                timestamp: new Date()
            }
        ]);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-20 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slideUp">
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-3 text-white">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaRobot className="text-xl" />
                        <div>
                            <h3 className="font-semibold">DentalCare Assistant</h3>
                            <p className="text-xs text-white/80">Online • Usually replies instantly</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={clearChat}
                            className="text-white/80 hover:text-white text-sm"
                            title="Clear chat"
                        >
                            Clear
                        </button>
                        <button
                            onClick={onClose}
                            className="text-white/80 hover:text-white"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
                
                {isTyping && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <FaRobot className="text-white text-sm" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                            <FaSpinner className="animate-spin text-sky-500" />
                        </div>
                    </div>
                )}
                
                <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setInputValue("How do I book an appointment?")}
                        className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-full transition"
                    >
                        📅 Book appointment
                    </button>
                    <button
                        onClick={() => setInputValue("What are your clinic hours?")}
                        className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-full transition"
                    >
                        🕐 Clinic hours
                    </button>
                    <button
                        onClick={() => setInputValue("How much does a checkup cost?")}
                        className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-full transition"
                    >
                        💰 Pricing
                    </button>
                    <button
                        onClick={() => setInputValue("How do I cancel my appointment?")}
                        className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-full transition"
                    >
                        ❌ Cancel appointment
                    </button>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your question here..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition disabled:opacity-50"
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Chatbot;