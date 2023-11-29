import projectsList from '../../../../utils/projectList';
import IProject from '../../../../models/Project';
import Card from '../../../../components/Card';

interface Props {
  setSelectedProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

const Projects = ({ setSelectedProject }: Props) => {
  return (
    <div className='flex gap-7 justify-center lg:justify-between items-center flex-col flex-wrap lg:flex-nowrap md:flex-row'>
      {projectsList.map((project: IProject) => (
        <Card
          onClick={() => setSelectedProject(project)}
          key={project.name}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
