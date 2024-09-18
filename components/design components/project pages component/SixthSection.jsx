import React from 'react';
import ProjectCard from './ProjectCard';

export function SixthSection({data}) {

  return (
    <div className='space-y-20'>
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
