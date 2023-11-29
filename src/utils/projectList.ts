import IProject from '../models/Project';
import project1_1 from '../assets/img/projects/project-1-1-min.png';
import project1_2 from '../assets/img/projects/project-1-2-min.png';
import project1_3 from '../assets/img/projects/project-1-3-min.png';
import project1_4 from '../assets/img/projects/project-1-4-min.png';
import project1_5 from '../assets/img/projects/project-1-5-min.png';
import project1_6 from '../assets/img/projects/project-1-6-min.png';
import project1_7 from '../assets/img/projects/project-1-7-min.png';
import project1_8 from '../assets/img/projects/project-1-8-min.png';
import project1_9 from '../assets/img/projects/project-1-9-min.png';
import project2_1 from '../assets/img/projects/project-2-1-min.png';
import project2_2 from '../assets/img/projects/project-2-2-min.png';
import project2_3 from '../assets/img/projects/project-2-3-min.png';
import project2_4 from '../assets/img/projects/project-2-4-min.png';
import project3_1 from '../assets/img/projects/project-3-1-min.png';
import project3_2 from '../assets/img/projects/project-3-2-min.png';
import { namedSkills as skills } from './skills';

const { html, css, mui, react, typescript, node, express, mongodb } = skills;

const projects: IProject[] = [
  {
    name: 'Dish Discovery',
    description:
      'A robust and dynamic recipe sharing web application built on the MERN stack. The web application seamlessly integrates user authentication and comprehensive CRUD operations.',
    technologiesUsed: [
      html,
      css,
      mui,
      react,
      typescript,
      node,
      express,
      mongodb,
    ],
    screenshots: [
      project1_1,
      project1_2,
      project1_3,
      project1_4,
      project1_5,
      project1_6,
      project1_7,
      project1_8,
      project1_9,
    ],
    githubLink: 'https://github.com/ordance0208/dish-discovery',
    liveDemo: undefined,
  },
  {
    name: 'The Rick and Morty Library',
    description:
      'The Rick and Morty Library is a web app where you can list and filter all the characters, locations and episodes from the TV show Rick and Morty pulled from The Rick and Morty API.',
    technologiesUsed: [html, css, react],
    screenshots: [project2_1, project2_2, project2_3, project2_4],
    githubLink: 'https://github.com/ordance0208/rick-and-morty-api',
    liveDemo: 'https://therickandmortylibrary.netlify.app/',
  },
  {
    name: 'Noteify',
    description:
      "Noteify is a simple note taking / todo web application using the browser's local storage to save the data. The project utilizes the TipTap text editor.",
    technologiesUsed: [html, css, react],
    screenshots: [project3_1, project3_2],
    githubLink: 'https://github.com/ordance0208/note-taking-app',
    liveDemo: 'https://noteifyapp.netlify.app/',
  },
];

export default projects;
