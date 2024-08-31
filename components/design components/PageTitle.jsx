"use client";

import React from 'react';
import ColorFillingText from './utils/ColorFillingText';

const PageTitle = ({ title, gradientColors, duration = 2, repeat = Infinity }) => {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-900">
      <h1 className="text-6xl font-bold">
        <ColorFillingText 
          text={title} 
          gradientColors={gradientColors} 
          duration={duration} 
          repeat={repeat} 
        />
      </h1>
    </div>
  );
};

export default PageTitle;
