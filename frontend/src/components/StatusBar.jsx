import React from 'react';

export default function StatusBar({ status }) {
  return status ? <div className="text-xs text-gray-600 px-2 py-1">{status}</div> : null;
}
