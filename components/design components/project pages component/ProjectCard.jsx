"use client";
import React, { useRef } from 'react';

export default function ProjectCard({ title, text, images = [] }) {
  // Reference for the image container to scroll
  const imageContainerRef = useRef(null);

  // Function to scroll the images left
  const scrollLeft = () => {
    imageContainerRef.current.scrollBy({
      left: -300, // Adjust this value based on how much you want to scroll
      behavior: 'smooth',
    });
  };

  // Function to scroll the images right
  const scrollRight = () => {
    imageContainerRef.current.scrollBy({
      left: 300, // Adjust this value based on how much you want to scroll
      behavior: 'smooth',
    });
  };

  const paragraphsText = text.split('||');

  return (
    <div className='grid grid-cols-1 gap-4 max-w-8xl p-4 mx-auto md:grid-rows-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:px-28'>
        <div className='text-blue-500 text-2xl p-8'>
          {title}
        </div>

        <div className='hover:shadow-xl transition duration-200 shadow-2xl dark:shadow-none rounded-lg dark:bg-black dark:border-white/[0.2] border border-gray-800 text-justify font-sans font-light text-white dark:text-neutral-300 p-8 leading-loose'>
            <div className="space-y-4">
              {paragraphsText.map((para, index) => (
                <p key={index} className="leading-loose">{para}</p>
              ))}
            </div>
        </div>
      </div>

      {/* Image slider container */}
      <div className='relative border p-4'>
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
        >
          &#8249; {/* Left arrow */}
        </button>

        {/* Image container */}
        <div
          ref={imageContainerRef}
          className='flex space-x-4 overflow-x-auto scrollbar-hide justify-center items-center'
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image-${index}`}
              className='h-80 w-72 object-cover rounded-md'
            />
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
        >
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}
