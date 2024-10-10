"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa'; // You can use any icon library

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <motion.div
        onClick={scrollToTop}
        className="fixed bottom-20 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer z-30"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        title="Scroll to Top"
      >
        <FaArrowUp size={24} />
      </motion.div>
    )
  );
};

export default ScrollToTopButton;
