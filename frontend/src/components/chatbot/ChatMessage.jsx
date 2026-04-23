import React from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';

const ChatMessage = ({ message }) => {
    const isBot = message.sender === 'bot';
    
    return (
        <div className={`flex gap-3 mb-4 ${isBot ? 'justify-start' : 'justify-end'}`}>
            {isBot && (
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-white text-sm" />
                </div>
            )}
            
            <div className={`max-w-[80%] ${isBot ? 'order-2' : 'order-1'}`}>
                <div className={`rounded-2xl px-4 py-2 ${
                    isBot 
                        ? 'bg-white border border-gray-200 rounded-tl-none' 
                        : 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-tr-none'
                }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString()}
                </p>
            </div>
            
            {!isBot && (
                <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 order-2">
                    <FaUser className="text-white text-sm" />
                </div>
            )}
        </div>
    );
};

export default ChatMessage;