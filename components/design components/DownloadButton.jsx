import React from 'react';

const DownloadButton = ({fileUrl}) => {

  const handleDownload = () => {
    window.open(fileUrl, '_blank'); // Open the file in a new tab
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
