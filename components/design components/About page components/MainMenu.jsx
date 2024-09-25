// MainMenu.js
import React from 'react';

const MainMenu = ({ onResumeClick, onAboutClick, activeSection }) => {
  return (
    <div className='flex flex-col items-center space-y-4 my-10'>
      <h4 className='text-2xl font-semibold'> Menu</h4>
      <button
        className={`p-4 rounded-lg transition ${
          activeSection === 'resumeMenu' ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        onClick={onResumeClick}
      >
        My Resume
      </button>
      <button
        className={`p-4 rounded-lg transition ${
          activeSection === 'aboutMeMenu' ? 'bg-black text-white' : 'bg-black text-white hover:bg-gray-800'
        }`}
        onClick={onAboutClick}
      >
        About Me
      </button>
    </div>
  );
};

export default MainMenu;
