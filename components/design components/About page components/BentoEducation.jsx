import React from 'react';
import Image from 'next/image';
import { ECOLE_PREPARATOIRE_PREVIEW, UNIVERSITY_PREVIEW } from '.';

const BentoEducation = ({ level }) => {
  const universityData = UNIVERSITY_PREVIEW;
  const ecoleData = ECOLE_PREPARATOIRE_PREVIEW;

  return (
    <div className='w-full h-full bg-black/90 p-4 flex'>
      <div className='grid sm:grid-cols-2 gap-4 w-full h-full'>
        {/* Left Block - University */}
        <div className='border shadow-lg w-full h-full rounded-lg flex flex-col items-center justify-center p-4'>
          <h3 className='text-2xl font-semibold mb-2 text-center'>{universityData.name}</h3>

          <p className='text-lg mt-4'>Bachelor of Science in:</p>
          <p className='text-lg italic font-serif font-bold text-blue-600'>{universityData.degree}</p>

          <p className='text-sm text-gray-400 mt-4'>{universityData.yearsAttended}</p>
          <p className='text-sm text-gray-400'>{universityData.major}</p>

          <h4 className='text-lg mt-4 mb-2'>Key Achievements</h4>
          <ul className='list-disc pl-5 space-y-2'>
            {universityData.keyAchievements.map((achievement, index) => (
              <li key={index} className='text-sm text-gray-400'>{achievement}</li>
            ))}
          </ul>

          <Image 
            src={universityData.thumbnailImage} 
            alt={`${universityData.name} Logo`} 
            width={200} // Corresponds to w-24 (24 * 4px = 96px)
            height={200} // Corresponds to h-24 (24 * 4px = 96px)
            className='' 
          />
        </div>

        {/* Right Block - École Préparatoire */}
        <div className='border w-full h-full rounded-lg flex flex-col items-center justify-center p-4'>
          <h3 className='text-2xl font-semibold mb-2'>{ecoleData.name}</h3>

          <p className='text-lg mt-4'>Preparatory Class in:</p>
          <p className='text-lg italic font-serif font-bold text-blue-600'>{ecoleData.program}</p>

          <p className='text-sm text-gray-400 mt-4'>{ecoleData.yearsAttended}</p>
          <p className='text-sm text-gray-400'>{ecoleData.major}</p>

          <h4 className='text-lg mt-4 mb-8'>Key Achievements</h4>
          <ul className='list-disc pl-5 space-y-2'>
            {ecoleData.keyAchievements.map((achievement, index) => (
              <li key={index} className='text-sm text-gray-400'>{achievement}</li>
            ))}
          </ul>

          <Image 
            src={ecoleData.thumbnailImage} 
            alt={`${ecoleData.name} Logo`} 
            width={120} // Corresponds to w-24 (24 * 4px = 96px)
            height={120} // Corresponds to h-24 (24 * 4px = 96px)
            className='mt-4' 
          />
        </div>
      </div>
    </div>
  );
};

export default BentoEducation;
