import Typography from '../../../../components/Typography';

const Background = () => {
  return (
    <>
      <div className='w-[400px] h-[400px] bg-dark dark:bg-light absolute top-[18%] left-[25%] blur-[40px] z-1 opacity-[0.15] dark:opacity-10 rounded-full'></div>
      <div className='w-[300px] h-[300px] bg-dark dark:bg-light absolute top-[60%] left-[60%] blur-[40px] z-1 opacity-[0.15] dark:opacity-10 rounded-full'></div>
      <div className='flex gap-20 absolute top-[60%] left-[10%] animate-left-right'>
        <Typography
          textColor='text-accent'
          className='text-[220px] whitespace-nowrap opacity-10 font-bold'
        >
          Full-Stack Developer
        </Typography>
        <Typography
          textColor='text-accent'
          className='text-[220px] whitespace-nowrap text-accent opacity-10 font-bold'
        >
          Web Developer
        </Typography>
        <Typography
          textColor='text-accent'
          className='text-[220px] whitespace-nowrap text-accent opacity-10 font-bold'
        >
          Mobile Developer
        </Typography>
      </div>
    </>
  );
};

export default Background;
