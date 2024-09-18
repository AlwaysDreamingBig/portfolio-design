"use client";
import React, { useState, useRef } from 'react';

export default function DemoLaptop({ title, demoContent }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const demoRef = useRef(null);

  // Function to enter full screen
  const handleFullScreen = () => {
    setIsFullScreen(true);
    if (demoRef.current.requestFullscreen) {
      demoRef.current.requestFullscreen();
    }
  };

  // Function to exit full screen
  const handleExitFullScreen = () => {
    setIsFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className='p-8 lg:p-32'>
      {/* Title */}
      <h2 className='text-3xl font-bold mb-4'>{title}</h2>

      {/* Demo Section */}
      <div className={`relative ${isFullScreen ? 'fixed inset-0 bg-black z-50' : ''}`} ref={demoRef}>
        <div className={`${isFullScreen ? 'h-screen w-screen' : 'h-full w-full'} bg-gray-900 flex items-center justify-center`}>
          {demoContent}
        </div>

        {/* Full-Screen Control Buttons */}
        <div className='absolute top-4 right-4 flex space-x-2'>
          {!isFullScreen && (
            <button
              onClick={handleFullScreen}
              className='bg-blue-500 text-white p-2 rounded-md'
            >
              Expand
            </button>
          )}
          {isFullScreen && (
            <button
              onClick={handleExitFullScreen}
              className='bg-red-500 text-white p-2 rounded-md'
            >
              Exit Full Screen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
