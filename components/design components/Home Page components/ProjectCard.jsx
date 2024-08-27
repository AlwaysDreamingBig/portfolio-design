"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ backgroundImage, logoImage, title, tag, description, link, titleClassName }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-between sm:p-10 text-white rounded-lg shadow-lg overflow-hidden h-[100vh] opacity-80 hover:opacity-100 transition duration-500"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image Wrapper */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${isHovered ? 'opacity-0 sm:opacity-100' : 'opacity-100'}`}
      >
        <Image
          src={backgroundImage.src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`relative  flex flex-col md:w-2/3 lg:w-2/3 xl:w-1/3 w-full sm:space-x-6 bg-black/20 h-full z-10 rounded-lg transition-opacity duration-500 sm:opacity-100 ${
          isHovered ? 'opacity-100 sm:opacity-100' : 'opacity-0 sm:opacity-100'
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 w-32 h-32 ml-8 mt-8">
          <Image
            src={logoImage}
            alt={`${title} Logo`}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between flex-grow space-y-10 px-10 py-20 bg-gray-800 lg:bg-transparent">
          <div className="space-y-10">
            <h3 className={`text-4xl font-bold mb-2 font-sans lg:bg-gray-800 lg:p-4 ${titleClassName ? titleClassName : 'text-cyan-500 xl:text-black'}`}>{title}</h3>
            <span className="text-sm text-yellow-400 font-medium lg:bg-gray-800 lg:p-4">{tag}</span>
            <p className="mt-2 lg:bg-gray-800 lg:p-4">{description}</p>
          </div>
          
          {/* View Case Study Button */}
          <a
            href={link}
            className="mt-auto inline-block px-6 py-2 bg-black/60 border border-white text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition max-w-52"
          >
            View Case Study
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
