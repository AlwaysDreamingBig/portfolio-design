"use client";
import React, { useState } from 'react';

// Individual Bento Item (Summary or Lessons Card)
function BentoCard({ title, text, items, expanded, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 transition-all duration-1000 cursor-pointer ${
        expanded ? 'transform scale-105' : 'opacity-60'
      }`}
      style={{ minHeight: expanded ? '400px' : '200px', transition: 'all 1.5s ease-in-out' }} // Change size based on expanded state
    >
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      {expanded ? (
        <>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">{text}</p>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-neutral-700 dark:text-neutral-300 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-neutral-500 dark:text-neutral-400">Click to expand for more details...</p>
      )}
    </div>
  );
}

// Main Mangorian Bento Component with Offset
export default function MangorianBento({ summary }) {
  const [expandedCard, setExpandedCard] = useState(null); // State to track which card is expanded

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Title */}
      <header className="text-center mb-20">
        <h2 className="text-4xl font-bold">Project Overview</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2">
          A detailed look at the project, including the key takeaways and lessons learned.
        </p>
      </header>

      {/* Bento Grid - Divided into Two Sections with Offset */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Summary Section */}
        <div
          className={`transition-all duration-600 ease-in-out ${
            expandedCard === 'summary' || expandedCard === null ? 'flex-grow' : 'flex-none'
          }`}
          style={{ flexBasis: expandedCard === 'summary' || expandedCard === null ? '50%' : '0' }}
        >
          <BentoCard
            title={summary.summaryBoxParam.title}
            text={summary.summaryBoxParam.text}
            items={summary.summaryBoxParam.list}
            expanded={expandedCard === 'summary'}
            onClick={() => setExpandedCard(expandedCard === 'summary' ? null : 'summary')}
          />
        </div>

        {/* Lessons Learned Section */}
        <div
          className={`transition-all duration-600 ease-in-out ${
            expandedCard === 'lessons' || expandedCard === null ? 'flex-grow' : 'flex-none'
          }`}
          style={{ flexBasis: expandedCard === 'lessons' || expandedCard === null ? '50%' : '0' }}
        >
          <BentoCard
            title={summary.lessonsBoxParam.title}
            text={summary.lessonsBoxParam.text}
            items={summary.lessonsBoxParam.list}
            expanded={expandedCard === 'lessons'}
            onClick={() => setExpandedCard(expandedCard === 'lessons' ? null : 'lessons')}
          />
        </div>
      </div>
    </section>
  );
}
