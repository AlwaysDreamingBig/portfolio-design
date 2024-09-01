"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TextHoverEffect = ({
  text,
  hoverColor = "blue",
  normalColor = "black",
  effectType = "all" // Can be 'vowels', 'consonants', or 'all'
}) => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const textRef = useRef();

  const isVowel = (char) => 'aeiouAEIOU'.includes(char);
  const isConsonant = (char) => /[a-zA-Z]/.test(char) && !isVowel(char);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const index = Math.floor((x / rect.width) * text.length);
      setHoverIndex(index);
    };

    const handleMouseLeave = () => {
      setHoverIndex(-1);
    };

    const textElement = textRef.current;
    textElement.addEventListener("mousemove", handleMouseMove);
    textElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textElement.removeEventListener("mousemove", handleMouseMove);
      textElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [text.length]);

  return (
    <div ref={textRef} className="relative inline-block">
      {text.split("").map((char, index) => {
        const isHovered = index === hoverIndex;
        const shouldApplyEffect = 
          (effectType === 'vowels' && isVowel(char)) ||
          (effectType === 'consonants' && isConsonant(char)) ||
          effectType === 'all';

        return (
          <motion.span
            key={index}
            style={{ color: shouldApplyEffect && isHovered ? hoverColor : normalColor }}
            className="transition-colors duration-300"
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default TextHoverEffect;
