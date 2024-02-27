import React from 'react';
import about_image from '../assets/about.webp'
import { motion } from "framer-motion";
const About = () => {
  return (
  <div id='about'className='section'>
    <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 2, ease: "easeOut"}} 
    className='container mx-auto flex lg:flex-row max-md:flex-col items-center'>
      <div className='flex-1 bg-contain bg-no-repeat
      bg-top mb-10'>
        <img 
         src={about_image} alt='image' 
         className='rounded-xl'/>
      </div>
      <div className='flex-1 '>
        <h2 className='h2 text-accent'>
          About me.
        </h2>
        <h3 className='h3 mb-4'>
          I'm a Full Stack Developer And A Student Who loves to learn new things
        </h3>
        <p>
        I am a developer with a knack for crafting beautiful and functional websites that transform ideas into online realities. With a strong foundation in various Web technologies , I'm adept at building user-centric experiences that not only look great but also deliver results.
        </p>
        <div className='mt-5'>
        <a href='#' className=' text-gradient btn-link '>
                  View My Skills
          </a>
      </div>
      </div>
    </motion.div>
  </div>
  );
};

export default About;
