"use client";

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { projects } from '@/assets/constants';
import ProjectCard from './ProjectCard';

const ProjectCardContainer = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <ProjectCardWithAnimation key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCardWithAnimation = ({ project }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <ProjectCard
        backgroundImage={project.backgroundImage}
        logoImage={project.logoImage}
        title={project.title}
        tag={project.tag}
        description={project.description}
        link={project.link}
      />
    </motion.div>
  );
};

export default ProjectCardContainer;
