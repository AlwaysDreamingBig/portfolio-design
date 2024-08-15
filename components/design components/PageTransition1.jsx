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
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 10, filter: "blur(20px)" }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="relative h-full w-full"
      >
        {/* Add a color overlay that animates out */}
        <motion.div
          initial={{ opacity: 1, backgroundColor: "#000" }}
          animate={{ opacity: 0, backgroundColor: "#fff" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
        />
        
        {/* Content of the page */}
        <div className="relative z-20">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;