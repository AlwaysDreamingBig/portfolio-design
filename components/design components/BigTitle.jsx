"use client";
// components/BigTitle.js
import React from 'react';

const BigTitle = ({ children, className = '' }) => {
  return (
    <h1 className={`text-6xl md:text-8xl lg:text-[200px] font-bold text-center ${className}`}>
      {children}
    </h1>
  );
};

export default BigTitle;
