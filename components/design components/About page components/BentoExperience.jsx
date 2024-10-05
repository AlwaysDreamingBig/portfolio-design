import React from 'react';
import Image from 'next/image';
import { WORK_EXPERIENCES } from '.';


const BentoExperience = () => {
  return (
    <div className='w-full flex-grow bg-black/90 p-2'>
      {/* Grid container */}
      <div className='grid sm:grid-cols-2 sm:gap-2 gap-20 w-full h-full'>
        
        {/* First grid item */}
        <div className='border rounded-lg flex flex-col items-center justify-center p-4 sm:h-full h-[70vh] '>
          <Image 
            src={WORK_EXPERIENCES[0].logo} 
            alt={`${WORK_EXPERIENCES[0].companyName} Logo`} 
            width={200} // Corresponds to w-24 (24 * 4px = 96px)
            height={200} // Corresponds to h-24 (24 * 4px = 96px)
            className='' 
          />
          <h3 className='text-2xl font-semibold mb-2 text- mt-10 text-center'>{WORK_EXPERIENCES[0].companyName}</h3>

          <p className='text-lg mt-8'>Job Position:</p>
          <p className='text-lg italic font-serif font-bold text-blue-600'>{WORK_EXPERIENCES[0].position}</p>
          <p className='text-sm text-gray-400 mt-4'>{WORK_EXPERIENCES[0].duration}</p>

          <h4 className='text-lg mt-8 mb-2'>Projects</h4>
          <ul className='list-disc pl-5 text-sm text-blue-200'>
          <div className='flex gap-10'>
              {WORK_EXPERIENCES[0].projects.map((project, idx) => (
                <li key={idx}>{project.title}</li>
              ))}
            </div>
          </ul>

          <ul className='list-disc pl-5 text-sm text-blue-200 mt-4'>
            <div className='xl:flex gap-10 grid grid-cols-4'>
              {WORK_EXPERIENCES[0].technologiesUsed.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </div>
          </ul>
        </div>
        
        {/* Second grid item with nested grid */}
        <div className='grid grid-rows-2 sm:gap-2 gap-20 w-full h-full'>
          <div className='border rounded-lg flex flex-col items-center justify-center p-4 sm:h-full h-[50vh]'>
            <Image 
              src={WORK_EXPERIENCES[1].logo} 
              alt={`${WORK_EXPERIENCES[0].companyName} Logo`} 
              width={200} // Corresponds to w-24 (24 * 4px = 96px)
              height={200} // Corresponds to h-24 (24 * 4px = 96px)
              className='' 
            />

            <h3 className='text-2xl font-semibold mb-2 text-center mt-4'>{WORK_EXPERIENCES[1].companyName}</h3>

            <p className='text-lg mt-4'>Job Position:</p>
            <p className='text-lg italic font-serif font-bold text-blue-600'>{WORK_EXPERIENCES[1].position}</p>
            <p className='text-sm text-gray-400 mt-4'>{WORK_EXPERIENCES[1].duration}</p>
          </div>

          <div className='border rounded-lg flex flex-col items-center justify-center p-4 sm:h-full h-[50vh]'>
            <Image 
              src={WORK_EXPERIENCES[2].logo} 
              alt={`${WORK_EXPERIENCES[0].companyName} Logo`} 
              width={200} // Corresponds to w-24 (24 * 4px = 96px)
              height={200} // Corresponds to h-24 (24 * 4px = 96px)
              className='' 
            />

            <h3 className='text-2xl font-semibold mb-2 text-center mt-10'>{WORK_EXPERIENCES[2].companyName}</h3>

            <p className='text-lg mt-4'>Job Position:</p>
            <p className='text-lg italic font-serif font-bold text-blue-600'>{WORK_EXPERIENCES[2].position}</p>
            <p className='text-sm text-gray-400 mt-4'>{WORK_EXPERIENCES[2].duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoExperience;
