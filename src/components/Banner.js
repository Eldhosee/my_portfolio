import React from 'react';
import avatar from '../assets/avatar.webp';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode,SiCodingninjas  } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className='section max-md:mb-10' id='home'>
      <div className='container mx-auto '>
        <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}}
         className='flex max-md:flex-col-reverse lg:justify-between items-center'>
          <div>
            <div >
              <h1
              
              className='text-[55px] font-bold leading-[0.8] lg:text-[70px] '>
                ELDHOSE <span>IYPE</span>
              </h1>
            </div>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>
              I am a
            </span>
            <TypeAnimation sequence={[
              'Student',
              2000,
              'Developer',
              2000,
              'Problem Solver',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p className='mb-8 max-w-lg lg-mx-0'>
          I'm a passionate web developer driven by turning ideas into seamless, beautiful realities. With expertise in crafting functional and visually captivating websites, I go beyond just coding - I connect with your vision and create experiences that resonate with your audience.
          </p>
          <div className='flex flex-col 
          '>
              <div>
                <a href='#contact'><button className='btn btn-lg'> Contact me</button></a>
                <a href='#projects' className='text-gradient btn-link ml-10'>
                  My Projects
                </a>
              </div>
              <div className='flex  text-[20px] gap-x-6 max-w-max mt-5 ml-2'>
                <a href='https://github.com/Eldhosee'>
                  <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/eldhose-iype-a02145214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                  <FaLinkedinIn/>
                </a>
                <a href='https://leetcode.com/eldhoseiype211/'>
                  <SiLeetcode/>
                </a>
                <a href='https://www.codingninjas.com/studio/profile/fba9066c-2545-4d7b-878d-2a66c4977673'>
                  <SiCodingninjas/>
                </a>
              </div>
          </div>
          </div>
          <div>
            <img 
              src={avatar} alt='avatar' />
          </div>
        </motion.div>
      </div>
    </section>);
};

export default Banner;
