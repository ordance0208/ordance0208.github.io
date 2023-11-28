import { UilMouseAlt, UilAngleDoubleDown } from '@iconscout/react-unicons';

const Scroller = () => {
  return (
    <a href='#about'>
      <div className='hidden absolute z-10 top-[90%] left-[50%] translate-x-[-50%] flex-col hover:cursor-pointer lg:flex xl:top-[85%] 2xl:top-[85%] animate-scroll'>
        <UilMouseAlt className='text-dark dark:text-light xl:w-[36px] xl:h-[36px] ' />
        <UilAngleDoubleDown className='text-dark dark:text-light xl:w-[36px] xl:h-[36px] ' />
      </div>
    </a>
  );
};

export default Scroller;
