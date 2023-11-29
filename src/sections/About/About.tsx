import Container from '../../components/Container';
import Summary from './components/Summary';
import Background from './components/Background';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

const About = () => {
  return (
    <section id='about' className='bg-light dark:bg-bg-dark relative py-[64px]'>
      <Background />
      <Container title='About' className='flex flex-col h-full pt-5'>
        <Summary />
        <Skills />
        <Timeline />
      </Container>
    </section>
  );
};

export default About;
