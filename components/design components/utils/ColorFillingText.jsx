"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ColorFillingText = ({ text, gradientColors, duration = 2, repeat = Infinity, className = "" }) => {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      initial={{ backgroundPosition: '-100% 0' }}
      animate={{ backgroundPosition: '0% 0' }}
      transition={{ 
        duration, 
        ease: 'easeInOut', 
        repeat,  // This allows the animation to repeat
        repeatType: 'mirror'  // 'mirror' makes the animation reverse after each iteration
      }}
      style={{
        background: `linear-gradient(90deg, ${gradientColors.join(', ')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '200%',
      }}
    >
      {text}
    </motion.span>
  );
};

export default ColorFillingText;
