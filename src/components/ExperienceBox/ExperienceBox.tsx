import IJob from '../../models/Job';

interface Props {
  index: number;
  job: IJob;
}

const ExperienceBox = ({
  index,
  job: { role, employer, type, arrangement, description, startDate, endDate },
}: Props) => {
  return (
    <div
      className={`p-3 bg-accent absolute ${index ? 'top-[350px]' : 'top-12'} ${
        index ? 'right-10' : 'left-10'
      } w-[600px] rounded-md drop-shadow-lg`}
    >
      <p className='font-bold text-white text-[24px]'>{role}</p>
      <p className='text-[lightgray] text-[18px]'>
        {`${employer} - ${type} (${arrangement}) ${startDate} - ${endDate}`}
      </p>
      <p className='text-white text-[17px]'>
        {description.map((item: string) => (
          <>
            {'- '}
            {item}
            <br />
          </>
        ))}
      </p>
      <div
        className={`absolute rounded-full h-[24px] w-[24px] bg-accent top-[50%] translate-y-[-50%] ${
          index ? 'right-[-48px]' : 'left-[-48px]'
        }`}
      ></div>
    </div>
  );
};

export default ExperienceBox;
