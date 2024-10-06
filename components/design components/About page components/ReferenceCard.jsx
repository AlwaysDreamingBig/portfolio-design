import React from 'react';

const ReferenceCard = ({ name, role, company, contact, message, profilePic }) => {
  return (
    <div className='px-4 py-8 border border-red-200 rounded-lg sm:flex grid items-start min-h-[45vh]'>
      <img 
        src={profilePic} 
        alt={`${name}'s profile`} 
        className='w-16 h-16 rounded-full mr-4'
      />
      <div className='sm:translate-y-10 mt-2'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-gray-600'>{role} at {company}</p>
        <p className='text-blue-600'>{contact}</p>
        <p className='text-gray-400 italic mt-2'>"{message}"</p>
      </div>
    </div>
  );
};

export default ReferenceCard;
