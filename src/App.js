import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skill from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Educations from './components/Educations';
import Projects from './components/Projects';
import Certificate from './components/Certificate';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Educations/>
      <Skill />
      <Work />
      <Projects/>
      <Certificate />
      <Contact/>
      
    </div>
  );
};

export default App;
