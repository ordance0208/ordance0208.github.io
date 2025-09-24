import Html from '../assets/svg/Html';
import Css from '../assets/svg/Css';
import Tailwind from '../assets/svg/Tailwind';
// import Mui from '../assets/svg/Mui';
import Javascript from '../assets/svg/JavaScript';
import Typescript from '../assets/svg/Typescript';
import React from '../assets/svg/React';
import Node from '../assets/svg/Node';
import Express from '../assets/svg/Express';
import Mongo from '../assets/svg/Mongo';
import Git from '../assets/svg/Git';
import ISkill from '../models/Skill';
import Postgres from '../assets/svg/Postgres';
import Vue from '../assets/svg/Vue';
import Next from '../assets/svg/Next';

const skills = [
  {
    name: 'HTML',
    icon: Html,
  },
  {
    name: 'CSS',
    icon: Css,
  },
  {
    name: 'Tailwind',
    icon: Tailwind,
  },
  // {
  //   name: 'Mui',
  //   icon: Mui,
  // },
  {
    name: 'JavaScript',
    icon: Javascript,
  },
  {
    name: 'TypeScript',
    icon: Typescript,
  },
  {
    name: 'React & React Native',
    icon: React,
  },
  {
    name: 'Vue',
    icon: Vue
  },
  {
    name: 'Next',
    icon: Next,
  },
  {
    name: 'Node',
    icon: Node,
  },
  {
    name: 'Express',
    icon: Express,
  },
    {
    name: 'PostgreSQL',
    icon: Postgres,
  },
  {
    name: 'MongoDB',
    icon: Mongo,
  },
  {
    name: 'Git',
    icon: Git,
  },
];

export const namedSkills: { [key: string]: ISkill } = skills.reduce(
  (acc, current: ISkill) => {
    return { ...acc, [current.name.split(' ')[0].toLowerCase()]: current };
  },
  {}
);

export default skills;
