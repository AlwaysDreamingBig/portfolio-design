import React from 'react';
import { PERSONAL_PROJECTS } from '.';

const BentoProjects = () => {
  return (
    <div className='w-full flex-grow bg-black/90 p-2'>
      {/* Outer Grid Container */}
      <div className='grid grid-rows-2 sm:gap-2 gap-10 w-full h-full'>
        
        {/* First Row */}
        <div className='grid sm:grid-cols-2 w-full sm:min-h-[40vh] sm:gap-2 gap-10'>
          <div className='border rounded-lg flex flex-col items-center justify-center p-4'>
            <p className='text-lg mb-2'>Project's Title:</p>

            <h3 className='text-2xl font-semibold mb-2 text-center'>{PERSONAL_PROJECTS[0].title}</h3>

            <p className='text-lg italic font-serif font-bold text-blue-600'>{PERSONAL_PROJECTS[0].service}</p>
            <p className='text-sm text-gray-400 mt-4'>{PERSONAL_PROJECTS[0].year}</p>

            <h4 className='text-lg mt-4 mb-2'>Technologies:</h4>
            <ul className='list-disc pl-5 text-sm text-blue-200'>
              <div className='xl:flex gap-10'>
                {PERSONAL_PROJECTS[0].technologies.map((technologiy, idx) => (
                  <li key={idx}>{technologiy}</li>
                ))}
              </div>
            </ul>
          </div>

          <div className='border rounded-lg flex flex-col items-center justify-center p-4'>
            <p className='text-lg mb-2'>Project's Title:</p>

            <h3 className='text-2xl font-semibold mb-2 text-center'>{PERSONAL_PROJECTS[1].title}</h3>

            <p className='text-lg italic font-serif font-bold text-blue-600'>{PERSONAL_PROJECTS[1].service}</p>
            <p className='text-sm text-gray-400 mt-4'>{PERSONAL_PROJECTS[1].year}</p>


            <h4 className='text-lg mt-4 mb-2'>Technologies:</h4>
            <ul className='list-disc pl-5 text-sm text-blue-200'>
              <div className='xl:flex gap-10 grid grid-cols-3'>
                {PERSONAL_PROJECTS[1].technologies.map((technologiy, idx) => (
                  <li key={idx}>{technologiy}</li>
                ))}
              </div>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className='grid sm:grid-cols-2 w-full sm:min-h-[40vh] sm:gap-2 gap-10'>
          <div className='border rounded-lg flex flex-col items-center justify-center p-4'>
              <p className='text-lg mb-2'>Project's Title:</p>

              <h3 className='text-2xl font-semibold mb-2 text-center'>{PERSONAL_PROJECTS[2].title}</h3>

              <p className='text-lg italic font-serif font-bold text-blue-600 text-center'>{PERSONAL_PROJECTS[2].service}</p>
              <p className='text-sm text-gray-400 mt-4'>{PERSONAL_PROJECTS[2].year}</p>


              <h4 className='text-lg mt-4 mb-2'>Technologies:</h4>
              <ul className='list-disc pl-5 text-sm text-blue-200'>
                <div className='flex gap-10'>
                  {PERSONAL_PROJECTS[2].technologies.map((technologiy, idx) => (
                    <li key={idx}>{technologiy}</li>
                  ))}
                </div>
              </ul>
            </div>

            <div className='border rounded-lg flex flex-col items-center justify-center p-4'>
              <p className='text-lg mb-2'>Project's Title:</p>

              <h3 className='text-2xl font-semibold mb-2 text-center'>{PERSONAL_PROJECTS[3].title}</h3>

              <p className='text-lg italic font-serif font-bold text-blue-600 text-center'>{PERSONAL_PROJECTS[3].service}</p>
              <p className='text-sm text-gray-400 mt-4'>{PERSONAL_PROJECTS[3].year}</p>


              <h4 className='text-lg mt-4 mb-2'>Technologies:</h4>
              <ul className='list-disc pl-5 text-sm text-blue-200'>
                <div className='xl:flex gap-10'>
                  {PERSONAL_PROJECTS[3].technologies.map((technologiy, idx) => (
                    <li key={idx}>{technologiy}</li>
                  ))}
                </div>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BentoProjects;
