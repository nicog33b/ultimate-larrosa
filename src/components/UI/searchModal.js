import React from 'react';
import { IoClose } from 'react-icons/io5';

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-0 right-0 p-4">
          <IoClose className="text-3xl" />
        </button>
        <form className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;