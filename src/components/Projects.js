import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { LuLink } from "react-icons/lu";
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const ProjectCard = ({ imgSrc, projectTitle, projectDescription }) => (
  <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}}
   className='  group relative overflow-hidden border-2 border-white/20 rounded-x1 m-5'>
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    <img src={imgSrc} alt='img' className='group-hover:scale-125 transition-all duration-500' />
    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
      <span className='text-gradient'>{projectTitle}</span>
    </div>
    <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
      <span className='text-3x1 text-white'>{projectDescription}</span>
    </div>
    <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'>
      <a href='#'><FaGithub/></a>
    </div>
    <div className='absolute -bottom-full left-12 ml-8 group-hover:bottom-8 transition-all duration-700 z-50'>
      <a href='#'><LuLink/></a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectData = [
    { imgSrc: img1, projectTitle: 'React Project', projectDescription: 'Flaourful flare' },
    { imgSrc: img1, projectTitle: 'React Project', projectDescription: 'Flaourful flare' },
    { imgSrc: img2, projectTitle: 'React Project', projectDescription: 'Flaourful flare' },
    { imgSrc: img3, projectTitle: 'React Project', projectDescription: 'Flaourful flare' },
  ];

  return (
    <div className='section h=[100vh]' id='projects'>
      <div className='container mx-auto'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <h2 className='h2 text-accent'>My Projects</h2>
          <div className='grid lg:grid-cols-2 max-md:grid-cols-1 gap-5'>
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
