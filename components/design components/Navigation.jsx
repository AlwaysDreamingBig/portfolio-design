"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { nav } from '@/assets/constants';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

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
          <div className="flex flex-col p-4 space-y-14 mt-8 items-center">
            {nav.map((item) => (
              <Link key={item.id} href={item.href} onClick={() => setIsOpen(false)} className={`flex items-center text-gray-700 text-2xl hover:text-blue-500 transition-colors duration-200 ${pathName === item.href ? 'text-blue-500 font-semibold' : ''}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
