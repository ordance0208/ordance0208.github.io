interface IProject {
  name: string;
  description: string;
  technologiesUsed: string[];
  screenshots: string[];
  githubLink: string;
  liveDemo?: string;
}

export default IProject;
