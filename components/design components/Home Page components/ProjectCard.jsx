"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectCard = ({ backgroundImage, logoImage, title, tag, description, link }) => {
  return (
    <motion.div
      className="relative flex items-center justify-between p-10 text-white rounded-lg shadow-lg overflow-hidden h-[100vh] bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage.src})`, // Ensure the image URL is correctly referenced
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Content */}
      <div className="relative flex flex-col w-1/3 space-x-6 bg-red-300 h-full z-10">
        {/* Logo */}
        <div className="flex-shrink-0 w-32 h-32 ml-8 mt-8">
          <Image
            src={logoImage}
            alt={`${title} Logo`}
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between flex-grow space-y-10 px-10 py-20 bg-black">
          <div className="space-y-10">
            <h3 className="text-4xl font-semibold mb-2">{title}</h3>
            <span className="text-sm text-yellow-400 font-medium">{tag}</span>
            <p className="mt-2">{description}</p>
          </div>
          
          {/* View Case Study Button */}
          <a
            href={link}
            className="mt-auto inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition max-w-48"
          >
            View Case Study
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
