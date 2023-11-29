import IJob from '../../models/Job';
import Typography from '../Typography/Typography';

interface Props {
  job: IJob;
}

const ExperienceBox = ({
  job: { role, employer, type, arrangement, description, startDate, endDate },
}: Props) => {
  return (
    <div
      className='p-4 bg-accent relative
      } rounded-xl'
    >
      <Typography textColor='text-light' className='font-bold text-[20px] lg:text-[24px]'>{role}</Typography>
      <Typography textColor='text-[lightgray]' className='text-[16px] lg:text-[18px] font-semibold'>
        {`${employer} - ${type} (${arrangement}) ${startDate} - ${endDate}`}
      </Typography>
      <Typography textColor='text-light'>
        {description.map((desc: string) => (
          <>
            {`- ${desc}`} <br />
          </>
        ))}
      </Typography>
      <div
        className={`absolute rounded-full h-[20px] w-[20px] bg-accent top-[50%] translate-y-[-50%] left-[-44px]`}
      ></div>
    </div>
  );
};

export default ExperienceBox;
