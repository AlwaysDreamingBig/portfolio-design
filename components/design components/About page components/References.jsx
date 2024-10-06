import React, { useState } from 'react';
import ReferenceCard from './ReferenceCard';
import { references } from '@/assets/constants';

const References = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const referencesPerPage = 4;

  const handleNext = () => {
    if ((currentPage + 1) * referencesPerPage < references.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * referencesPerPage;
  const currentReferences = references.slice(startIndex, startIndex + referencesPerPage);

  return (
    <div className='mx-auto sm:p-6 sm:bg-black rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Professional References</h2>
      <p className='text-gray-200 mb-6'>
        Here are some of my professional references who can vouch for my skills and experience.
      </p>
      <div className='sxl:grid sxl:grid-cols-2 gap-10 sxl:space-y-0 space-y-10'>
        {currentReferences.map((reference, index) => (
          <ReferenceCard
            key={index}
            name={reference.name}
            role={reference.role}
            company={reference.company}
            contact={reference.contact}
            message={reference.message}
            profilePic={reference.profilePic}
          />
        ))}
      </div>
      <div className='flex justify-between mt-6'>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className='bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50'
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * referencesPerPage >= references.length}
          className='bg-gray-700 text-white px-8 py-2 rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default References;
