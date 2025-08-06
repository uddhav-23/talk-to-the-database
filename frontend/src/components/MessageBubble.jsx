import React from 'react';

export default function MessageBubble({ user, text }) {
  return (
    <div className={`mb-2 flex ${user ? 'justify-end' : 'justify-start'}`}>
      <div className={`px-4 py-2 rounded-lg ${user ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
        {text}
      </div>
    </div>
  );
}
