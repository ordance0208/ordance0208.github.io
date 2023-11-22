import { useRef } from 'react';
import skills from '../../utils/skills';
import experienceList from '../../utils/experienceList';
import IJob from '../../models/Job';
import ISkill from '../../models/Skill';
import Summary from './components/Summary';
import ExperienceBox from '../../components/ExperienceBox';
import Skill from '../../components/Skill';
import Typograpghy from '../../components/Typography';
import Background from './components/Background';

const About = () => {
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
      id='about'
      className='bg-light dark:bg-[#090e19] relative py-[64px]'
    >
      <Background />
      <div
        ref={content}
        onMouseMove={handleMouseMove}
        className='max-w-[90%] m-auto 2xl:max-w-[1440px] xl:max-w-[1144px] flex flex-col h-full pt-5'
      >
        <Typograpghy
          variant='h2'
          className='text-[28px] lg:text-[42px] font-bold mb-2 lg:mb-5'
        >
          About
        </Typograpghy>
        <Summary />
        <div className='flex flex-col flex-wrap w-full justify-center items-center mt-[128px]'>
          <Typograpghy className='text-[28px] lg:text-[42px] font-bold mb-2 mt-10 lg:mb-5'>
            Languages & Technologies
          </Typograpghy>
          <div className='flex gap-5 w-full flex-wrap justify-center items-center'>
            {skills.map((skill: ISkill) => {
              return (
                <Skill key={skill.name} name={skill.name} Icon={skill.icon} />
              );
            })}
          </div>
        </div>
        <div>
          <Typograpghy className='text-[28px] text-center lg:text-[42px] font-bold mt-[128px] mb-2 lg:mb-5'>
            Work Experience
          </Typograpghy>
          <div className='flex justify-center'>
            <div className='w-2 rounded-md h-[750px] bg-[#eeeeee] relative'>
              {experienceList.map((job: IJob, index: number) => (
                <ExperienceBox index={index} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
