"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ texts, speed = 100, cursor = true, loop = true, loopCount = Infinity }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [currentLoop, setCurrentLoop] = useState(0);

  const currentText = texts[textIndex];

  useEffect(() => {
    if (index < currentText.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (index === currentText.length && !isDeleting && (loop || currentLoop < loopCount)) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, speed * 10);
      return () => clearTimeout(timeout);
    } else if (isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed / 2);

      if (index === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        if (textIndex === texts.length - 1) {
          setCurrentLoop((prev) => prev + 1);
        }
      }
      return () => clearTimeout(timeout);
    }
  }, [index, isDeleting, currentText, speed, loop, loopCount, textIndex, currentLoop, texts.length]); // Included texts.length here to resolve build error

  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {cursor && <span className="animate-blink">|</span>}
    </motion.span>
  );
};

export default TypingText;
