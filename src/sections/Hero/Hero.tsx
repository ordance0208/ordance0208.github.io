import { useRef } from 'react';
import Button from '../../components/Button';
import avatar from '../../assets/img/avatar.png';
import me from '../../assets/img/me.jpg';
import Scroller from './components/Scroller';
import Background from './components/Background';

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
      className='tall:pt-[100px] tall:pb-[100px] tall:h-auto hero h-screen bg-[#090e19] relative overflow-hidden pt-[56px]'
      onMouseMove={handleMouseMove}
    >
      <Background />
      <div
        className='animate-fly-in flex gap-10 justify-center items-center flex-col lg:flex-row 2xl:justify-between xl:justify-between h-full max-w-[90%] m-auto 2xl:max-w-[1440px] 2xl:flex-row xl:flex-row xl:max-w-[1144px] tall:justify-normal'
        ref={content}
      >
        <div className='w-[100%] 2xl:max-w-[720px] xl:max-w-[720px] lg:flex-1'>
          <p className='text-[#eeeeee] text-center leading-[32px] text-[24px] font-bold mb-1 lg:text-left lg:text-[28px] 2xl:text-left xl:text-left 2xl:text-[56px] 2xl:leading-[56px] xl:leading-[56px] xl:text-[56px] 2xl:mb-0 xl:mb-0'>
            Hi, my name is <span className='text-accent'>Ordan.</span>
          </p>
          <h3 className='text-[#eeeeee] text-center text-[20px] lg:text-left xl:text-left 2xl:text-left 2xl:text-[36px] xl:text-[36px] font-semibold mb-3'>
            I am a <span className='text-accent'>Full-Stack</span> Developer.
            💻📱
          </h3>
          <p className='text-[#eeeeee] text-center text-[14px] lg:text-left 2xl:text-left xl:text-left 2xl:text-[18px] xl:text-[18px] xs:text-[18px] font-normal'>
            From designing elegant front-end interfaces to architecting robust
            back-end systems, I thrive on transforming ideas into innovative and
            user-centric solutions. Let's code the future together! 🚀
          </p>
          <div className='flex gap-5 mt-4 justify-center lg:justify-start'>
            <Button className='px-2 py-1 text-[15px]'>Get in touch</Button>
            <Button className='px-1 py-1 text-[15px]' variant='secondary'>
              Resume
            </Button>
          </div>
        </div>
        <div>
          <img
            className='rounded-full w-[250px] h-[250px] 2xl:w-[500px] 2xl:h-[500px] select-none xl:w-[350px] xl:h-[350px] animate-grow border-4 border-white relative z-[1]'
            src={avatar}
            alt='me'
          />
        </div>
      </div>
      <Scroller />
    </section>
  );
};

export default Hero;
