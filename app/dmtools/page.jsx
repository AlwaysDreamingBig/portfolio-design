"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from 'react';

const DmTools = () => {
  const [projectStatus, setProjectStatus] = useState('inProgress');

  // Simulating a scenario where the project remains in progress indefinitely
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("The project is still in progress..."); // Just a log to indicate the ongoing process
    }, 5000); // This can be adjusted or removed as needed

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-[70ch] text-center font-ibm-plex-mono">
      <div>
        <h1 className="text-5xl font-bold">Project In Progress</h1>
        <p className="text-2xl mt-4">This project is still in progress, so there is no case study available at the moment.</p>
      </div>
    </div>
  );
}

export default DmTools;
