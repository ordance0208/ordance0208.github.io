import ISkill from "./Skill";

interface IProject {
  name: string;
  description: string;
  technologiesUsed: ISkill[];
  screenshots: string[];
  githubLink: string;
  liveDemo?: string;
}

export default IProject;
