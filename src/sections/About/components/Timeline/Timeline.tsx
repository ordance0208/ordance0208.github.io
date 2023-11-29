import experienceList from '../../../../utils/experienceList';
import ExperienceBox from '../../../../components/ExperienceBox';
import Typograpghy from '../../../../components/Typography';

const Timeline = () => {
  return (
    <div>
      <Typograpghy className='text-[28px] text-center lg:text-[42px] font-bold mt-[128px] mb-2 lg:mb-5'>
        Work Experience
      </Typograpghy>
      <div className='flex'>
        <div className='w-1 rounded-md bg-[#eeeeee]'></div>
        <div className='flex-1 pl-[32px] py-3 flex flex-col gap-10'>
          <ExperienceBox job={experienceList[1]} />
          <ExperienceBox job={experienceList[0]} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
