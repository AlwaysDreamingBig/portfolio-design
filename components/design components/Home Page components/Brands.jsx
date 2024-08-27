"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { brands } from '@/assets/constants'; 

const Brands = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-base font-bold text-center mb-12 text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}  // Ensures animation only happens once
        >
          Brands I've Worked With
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}  // Ensures animation only happens once
        >
          {brands.map((brand, index) => (
            <motion.div 
              key={index}
              className="flex items-center justify-center sm:p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src={brand.src} 
                alt={brand.alt} 
                width={100} 
                height={100} 
                className="object-contain h-20 w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
