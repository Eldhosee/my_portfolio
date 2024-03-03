import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { LuLink } from "react-icons/lu";
import {project_data} from './mockdata'
import p1 from '../assets/projects/p1.webp'
const ProjectCard = ({ imgSrc, projectTitle, projectDescription,github,live_link }) => (
  <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}}
   className='  group relative overflow-hidden border-2 border-white/20 rounded m-5 w-full h-[50vh]'>
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    <img src={imgSrc} alt='img' className='group-hover:scale-125 transition-all duration-500 h-full w-full' />
    
      <div className='absolute -bottom-full left-12 group-hover:bottom-32 transition-all duration-500 z-50'>
        <span className='text-gradient'>{projectTitle}</span>
      </div>
      <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50'>
        <p className='text-sm'>{projectDescription}</p>
      </div>
      <div className='absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50'>
        <a href={github}><FaGithub/></a>
      </div>
      <div className='absolute -bottom-full left-12 ml-8 group-hover:bottom-8 transition-all duration-700 z-50'>
        <a href={live_link}><LuLink/></a>
      </div>
      
  </motion.div>
);

const Projects = () => {
 

  return (
    <div className='section h=[100vh]' id='projects'>
      <div className='container mx-auto'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <h2 className='h2 text-accent'>My Projects</h2>
          <div className='grid lg:grid-cols-2 max-md:grid-cols-1 gap-5'>
            {project_data.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
