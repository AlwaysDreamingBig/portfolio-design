import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';

function Modal({ isOpen, onClose, icon: Icon, title, description }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white dark:bg-neutral-900 shadow-lg rounded-lg max-w-md w-full">
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex justify-center text-4xl text-blue-400 mb-4">
          {Icon}
        </div>
        <h3 className="text-2xl font-bold text-center text-black font-serif mb-4">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center">{description}</p>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
