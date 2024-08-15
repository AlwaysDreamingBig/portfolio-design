"use client";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: "100vw", scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: "-100vw", scale: 0.8, rotateY: 180 }}
        transition={{
          duration: 1.2,
          ease: [0.6, 0.01, -0.05, 0.95],
          opacity: { duration: 0.8 },
        }}
        className="relative h-full w-full overflow-hidden"
      >
        {/* Background Layer 1: Diagonal Sliding Panel */}
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 z-10 transform skew-x-12"
        />

        {/* Background Layer 2: Fading Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-red-500 rounded-full z-5 transform -translate-x-1/2 -translate-y-1/2"
        />

        {/* Content Layer */}
        <div className="relative z-20">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
