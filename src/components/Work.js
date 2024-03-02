import React from 'react';
import {motion} from 'framer-motion'
const Work = () => {
  const workData = [
    {
      title: "Web Developer [Intern]",
      company: "DocketGo",
      location: "[Kochi]",
      date: "April 2023 - Present",
      description: "Developing an IoT-based real-time webpage with Python Flask and React.js for Air Pollution monitoring. Involves data acquisition, processing, and visualization."
    },
    {
      title: "Python Developer [Intern]",
      company: "DocketGo",
      location: "[Remote]",
      date: "Jan 2023 - April 2023",
      description: "Developed and executed API testing using Pytest framework, ensuring the reliability and functionality of web services."
    },
    
  ];
  
  return (
  <motion.div
  initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}} className='section flex flex-col justify-center items-center m-5' id='work'>
    <div id='work' className='mb-10'>
                <h2 className='h2 text-accent'>
                    Work Experience
                </h2>
      </div>
      {workData.map((work, index) => (
        <div
        
        className="flex mx-auto p-3 max-md:flex-col-reverse lg:flex-row mb-10 border-2 border-[#c026d3]"
        >
          <div className='flex flex-col w-[300px]'>
            <h3 className="flex items-center h3 mb-4 text-lg font-semibold text-gray-900 dark:text-white">{work.title}</h3>
            <p className="text-base font-normal text-white">{work.company}</p>
            <p className="text-base font-normal text-white">{work.description}</p>
          </div>
          <div className='flex flex-col w-[300px] items-end'>
            <p className="text-base font-normal text-white">{work.location}</p>
            <p className="text-base font-normal text-white">{work.date}</p>
          </div>
        </div>
      ))}
      
  </motion.div>);
};

export default Work;
