"use client";

import React, { useState } from 'react';
import PreviewCard from './PreviewCard';
import FullView from './FullView';
import MainMenu from './MainMenu';
import AboutMenu from './AboutMenu';
import ResumeMenu from './ResumeMenu';

const AboutPage = () => {
  const [visibleSection, setVisibleSection] = useState('mainMenu');
  const [selectedPreview, setSelectedPreview] = useState(null);
  const [isFullViewVisible, setFullViewVisible] = useState(false);
  const [previousSection, setPreviousSection] = useState(null);
  const [isSideDivVisible, setSideDivVisible] = useState(false); // New state for side div

  const handlePreviewSelection = (preview) => {
    setSelectedPreview(preview);
    setSideDivVisible(false);
  };

  const handlePreviewClick = () => {
    setPreviousSection(visibleSection);
    //setFullViewVisible(true);
    //setVisibleSection(null);
  };

  const handleBackClick = () => {
    if (isFullViewVisible) {
      setFullViewVisible(false);
      setVisibleSection(previousSection);
      setSelectedPreview(null);
    } else if (visibleSection === 'resumeMenu' || visibleSection === 'aboutMeMenu') {
      setVisibleSection('mainMenu');
    }
  };

  const handleResumeClick = () => {
    setVisibleSection('resumeMenu');
  };

  const handleAboutClick = () => {
    setVisibleSection('aboutMeMenu');
  };

  const toggleSideDiv = () => {
    setSideDivVisible((prev) => !prev); // Toggle visibility
  };

  console.log(isFullViewVisible)
  return (
    <div className='flex flex-row items-center justify-center py-36 lg:space-x-16 relative min-h-screen'>
      {/* Main Menu */}
      {!isFullViewVisible && visibleSection === 'mainMenu' && (
        <div className='bg-red-400 w-full'>
          <MainMenu
            onResumeClick={handleResumeClick}
            onAboutClick={handleAboutClick}
            activeSection={visibleSection}
          />
        </div>
      )}

      {!isFullViewVisible && (visibleSection === 'resumeMenu' || visibleSection === 'aboutMeMenu') && (
        <div className={`w-full flex justify-center lg:space-x-10 mt-20 ${isSideDivVisible ? 'hidden' : ''}`}>
          {/* Resume Menu */}
          {visibleSection === 'resumeMenu' && (
            <div className='lg:block hidden'>
              <ResumeMenu
                onPreviewSelect={handlePreviewSelection}
                selectedPreview={selectedPreview}
              />
            </div>
          )}

          {/* About Me Menu */}
          {visibleSection === 'aboutMeMenu' && (
            <div className='lg:block hidden'>
              <AboutMenu
                onPreviewSelect={handlePreviewSelection}
                selectedPreview={selectedPreview}
              />
            </div>
          )}

          {/* Preview Card */}
          {!isFullViewVisible && (visibleSection === 'resumeMenu' || visibleSection === 'aboutMeMenu') && (
            <div className='bg-blue-300 w-full lg:w-2/3 min-h-[70vh] flex flex-col lg:mx-0 sm:mx-10 mx-4'>
              <div className='flex-grow'>
                {selectedPreview && (
                  <PreviewCard title={selectedPreview} onClick={handlePreviewClick} />
                )}
              </div>
            </div>
          )}
        </div>
      )}

      
      {/* Full View Card */}
      {isFullViewVisible && (
        <div className='bg-yellow-400 w-full min-h-[70vh] flex items-center justify-center'>
          <FullView />
        </div>
      )}

      {/* Side Div Menu*/}
      {isSideDivVisible && (
        <div>
          {/**Background */}
          <div className="fixed inset-0 flex sm:w-1/2 items-center justify-center bg-red-50 bg-opacity-75 z-20 gap-2">
            <div className="">
              <div className="w-16 h-16 border-4 border-t-red-500 border-blue-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-white">Waiting For The Choice...</p>
          </div>

          <div className='absolute right-0 top-0 sm:w-1/2 h-screen bg-black/90 shadow-lg z-30 p-20' >
                {/* Resume Menu */}
            {!isFullViewVisible && visibleSection === 'resumeMenu' && (
              <ResumeMenu
                onPreviewSelect={handlePreviewSelection}
                selectedPreview={selectedPreview}
              />
            )}

            {/* About Me Menu */}
            {!isFullViewVisible && visibleSection === 'aboutMeMenu' && (
              <AboutMenu
                onPreviewSelect={handlePreviewSelection}
                selectedPreview={selectedPreview}
              />
            )}
          </div>
        </div>

      )}

      {/* Floating Button */}
      {!isFullViewVisible && (visibleSection === 'resumeMenu' || visibleSection === 'aboutMeMenu') && (
        <button
          className='fixed right-5 bottom-5 bg-blue-500 text-white p-3 rounded-full shadow-lg lg:hidden block z-50'
          onClick={toggleSideDiv}
        >
          {isSideDivVisible ? 'Hide' : 'Show'} Menu
        </button>
      )}

      {/* Back button */}
      {(visibleSection !== 'mainMenu' || isFullViewVisible) && (
        <button
          className='absolute sm:top-[10%] top-[6%] right-[10%] bg-red-700 px-6 py-2 rounded-lg hover:bg-red-600'
          onClick={handleBackClick}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default AboutPage;
