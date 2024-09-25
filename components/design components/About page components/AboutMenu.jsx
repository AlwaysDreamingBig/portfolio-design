// AboutMenu.js
import React from 'react';

const AboutMenu = ({ onPreviewSelect, selectedPreview }) => {
  const previews = [
    'About My Description',
    'About My Approach',
    'About My Hobbies',
    'About My Referencies',
  ];

  return (
    <div className='w-full min-h-[70vh] space-y-6'>
      <h1 className='font-semibold text-4xl'>Who Am I?</h1>
      <div className='flex flex-col gap-10'>
        {previews.map((preview) => (
          <button
            key={preview}
            className={`p-4 rounded-lg transition ${
              selectedPreview === preview ? 'bg-blue-700 text-white' : 'bg-black text-white hover:bg-gray-800'
            }`}
            onClick={() => onPreviewSelect(preview)}
          >
            {preview.replace('About ', '')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutMenu;
