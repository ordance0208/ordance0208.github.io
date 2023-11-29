import { useEffect, useState } from 'react';
import IProject from '../../models/Project';
import Background from './components/Background';
import Container from '../../components/Container';
import Projects from './components/Projects';
import ProjectDialog from './components/ProjectDialog';
import Typograpghy from '../../components/Typography';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const toggleScroll = () => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    toggleScroll();
    // eslint-disable-next-line
  }, [selectedProject]);

  return (
    <>
      <section
        id='portfolio'
        className='bg-light dark:bg-bg-dark relative py-[64px]'
      >
        <Background />
        <Container title='Portfolio' className='flex flex-col h-full pt-5'>
          <Typograpghy
            textColor='text-accent'
            className='font-semibold text-[28px] mb-3'
          >
            Some of my projects
          </Typograpghy>
          <Projects setSelectedProject={setSelectedProject} />
        </Container>
      </section>
      <ProjectDialog
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </>
  );
};

export default Portfolio;
