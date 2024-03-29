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
    projectTitle: 'Article summarizer',
    projectDescription: 'Simplify your reading with article summarizer that transforms  articles into  concise summaries',
    github: 'https://github.com/Eldhosee/summarizer-',
    live_link: 'https://summarizer2.netlify.app/'
  },
  {
    imgSrc: p2,
    projectTitle: 'Flavorful Fare',
    projectDescription: 'Flavorful Fare is a web application that serves as your ultimate recipe haven.',
    github: 'https://github.com/Eldhosee/Flavorful-fare',
    live_link: 'https://flavorful-fare.netlify.app/'
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
