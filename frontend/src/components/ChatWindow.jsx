import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import StatusBar from './StatusBar';
import ConfigPanel from './ConfigPanel';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('');
  const [schema, setSchema] = useState('users');
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    setStatus('Processing...');
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, schemaKey: schema }),
    });
    const data = await res.json();
    setMessages([
      ...messages,
      { user: true, text: input },
      { user: false, text: data.result || data.warning || data.error }
    ]);
    setStatus('');
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto border shadow-lg bg-white">
      <ConfigPanel schema={schema} setSchema={setSchema} />
      <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} user={msg.user} text={msg.text} />
        ))}
      </div>
      <StatusBar status={status} />
      <div className="flex p-2 border-t">
        <input
          className="flex-grow border rounded px-3 py-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => (e.key === 'Enter' ? sendMessage() : null)}
          placeholder="Ask your database anything..."
        />
        <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Send</button>
      </div>
    </div>
  );
}
