import skills from '../../../../utils/skills';
import ISkill from '../../../../models/Skill';
import Skill from '../../../../components/Skill';
import Typograpghy from '../../../../components/Typography';

const Skills = () => {
  return (
    <div className='flex flex-col flex-wrap w-full justify-center items-center mt-[128px]'>
      <Typograpghy className='text-[28px] lg:text-[42px] font-bold mb-2 mt-10 lg:mb-5'>
        Languages & Technologies
      </Typograpghy>
      <div className='flex gap-5 w-full flex-wrap justify-center items-center'>
        {skills.map((skill: ISkill) => {
          return <Skill key={skill.name} name={skill.name} Icon={skill.icon} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
