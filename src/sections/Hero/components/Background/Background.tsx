const Background = () => {
  return (
    <>
      <div className='w-[400px] h-[400px] bg-[#eeeeee] absolute top-[18%] left-[25%] blur-[40px] z-1 opacity-10 rounded-full'></div>
      <div className='w-[300px] h-[300px] bg-[#eeeeee] absolute top-[70%] left-[60%] blur-[40px] z-1 opacity-10 rounded-full'></div>
      <div className='flex gap-20 absolute top-[60%] left-[10%] animate-left-right'>
        <p className='text-[220px] whitespace-nowrap text-accent opacity-10 font-bold'>
          Full-Stack Developer
        </p>
        <p className='text-[220px] whitespace-nowrap text-accent opacity-10 font-bold'>
          Web Developer
        </p>
        <p className='text-[220px] whitespace-nowrap text-accent opacity-10 font-bold'>
          Mobile Developer
        </p>
      </div>
    </>
  );
};

export default Background;
