import { useRef } from 'react';
import Scroller from './components/Scroller';
import Background from './components/Background';
import HeroContent from './components/HeroContent';
import Container from '../../components/Container';

const Hero = () => {
  const content = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!content.current) return;

    const xLocation = e.clientX;
    const yLocation = e.clientY;

    content.current.style.transform = `translate(${-xLocation / 95}px, ${
      -yLocation / 95
    }px)`;
  };

  return (
    <section
      id='hero'
      className='h-screen bg-light dark:bg-bg-dark relative overflow-hidden pt-[56px] tall:py-[100px] tall:h-auto'
      // onMouseMove={handleMouseMove}
    >
      <Background />
      <Container className='relative z-10 flex gap-10 justify-center items-center flex-col h-full lg:flex-row xl:justify-between xl:flex-row tall:justify-normal animate-fly-in'>
        <HeroContent />
      </Container>
      <Scroller />
    </section>
  );
};

export default Hero;
