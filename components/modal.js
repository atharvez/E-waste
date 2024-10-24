// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, totalWaste, hazards }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
        <h2 className="text-xl font-semibold mb-4">E-Waste Calculation Result</h2>
        <p className="mb-2">Total E-Waste: <strong>{totalWaste.toFixed(2)} kg</strong></p>
        <h3 className="font-medium mb-2">Hazards:</h3>
        <ul className="list-disc ml-5 mb-4">
          {hazards.map((hazard, index) => (
            <li key={index}>{hazard}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            onClose(); 
            window.location.reload(); 
          }}
          className="w-full h-12 bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
