"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { nav } from '@/assets/constants';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const pathName = usePathname();

  // Toggle body scrolling when the menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll'); // Cleanup in case component unmounts
    };
  }, [isOpen]);

  // Show the floating button after the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Set the scroll threshold to show the button
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
        {nav.map((item) => (
          <Link key={item.id} href={item.href} className="relative group">
            <div
              className={`flex items-center ${
                pathName === item.href ? 'text-blue-500 font-semibold' : 'text-white/80'
              } transition-colors duration-200 group-hover:text-blue-400 sm:text-base lg:text-lg 3xl:text-xl ${item.title === 'Contact' ? 'bg-blue-500 px-3 py-1 rounded-lg text-black font-bold group-hover:text-white' : ''}`}
            >
              {item.title}
              {pathName === item.href && (
                <span className="absolute inset-x-0 bottom-0 border-b-2 border-blue-500"></span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex items-center">
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="text-gray-700 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XIcon className="h-10 w-10 text-blue-500" />
          ) : (
            <MenuIcon className="h-10 w-10 text-blue-500" />
          )}
        </button>

        {/* Mobile Menu Items */}
        <div className={`fixed inset-0 top-32 max-h-screen bg-black/80 border-t border-gray-200 z-50 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
          <div className="flex flex-col p-4 space-y-14 mt-16 items-center">
            {nav.map((item) => (
              <Link 
                key={item.id} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className={`flex items-center text-2xl transition-colors duration-200 ${
                  pathName === item.href 
                    ? 'text-blue-500 font-semibold'  // Highlight in blue if current page
                    : 'text-gray-300 hover:text-blue-500'  // Otherwise, show as gray and allow hover to blue
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Button */}
      {showFloatingButton && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-500 bg-opacity-50 text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-opacity-70 transition"
        >
          {isOpen ? (
            <XIcon className="h-8 w-8" />
          ) : (
            <MenuIcon className="h-8 w-8" />
          )}
        </button>
      )}

      {/* Background Overlay */}
      {isOpen && (
        <>
          {/* Overlay background */}
          <div className="fixed inset-0 bg-black bg-opacity-80 z-40"></div>

          {/* Loading Spinner and Message */}
          <div className="fixed inset-0 flex flex-col items-center justify-center z-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-opacity-75 mb-10"></div>
            <p className="text-white text-xl font-semibold italic"><span className='text-green-600'>Loading...</span> <span className='text-red-600'>Please make</span> <span className='text-yellow-400'>a selection</span></p>
          </div>
        </>
      )}

      {/* Horizontal Navigation Bar for Large Screens */}
      {isOpen && (
        <div className="hidden lg:flex flex-row items-center bg-gray-900 bg-opacity-80 px-8 py-4 rounded-lg fixed top-32 left-1/2 transform -translate-x-1/2 z-50 w-auto space-x-8">
          {nav.map((item) => (
            <Link 
              key={item.id} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center text-lg transition-colors duration-200 ${
                pathName === item.href
                  ? 'text-blue-500 font-semibold'
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
