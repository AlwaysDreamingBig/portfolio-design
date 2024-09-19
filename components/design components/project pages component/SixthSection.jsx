import React from 'react';
import ProjectCard from './ProjectCard';

export function SixthSection({data}) {

  return (
    <div className='xl:space-y-40 md:space-y-0 space-y-40'>
        {data.map((item, index) => (
            <ProjectCard 
                key={index}  // Add a unique key prop for each item
                title={item.title}
                text={item.text}
                images={item.images}
            />
        ))}
    </div>
  );
};
