import React from 'react';

const Contact = () => {
  return (
    <div className='section h-[100hv]  m-10 flex justify-center items-start' id='contact'>
      <div className=' border p-8 ' >
        <div className='flex justify-center flex-col items-center'>
          <h4 className='text-gradient mb-5'>About This Portfolio</h4>
          <div className='inline-block'>
            <p className='inline'>
              Welcome to my portfolio! This website is crafted with a combination of cutting-edge technologies to showcase my skills and experiences in the world of web development. The dynamic and interactive design is made possible through the use of React.js, providing a seamless and engaging user experience. Every detail has been carefully implemented with the power of Tailwind CSS, ensuring a visually appealing and responsive layout. The animations that bring this portfolio to life are created using Framer Motion, adding an extra layer of elegance and modernity.
            </p>
            <p className='max-md:hidden inline '>
              Explore the various sections to learn more about my projects, skills, and educational background. Each component reflects my dedication to creating impactful and user-friendly web applications.
            </p>
          </div>
          <h4 className='text-gradient mt-8 mb-5'>Contact Information</h4>
          <p className='text-align-center'>If you have any inquiries, opportunities, or just want to say hello, feel free to reach out to me at eldhoseiypeparavatty@gmail.com. I'm excited to connect with you and explore potential collaborations!</p>
        </div>
      </div>
    </div>);
};

export default Contact;
