import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { MdOutlineSchool } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

const navLinks = [
  { to: 'header', icon: <BiHomeAlt /> },
  { to: 'about', icon: <BiUser /> },
  { to: 'educations', icon: <MdOutlineSchool /> },
  { to: 'skills', icon: <FaCode /> },
  { to: 'work', icon: <BsBriefcase /> },
  { to: 'projects', icon: <BsClipboardData /> },
];

const Nav = () => {
  return (
    <nav className='fixed lg bottom-4 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              activeClass='active'
              smooth={true}
              spy={true}
             
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
