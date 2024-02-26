import React from 'react';
import logo from '../assets/logo.webp'
const Header = () => {
  return (
  <header id='header' className='py-5  flex justify-between items-center  ml-10'>


    <a href='#'>
      <img src={logo} alt='logo' className='h-16 ' />
    </a>



  </header>);
};

export default Header;
