"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { bugsbunny } from '@/assets/images';
import Section from '@/components/design components/Section';
import SocialIcons from '@/components/design components/Socials';
import Brands from '@/components/design components/Home Page components/Brands';
import ProjectCardContainer from '@/components/design components/Home Page components/ProjectCardContainer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">

      {/* Hero Section */}
      <Section className="flex flex-col items-center md:items-start md:justify-start h-screen text-white bg-transparent relative md:mt-20 md:mb-36 mb-36">
        
        {/* Text Content */} 
        <div className='flex flex-col z-10 text-center md:text-start md:ml-20 md:w-1/2 md:mt-24 mt-[450px]'>
          
          {/* Main Headings with Floating Animation */}
          <motion.h1 
            className="text-6xl font-bold mb-4"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Hello, I'm 
          </motion.h1>
          
          <motion.h1 
            className="text-6xl font-bold mb-4 text-blue-500"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Auriol NGUELI
          </motion.h1>

          {/* Subheading with Animation */}
          <motion.div 
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          >
            <p>A Creative Software Engineer</p>
            <hr className='w-[100px] my-8'/>
            <p className='text-gray-500'>
              I do Embedded development and web development. Currently, I am a flow meter software developer at 
              <span className='text-yellow-600'> Siemens</span>
            </p>
          </motion.div>

          {/* Call-to-Action Button with Hover Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}
          >
            <div className='mt-4 flex sm:flex-row flex-col items-center justify-center'>
                <Link href="/work" className="px-8 py-2 border border-blue-500 text-white font-semibold rounded-2xl shadow-md hover:text-blue-500 transition">
                    Download CV
                </Link>

                <SocialIcons />
            </div>

          </motion.div>
        </div>

        {/* Image Section */}
        <div className='absolute md:right-[15%] z-0'>
            {/* Rotating Circle */}
            <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-spin-slow" style={{ borderTopColor: 'transparent' }} />
            
          <Link href="/">
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden flex items-center justify-center group">
              <Image 
                src={bugsbunny} 
                alt="My Logo" 
                width={300} 
                height={300} 
                priority={true}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-5xl">
                ʕ •ᴥ•ʔ
              </div>
            </div>
          </Link>
        </div>

        {/** Brands */}
        <div className='sm:mt-20'>
          <Brands />
        </div>
      </Section>

      <div className='m-24'/>

      <div className='sm:mt-[420px] mt-[700px] '>
        <ProjectCardContainer />
      </div>
    </div>
  );
};

export default HomePage;
