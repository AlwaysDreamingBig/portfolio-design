"use client";
import React, { useState } from 'react';
import cn from 'classnames'; // Optional for conditional class handling
import Modal from '../utils/Modal';

// Improvement Card (Bento Grid Item)
function ImprovementCard({ icon: Icon, title, description }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div 
        className={cn(
          "relative p-6 bg-white dark:bg-neutral-900 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl",
          "flex flex-col justify-between space-y-4 cursor-pointer"
        )}
        onClick={openModal}
      >
        <div className="flex justify-center text-4xl text-blue-400">{Icon}</div>
        <h3 className="text-xl font-bold text-center text-black font-serif">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm text-center italic animate-pulse">Click for details</p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        icon={Icon}
        title={title}
        description={description}
      />
    </>
  );
}

// Main Improvement Component with a Bento Grid Layout
export default function Improvement({ improvements }) {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Title and Introduction */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold">Latest Improvements</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">Explore the latest updates and features we've added to improve your experience.</p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {improvements.map((improvement, index) => (
          <ImprovementCard
            key={index}
            icon={improvement.icon}
            title={improvement.title}
            description={improvement.description}
          />
        ))}
      </div>
    </section>
  );
}
