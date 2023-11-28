import { useRef } from 'react';
import Button from '../../components/Button';
import Scroller from './components/Scroller';
import Background from './components/Background';
import Typograpghy from '../../components/Typography';
import me from '../../assets/img/me.jpg';
import resume from '../../assets/pdf/resume.pdf';

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
      <div
        className='relative z-10 flex gap-10 justify-center items-center flex-col h-full max-w-[90%] m-auto lg:flex-row xl:justify-between xl:max-w-[1144px] xl:flex-row 2xl:max-w-[1440px] tall:justify-normal animate-fly-in'
        ref={content}
      >
        <div className='w-[100%] lg:flex-1 xl:max-w-[720px]'>
          <Typograpghy
            variant='h1'
            className='text-center leading-[32px] text-[24px] font-bold mb-1 lg:text-left lg:text-[28px] xl:leading-[56px] xl:text-[56px] xl:mb-0'
          >
            Hi, my name is <span className='text-accent'>Ordan.</span>
          </Typograpghy>
          <Typograpghy
            variant='h3'
            className='text-center text-[20px] font-semibold mb-3 lg:text-left xl:text-[36px]'
          >
            I am a <span className='text-accent'>Full-Stack</span> Developer.
            💻📱
          </Typograpghy>
          <Typograpghy className='text-center text-[14px] font-normal xs:text-[18px] lg:text-left xl:text-[18px]'>
            From designing elegant front-end interfaces to architecting robust
            back-end systems, I thrive on transforming ideas into innovative and
            user-centric solutions. Let's code the future together! 🚀
          </Typograpghy>
          <div className='flex gap-5 mt-4 justify-center lg:justify-start'>
            <a href='#contact'>
              <Button className='text-[15px]'>Get in touch</Button>
            </a>
            <a href={resume} target='_blank' rel='noopener noreferrer'>
              <Button className='text-[15px]' variant='secondary'>
                Resume
              </Button>
            </a>
          </div>
        </div>
        <div>
          <img
            className='rounded-full w-[250px] h-[250px] relative z-[1] border-4 border-accent dark:border-light select-none xl:w-[350px] xl:h-[350px] 2xl:w-[500px] 2xl:h-[500px] animate-grow'
            src={me}
            alt='me'
          />
        </div>
      </div>
      <Scroller />
    </section>
  );
};

export default Hero;
