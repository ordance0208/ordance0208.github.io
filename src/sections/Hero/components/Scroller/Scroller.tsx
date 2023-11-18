import { UilMouseAlt, UilAngleDoubleDown } from '@iconscout/react-unicons';

const Scroller = () => {
  return (
    <div className='absolute top-[90%] 2xl:top-[85%] xl:top-[85%] left-[50%] translate-x-[-50%] xl:flex 2xl:flex flex-col hover:cursor-pointer animate-scroll'>
      <UilMouseAlt
        className='xs:w-[36px] xs:h-[36px] xl:w-[42px] xl:h-[42px]'
        color={'#FAFAFA'}
      />
      <UilAngleDoubleDown
        className='xs:w-[36px] xs:h-[36px] xl:w-[42px] xl:h-[42px]'
        color={'#FAFAFA'}
      />
    </div>
  );
};

export default Scroller;
