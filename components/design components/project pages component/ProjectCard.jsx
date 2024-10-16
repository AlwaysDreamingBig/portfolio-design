"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function ProjectCard({ title, text, images = [] }) {
  const imageContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(images.map(() => true)); // Track loading state for each image

  const scrollLeft = () => {
    imageContainerRef.current.scrollBy({
      left: -300, // Adjust this value as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    imageContainerRef.current.scrollBy({
      left: 300, // Adjust this value as needed
      behavior: 'smooth',
    });
  };

  const handleImageLoad = (index) => {
    setIsLoading((prevState) => {
      const newLoadingState = [...prevState];
      newLoadingState[index] = false; // Set image at index as loaded
      return newLoadingState;
    });
  };

  const paragraphsText = text.split('||');

  return (
    <div className={`grid grid-cols-1 gap-4 max-w-8xl p-4 mx-auto ${images.length === 0 ? 'md:grid-rows-1' : 'md:grid-rows-2'}`}>
      {/* Title and Text */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:px-28'>
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

      {/* Image Slider */}
      <div className={`relative p-4 ${images.length === 0 ? 'hidden' : ''} `}>
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full z-10'
        >
          &#8249;
        </button>

        {/* Scrollable Image Container */}
        <div
          ref={imageContainerRef}
          className={`flex space-x-4 overflow-x-scroll scrollbar-hide max-w-full ${images.length < 4 ? 'sm:items-center sm:justify-center' : ''}`}
        >
          {images.map((image, index) => (
            <div key={index} className='min-w-[500px] h-[450px] relative'>
              {/* Display loading animation if image is still loading */}
              {isLoading[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  {/* Loading Spinner */}
                  <div className="loader"></div>
                </div>
              )}

              <Image
                src={image}
                alt={`image-${index}`}
                fill
                className={`rounded-md transition-opacity duration-300 ${isLoading[index] ? 'opacity-0' : 'opacity-100'}`} // Fade-in effect
                style={{ objectFit: 'cover' }}
                onLoad={() => handleImageLoad(index)} // Trigger loading complete handler
              />
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full z-10'
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
