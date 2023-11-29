import Scroller from './components/Scroller';
import Background from './components/Background';
import HeroContent from './components/HeroContent';
import Container from '../../components/Container';

const Hero = () => {
  return (
    <section
      id='hero'
      className='h-screen bg-light dark:bg-bg-dark relative overflow-hidden pt-[56px] mobile-horizontal:py-[100px] mobile-horizontal:h-auto'
    >
      <Background />
      <Container className='relative z-10 flex gap-10 justify-center items-center flex-col h-full lg:flex-row xl:justify-between xl:flex-row mobile-horizontal:justify-normal animate-fly-in'>
        <HeroContent />
      </Container>
      <Scroller />
    </section>
  );
};

export default Hero;
