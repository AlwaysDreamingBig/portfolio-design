import React from 'react';

const ResumeMenu = ({ onPreviewSelect, selectedPreview }) => {
  const previews = [
    'Work Experience',
    'Education',
    'Personal Projects',
    'Skills',
  ];

  return (
    <div className='w-full min-h-[70vh] space-y-6'>
      <h1 className='font-semibold text-4xl'>My Resume</h1>
      <div className='flex flex-col gap-10'>
        {previews.map((preview) => (
          <button
            key={preview}
            className={`p-4 rounded-lg transition ${
              selectedPreview === preview
                ? 'bg-blue-700 text-white'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            onClick={() => onPreviewSelect(preview)}
          >
            {preview}
          </button>
        ))}
      </div>

      {/* Download CV Button */}
      <button className='p-4 mt-6 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition'>
        <a href='/path/to/your-cv.pdf' download="My_CV.pdf">
          Download CV
        </a>
      </button>
    </div>
  );
};

export default ResumeMenu;
