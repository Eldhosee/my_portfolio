import React from 'react';
import skill from '../assets/skill.webp';
import { motion } from 'framer-motion';

// Import your skill images
import cPlusPlus from '../assets/skills/c++.webp';
import Python from '../assets/skills/python.webp';
import Django from '../assets/skills/django.png';
import HTML from '../assets/skills/html.webp';
import CSS from '../assets/skills/css.webp';
import Bootstrap from '../assets/skills/bootstrap.png';
import react from '../assets/skills/react.webp';
import SQL from '../assets/skills/sql.webp';
import JavaScript from '../assets/skills/js.webp';
import Tailwind from '../assets/skills/tailwind.svg';
import Flask from '../assets/skills/flask.webp';
import Node from '../assets/skills/nodelogo.png';
import Firebase from '../assets/skills/firebase.webp';
import Git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import MySQL from '../assets/skills/mysql.png';
import MongoDB from '../assets/skills/mongodb.webp';
import MaterialUI from '../assets/skills/mui.svg';

const Skill = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [cPlusPlus, Python, JavaScript],
    },
    {
      title: 'Web Development Frameworks',
      skills: [Django, Flask, react, Node],
    },
    {
      title: 'Frontend Technologies',
      skills: [HTML, CSS, Bootstrap, JavaScript, Tailwind],
    },
    {
      title: 'Backend Technologies',
      skills: [SQL, Firebase],
    },
    {
      title: 'Version Control',
      skills: [Git,github],
    },
    {
      title: 'Database Management',
      skills: [MySQL, MongoDB],
    },
    {
      title: 'UI Frameworks',
      skills: [MaterialUI],
    },
  ];

  return (
    <div className='section' id='skills'>
      <div className='container mx-auto'>
        <div className='flex justify-center mb-10'>
          <img src={skill} alt='Skills' />
        </div>
        <div className='flex justify-center mb-5'>
          <h2 className='text-3xl font-bold text-cente mb-5'>MY SKILLS </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              
              className='border border-gray-200 rounded-lg p-6'
            >
              <h3 className='text-lg font-semibold mb-3 flex justify-center'>{category.title}</h3>
              <div className='flex flex-wrap justify-center'>
                {category.skills.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className='h-20 w-20 p-2 bg-white m-3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  flex justify-center items-center'
                  >
                    <img src={img} alt={`Skill ${idx}`} className='w-18 h-18' />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
