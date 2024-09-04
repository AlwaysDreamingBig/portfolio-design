import React from 'react';

export default function BouncingArrow() {
  return (
    <div className="flex justify-center">
      <div className="animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-28 h-28 text-neutral-600 dark:text-neutral-200"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
