import React from 'react';
import DownloadButton from '../DownloadButton';
const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-90b70.appspot.com/o/CV_Auriol_NGUELI.pdf?alt=media&token=0c258efd-9b03-47c7-8d4b-89fb7090f959';


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
      <DownloadButton fileUrl={ 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-90b70.appspot.com/o/CV_Auriol_NGUELI.pdf?alt=media&token=0c258efd-9b03-47c7-8d4b-89fb7090f959'}/>
    </div>
  );
};

export default ResumeMenu;
