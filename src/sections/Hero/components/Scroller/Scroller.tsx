import { UilMouseAlt, UilAngleDoubleDown } from '@iconscout/react-unicons';

const Scroller = () => {
  return (
    <a href='#about'>
      <div className='hidden absolute top-[90%] 2xl:top-[85%] xl:top-[85%] left-[50%] translate-x-[-50%] lg:flex 2xl:flex flex-col hover:cursor-pointer animate-scroll'>
        <UilMouseAlt className='xs:w-[36px] xs:h-[36px] xl:w-[42px] xl:h-[42px] text-dark dark:text-light' />
        <UilAngleDoubleDown className='xs:w-[36px] xs:h-[36px] xl:w-[42px] xl:h-[42px] text-dark dark:text-light' />
      </div>
    </a>
  );
};

export default Scroller;
