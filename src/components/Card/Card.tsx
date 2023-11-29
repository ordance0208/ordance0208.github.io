import Button from '../Button';
import IProject from '../../models/Project';
import Typography from '../Typography';

interface Props {
  onClick: any;
  project: IProject;
}

const Card = ({
  project: { name, description, screenshots },
  onClick,
}: Props) => {
  return (
    <div className='flex flex-1 min-w-[255px] flex-col min-h-[410px] drop-shadow-md rounded-md bg-light dark:bg-slate-900/80 overflow-hidden sm:max-w-[255px] lg:max-w-[350px] lg:w-[350px] '>
      <div className='h-[170px] w-full overflow-hidden'>
        <img
          src={screenshots[0]}
          alt='project'
          className='h-full w-full object-cover hover:scale-110 transition-transform'
        />
      </div>
      <div className='p-4 flex-1 flex flex-col'>
        <Typography className='text-[#FAFAFA] font-semibold text-[18px]'>
          {name}
        </Typography>
        <Typography className='text-[#FAFAFA] text-[14px] mb-3'>
          {description}
        </Typography>
        <Button onClick={onClick} className='text-[14px] mt-auto'>
          Learn more...
        </Button>
      </div>
    </div>
  );
};

export default Card;
