import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { data } from './mockdata';
import { motion } from "framer-motion";
const Certificate = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className='section h-[100vh]' id='certificate'>
      <motion.div initial={{opacity:0,y:100}} whileInView={{ opacity: 1,y:0 }} transition={{duration: 1, ease: "easeOut"}}
       className='flex flex-col justify-center items-center '>
        <div>
          <h2 className='h2 text-accent'>Certificates</h2>
        </div>

        <div className='relative flex items-center overflow-hidden'>
          <MdChevronLeft
            className='opacity-50 cursor-pointer hover:opacity-100'
            onClick={slideLeft}
            size={40}
          />
          <div
            id='slider'
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          >
            {data.map((item) => (
              <img
                className='h-[300px] w-[auto] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={item.img}
                alt='/'
                key={item.id}
              />
            ))}
          </div>
          <MdChevronRight
            className='opacity-50 cursor-pointer hover:opacity-100'
            onClick={slideRight}
            size={40}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Certificate;
