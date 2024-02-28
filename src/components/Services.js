import React from 'react';
import skill from '../assets/skill.webp'
import skill1 from '../assets/skills/c++.webp'
import skill2 from '../assets/skills/python.webp'
import skill3 from '../assets/skills/django.png'
import skill4 from '../assets/skills/html.webp'
import skill5 from '../assets/skills/css.webp'
import skill6 from '../assets/skills/bootstrap.webp'
import skill7 from '../assets/skills/react.webp'
import skill8 from '../assets/skills/sql.webp'
import skill9 from '../assets/skills/js.webp'
import {motion} from 'framer-motion'
const Skill = () => {
  return (
  <div className='section ' id='skills'>
      <div className='container mx-auto flex lg:flex-row max-md:flex-col justify-between items-center'>
      <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}}
       className='   flex justify-center items-center mb-10 lg:mr-5'>
        <img src={skill} alt='image'  />
      </motion.div>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <h2 className='h2 text-accent mb-10'>
            MY SKILLS
          </h2>
        </div>
        
        <div className="grid grid-cols-4 max-md:gap-4 lg:gap-5">
  {[skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9].map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" ,delay: index * 0.2 }}
      className='h-20 w-20 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 flex justify-center items-center'
    >
      <img src={skill} alt={`skill${index + 1}`} className='h-14 w-14' />
    </motion.div>
  ))}
</div>

        
      </div>
    </div>
  </div>);
};

export default Skill;
