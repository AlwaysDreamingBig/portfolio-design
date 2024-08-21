import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { bugsbunny } from '@/assets/images';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="px-8 sm:px-14 md:px-20 lg:px-24 xl:px-36 py-2 mb-10">
      <div className="mt-10 flex justify-between items-center">
        {/**Name */}
        <Link href={'/'}>
          <div>
            <p className='text-3xl font-bold sm:flex hidden text-white'> NGUELI Adr<span className='text-blue-500'>i</span>e<span className='text-blue-500'>l.</span> </p>
            <p className='text-3xl font-bold sm:hidden text-white'> AN </p>
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
