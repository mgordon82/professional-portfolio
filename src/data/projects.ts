import type { StaticImageData } from 'next/image';

import MiPTImage from '../assets/images/MiPT.webp';
import portfolioImg from '../assets/images/portfolio-site.webp';
import doggoEDoggoImg from '../assets/images/doggo-e-doggo-site.webp';

export interface Project {
  name: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  siteUrl?: string;
  codeUrl: string;
  tech: string[];
  /** Present only for projects that appear on the resume page. */
  resume?: {
    role: string;
    start: string;
    end: string;
    bullets: string[];
  };
}

export const projects: Project[] = [
  {
    name: 'MiPT',
    description:
      'Full-stack fitness and nutrition platform for trainers and clients, featuring secure role-based access, progress tracking, nutrition tools, AI-powered insights, and a companion iOS app in TestFlight beta.',
    image: MiPTImage,
    imageAlt: 'MiPT fitness and nutrition application dashboard',
    siteUrl: 'https://mipt-ui.netlify.app/',
    codeUrl: 'https://github.com/mgordon82/chapter-two-api',
    tech: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Redux Observable',
      'MUI',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS Cognito',
      'OpenAI',
      'Capacitor',
      'Apple HealthKit'
    ],
    resume: {
      role: 'Founder & Full-Stack Engineer',
      start: 'February 2026',
      end: 'Present',
      bullets: [
        'Founded and deployed MiPT, a fitness and nutrition coaching platform refined through feedback from 4 early users, including UI improvements and bug fixes',
        "Solely architected and developed MiPT's full-stack platform using React, Redux Toolkit, Node.js, and MongoDB, owning frontend, backend, and database development",
        'Developed a companion iOS app using Capacitor and Apple HealthKit to sync workouts, activity, and health metrics, currently in TestFlight beta',
        'Integrated 3 functional OpenAI-powered tools for food photo macro estimation, weight trend analysis, and personalized workout planning, available to beta testers',
        'Implemented AWS Cognito authentication, user invitations, and configurable service permissions supporting 4 user roles with multi-role assignments'
      ]
    }
  },
  {
    name: 'Portfolio Site',
    description:
      'Dark-mode, responsive portfolio built with Next.js, TypeScript, and MUI, statically exported for fast loads and search visibility.',
    image: portfolioImg,
    imageAlt: 'Preview of this portfolio site',
    codeUrl: 'https://github.com/mgordon82/professional-portfolio',
    tech: ['Next.js', 'TypeScript', 'MUI', 'Netlify']
  },
  {
    name: 'Doggo-e-Doggo React App',
    description:
      'A React app that connects to a database of dogs, does basic auth and looks up available dogs for adoption. This was built for a coding challenge.',
    image: doggoEDoggoImg,
    imageAlt: 'Doggo-e-Doggo React app preview',
    siteUrl: 'https://doggo-e-doggo.netlify.app',
    codeUrl: 'https://github.com/mgordon82/doggo-e-doggo',
    tech: ['React', 'REST API', 'Netlify']
  }
];
