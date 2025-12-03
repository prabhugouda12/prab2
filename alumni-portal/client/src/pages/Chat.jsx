import React, { useEffect, useState } from 'react';
import ChatBox from '../components/ChatBox';
import { useAuth } from '../hooks/useAuth';

const Chat = () => {
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Fetch messages from the server
        const fetchMessages = async () => {
            const response = await fetch('/api/messages');
            const data = await response.json();
            setMessages(data);
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ content: newMessage, receiver: user.id })
            });

            if (response.ok) {
                const message = await response.json();
                setMessages((prevMessages) => [...prevMessages, message]);
                setNewMessage('');
            }
        }
    };

    return (
        <div className="chat-container">
            <h1 className="text-2xl font-bold mb-4">Chat</h1>
            <div className="messages-list">
                {messages.map((msg) => (
                    <ChatBox key={msg._id} message={msg} />
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="border p-2 w-full"
                />
                <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;