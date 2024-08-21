"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://facebook.com', icon: <FaFacebookF /> },
  { href: 'https://twitter.com', icon: <FaTwitter /> },
  { href: 'https://linkedin.com', icon: <FaLinkedinIn /> },
  { href: 'https://github.com', icon: <FaGithub /> }
];

const SocialIcons = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-wrap justify-center space-x-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 border-blue-500 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
            whileTap={{ scale: 0.9 }}  // Press animation
          >
            <div className="text-lg">{social.icon}</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
