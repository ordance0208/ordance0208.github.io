import Modal from 'react-modal';
import IProject from '../../../../models/Project';
import ISkill from '../../../../models/Skill';
import { UilTimes } from '@iconscout/react-unicons';
import Typography from '../../../../components/Typography';
import IconButon from '../../../../components/IconButon';
import Button from '../../../../components/Button';
import Carousel from '../Carousel';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: 999,
    position: 'relative',
  },
  overlay: {
    background: 'rgba(0,0,0,.3)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
};

interface Props {
  selectedProject: IProject | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

const ProjectDialog = ({ selectedProject, setSelectedProject }: Props) => {
  return (
    <Modal
      isOpen={!!selectedProject}
      onRequestClose={() => setSelectedProject(null)}
      style={customStyles}
      ariaHideApp={false}
      className='bg-[#EFEFEF] dark:bg-slate-900 rounded-xl w-[90%] lg:w-[1000px]'
    >
      <div className='flex items-center justify-between p-3'>
        <Typography className='text-[#FAFAFA] flex-grow-[1] font-semibold text-[20px]'>
          {selectedProject?.name}
        </Typography>
        <IconButon
          className='justify-self-end'
          onClick={() => setSelectedProject(null)}
        >
          <UilTimes className='text-dark dark:text-light' />
        </IconButon>
      </div>
      <Carousel selectedProject={selectedProject} />
      <div className='flex flex-col lg:flex-row lg:items-center gap-3 p-3 mr-4'>
        <div className='flex gap-3'>
          {selectedProject?.liveDemo && (
            <a
              href={selectedProject?.liveDemo}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='text-[12px] md:text-[14px]'>Live Demo</Button>
            </a>
          )}
          <a
            href={selectedProject?.githubLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='text-[12px] md:text-[14px]'>Github Repo</Button>
          </a>
        </div>
        <div className='flex gap-5 lg:ml-5'>
          {selectedProject?.technologiesUsed.map((technology: ISkill) => {
            return <technology.icon key={technology.name} size={24} />;
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDialog;
