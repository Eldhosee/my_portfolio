import c1 from '../assets/certificates/certi1.webp';
import c2 from '../assets/certificates/certi2.webp';
import c3 from '../assets/certificates/certi3.webp';
import c4 from '../assets/certificates/certi4.png';
import p1 from '../assets/projects/p1.webp';
import p2 from '../assets/projects/p2.webp';
import p3 from '../assets/projects/p3.webp';
import p4 from '../assets/projects/p4.webp';
export const data = [
  {
    id: 1,
    img: c4,
  },
  {
    id: 2,
    img: c2,
  },
  {
    id: 3,
    img: c3,
  },
  {
    id: 4,
    img: c1
  }


];

export const project_data = [
  {
    imgSrc: p1,
    projectTitle: 'Apple iPhone 15 Pro',
    projectDescription: 'Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models',
    github: 'https://github.com/Eldhosee/IPhone-15-Pro-website',
    live_link: 'https://iphone15pro1.netlify.app/'
  },
  {
    imgSrc: p2,
    projectTitle: 'Movie Recommendation ',
    projectDescription: 'movie recommendation system that suggests movies based on a provided movie name',
    github: 'https://github.com/Eldhosee/Movie-recommder',

  },
  {
    imgSrc: p3,
    projectTitle: 'Movie Booking ',
    projectDescription: 'A robust full-stack project leveraging the Django web framework with a SQLite database backend.',
    github: 'https://github.com/Eldhosee/moviebooking',
    live_link: 'https://coderseeker1.pythonanywhere.com/'
  }
  ,  {
    imgSrc: p4,
    projectTitle: 'Blog website ',
    projectDescription: 'A robust full-stack project built using the MERN stack. This website features Google authentication, allowing users to generate, edit, delete, and comment on posts. ',
    github: 'https://github.com/Eldhosee/Blog-Website',
    live_link: 'https://blog-website-aum7.onrender.com/'
  }
]
