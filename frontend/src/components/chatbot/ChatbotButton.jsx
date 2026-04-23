import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import Chatbot from './Chatbot';

const ChatbotButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full p-4 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
                {isOpen ? (
                    <FaTimes className="text-2xl" />
                ) : (
                    <>
                        <FaCommentDots className="text-2xl" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></span>
                    </>
                )}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Need help? Ask me!
                </span>
            </button>

            {/* Chat Window */}
            <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default ChatbotButton;