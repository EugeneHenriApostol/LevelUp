import React, { useState } from 'react';

export default function TestModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded">
            <h1 className="text-xl font-bold mb-4">Modal Works!</h1>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
