import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { bugsbunny } from '@/assets/images';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="px-28 py-2 mb-10">
      <div className="mt-4 flex justify-between items-center">
        {/** Logo */}
        <Link href="/">
          <div className="relative w-[90px] h-[90px] rounded-full border-2 border-green-600 bg-blue-500 overflow-hidden flex items-center justify-center group">
            <Image 
              src={bugsbunny} 
              alt="My Logo" 
              width={40} 
              height={40} 
              priority={true}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            (つ◉益◉)
            </div>
          </div>
        </Link>

        {/** Navigation bar*/}
        <div>
            <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
