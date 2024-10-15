import React from 'react';
import { ECOLE_PREPARATOIRE_FULL_VIEW, UNIVERSITY_FULL_VIEW } from '.';
import Image from 'next/image';

const ViewEducation = ({ level }) => {
  // Determine which data to use based on the level
  const data = level === 'University' ? UNIVERSITY_FULL_VIEW : ECOLE_PREPARATOIRE_FULL_VIEW;

  return (
    <div className='w-full h-[70vh] p-8 bg-gray-100 flex flex-col'>
      {/* Title */}
      <h1 className='text-3xl font-bold mb-6'>{data.name}</h1>

      <div className='flex flex-row gap-8'>
        {/* Left Section */}
        <div className='w-1/2 bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>{data.degree || data.program}</h2>
          <p className='text-lg mb-2'>{data.yearsAttended}</p>
          <p className='text-lg mb-4'>{data.major || 'Focus Areas: ' + data.focusAreas.join(', ')}</p>
          <p className='text-lg mb-4'>GPA: {data.gpa || 'N/A'}</p>
          <h3 className='text-xl font-semibold mb-2'>Key Achievements</h3>
          <ul className='list-disc pl-5 mb-4'>
            {data.keyAchievements.map((achievement, index) => (
              <li key={index} className='text-gray-700'>{achievement.title ? `${achievement.title}: ${achievement.description}` : achievement}</li>
            ))}
          </ul>
          <h3 className='text-xl font-semibold mb-2'>Relevant Courses</h3>
          <ul className='list-disc pl-5'>
            {data.relevantCourses.map((course, index) => (
              <li key={index} className='text-gray-700'>{course}</li>
            ))}
          </ul>
        </div>

        {/* Right Section (Optional: Only if you have additional details for the other institution) */}
        {level === 'University' && (
          <div className='w-1/2 bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold mb-4'>Extracurricular Activities</h2>
            <ul className='list-disc pl-5 mb-4'>
              {data.extracurricularActivities.map((activity, index) => (
                <li key={index} className='text-gray-700'>{activity}</li>
              ))}
            </ul>
            <h2 className='text-2xl font-semibold mb-4'>Projects & Research</h2>
            <ul className='list-disc pl-5'>
              {data.projectsAndResearch.map((project, index) => (
                <li key={index} className='text-gray-700'>{project.title}: {project.description}</li>
              ))}
            </ul>
            <h2 className='text-2xl font-semibold mb-4'>Internships & Work Experience</h2>
            <ul className='list-disc pl-5'>
              {data.internshipsAndWorkExperience.map((experience, index) => (
                <li key={index} className='text-gray-700'>{experience.title} at {experience.company} ({experience.duration}): {experience.description}</li>
              ))}
            </ul>
            <h2 className='text-2xl font-semibold mb-4'>Campus Activities</h2>
            <ul className='list-disc pl-5'>
              {data.campusActivities.map((activity, index) => (
                <li key={index} className='text-gray-700'>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Images */}
      {data.images && (
        <div className='flex flex-wrap gap-4 mt-6'>
          {data.images.map((image, index) => (
            <Image key={index} src={image} alt={`Educational Image ${index + 1}`} className='w-1/3 h-auto rounded-lg shadow-md' width={64} height={64} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewEducation;
