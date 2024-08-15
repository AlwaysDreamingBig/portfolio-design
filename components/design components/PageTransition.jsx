"use client";
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}  // Start off transparent and slightly shifted down
        animate={{ opacity: 1, y: 0 }}  // Animate to fully visible and in place
        exit={{ opacity: 0, y: -20 }}   // Animate out by fading and shifting up
        transition={{ duration: 0.5, ease: "easeInOut" }}  // Adjust timing as needed
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;