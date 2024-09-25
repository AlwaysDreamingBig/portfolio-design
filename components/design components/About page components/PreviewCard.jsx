import React from 'react';
import BentoEducation from './BentoEducation';
import BentoExperience from './BentoExperience';
import BentoProjects from './BentoProjects';
import BentoSkills from './BentoSkills';
import BentoHobbies from './BentoHobbies.jsx';
import SevenStepsLayout from './BentoApproach.jsx';
import BentoDescription from './BentoDescription.jsx';
import ReferenceContainer from './ReferenceContainer.jsx';

const PreviewCard = ({ title, onClick }) => {
  const person = {
    name: 'Auriol NGUELI',
    age: 28,
    profession: 'Software Engineer',
    bio: 'I’m a dedicated software engineer with 5+ years of experience building scalable web and mobile applications. Specializing in JavaScript, React, Node.js, and Python, I focus on creating efficient, high-performance systems. I enjoy collaborating with teams to deliver solutions that meet both technical and business needs, while maintaining clean, maintainable code.',
    location: 'San Francisco, CA, USA',
    email: 'jane.smith@example.com',
    phone: '+1 555-555-5555',
    traits: [
      'Adaptable and proactive',
      'Strong attention to detail',
      'Effective communicator',
      'Collaborative team player',
    ],
    socialMedia: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
    },
  };

  // Determine which Bento component to render based on the title
  const renderBentoContent = () => {
    switch (title) {
      case 'Education':
        return <BentoEducation />;
      case 'Work Experience':
        return <BentoExperience />;
      case 'Personal Projects':
        return <BentoProjects />;
      case 'Skills':
        return <BentoSkills />;
      case 'About My Hobbies':
        return <BentoHobbies />;
      case 'About My Approach':
        return <SevenStepsLayout />;
      case 'About My Referencies':
        return <ReferenceContainer />;
      case 'About My Description':
          return <BentoDescription  person={person}/>;
      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <div
      className='w-full min-h-[70vh] sm:p-6 p-1 bg-white rounded-lg shadow-md cursor-pointer flex flex-col items-center sm:space-y-4 space-y-10'
      onClick={onClick}
    >
      <h2 className='text-2xl font-semibold text-center text-black sm:mt-0 mt-10'>{title}</h2>
      <p className='text-gray-600 text-center'>
        {`This is the preview for ${title}. Click to see more.`}
      </p>

      {/* Ensure the Bento content takes up the remaining space */}
      <div className='flex-grow w-full'>
        {renderBentoContent()}
      </div>
    </div>
  );
};

export default PreviewCard;
