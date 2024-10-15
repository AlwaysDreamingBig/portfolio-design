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
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';
import DownloadButton from '@/components/design components/DownloadButton';
import { profile1, profile2, profile3 } from '@/assets/images';
import { Spotlight } from '@/components/ui/spotlight';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <ScrollToTopButton />

      {/* Hero Section */}
      <Section className="flex flex-col items-center lg:items-start lg:justify-start h-screen text-white bg-transparent relative md:mt-20 lg:mb-36 mb-36">
        
        {/* Text Content */} 
        <div className='flex flex-col z-10 text-center lg:text-start lg:ml-20 lg:w-1/2 lg:mt-24 mt-[450px] md:mt-[500px]'>
          
          {/* Main Headings with Floating Animation */}
          <motion.h1 
            className="text-6xl font-bold mb-4"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Hello, I&apos;m 
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
            <div className='mt-4 flex sm:flex-row flex-col lg:flex-col xl:flex-row items-center justify-center'>
                <DownloadButton fileUrl={ 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-90b70.appspot.com/o/CV_Auriol_NGUELI.pdf?alt=media&token=0c258efd-9b03-47c7-8d4b-89fb7090f959'}/>

                <SocialIcons />
            </div>

          </motion.div>
        </div>

        {/* Image Section */}
        <div className='absolute lg:right-[10%] xl:right-[15%] z-0 mt-16 md:mt-0 lg:mt-10'>
            {/* Rotating Circle */}
            <div className="absolute w-full h-full border-4 border-blue-500 rounded-full animate-spin-slow" style={{ borderTopColor: 'transparent' }} />
            
          <Link href="/">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden flex items-center justify-center group">
              <Image 
                src={profile1} 
                alt="My Logo" 
                width={400} 
                height={400} 
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
        <div className='sm:mt-20 lg:ml-16'>
          <Brands />
        </div>
      </Section>

      <div className='m-24'/>

      <div className='sm:mt-[420px] mt-[700px] lg:mt-[120px] '>
        <ProjectCardContainer />
      </div>
    </div>
  );
};

export default HomePage;
