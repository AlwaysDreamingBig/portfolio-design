import React from 'react';
import ReferenceCard from './ReferenceCard';
import { references } from '@/assets/constants';

const References = () => {
  

  return (
    <div className='mx-auto sm:p-6 bg-black rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Professional References</h2>
      <p className='text-gray-200 mb-6'>
        Here are some of my professional references who can vouch for my skills and experience.
      </p>
      <div className='sxl:grid sxl:grid-cols-2 gap-10 sxl:space-y-0 space-y-10'>
        {references.map((reference, index) => (
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
    </div>
  );
};

export default References;
