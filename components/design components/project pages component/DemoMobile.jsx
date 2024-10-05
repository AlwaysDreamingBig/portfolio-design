"use client";
import React, { useState, useRef } from 'react';

export default function DemoMobile({ title, website, note, demoContent }) {
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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
      {/* Left Section: Text, Website, FYI Note */}
      <div className='flex flex-col space-y-4'>
        <h2 className='text-2xl font-bold'> <span className='text-blue-600'>Video Description: </span>{title}</h2>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
            Visit Website
          </a>
        )}
        <p className='text-sm p-8 rounded-md leading-loose'>
          <strong className='text-purple-600'>FYI:</strong> {note}
        </p>
      </div>

      {/* Right Section: Demo Container with Full-Screen Controls */}
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
