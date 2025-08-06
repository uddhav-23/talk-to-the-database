import React from 'react';

export default function ConfigPanel({ schema, setSchema }) {
  return (
    <div className="p-2 border-b bg-gray-50 flex items-center">
      <label className="mr-2 font-semibold text-sm">Schema:</label>
      <select
        value={schema}
        onChange={e => setSchema(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="users">Users</option>
        <option value="products">Products</option>
        <option value="orders">Orders</option>
      </select>
      {/* Add dark mode, export, or other config here */}
    </div>
  );
}
