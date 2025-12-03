import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const ChatBox = ({ currentUser, recipient }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socket = io('http://localhost:5000'); // Adjust the URL as needed

    useEffect(() => {
        socket.emit('joinRoom', { userId: currentUser._id, recipientId: recipient._id });

        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('message');
            socket.disconnect();
        };
    }, [currentUser, recipient, socket]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const messageData = {
                sender: currentUser._id,
                receiver: recipient._id,
                content: newMessage,
                timestamp: new Date(),
            };
            socket.emit('sendMessage', messageData);
            setMessages((prevMessages) => [...prevMessages, messageData]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === currentUser._id ? 'message sent' : 'message received'}>
                        <p>{msg.content}</p>
                        <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="message-form">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="input"
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;