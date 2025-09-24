import Typography from '../../../../components/Typography';
import Button from '../../../../components/Button';
import me from '../../../../assets/img/me.jpg';
import resume from '../../../../assets/pdf/resume.pdf';

const HeroContent = () => {
  return (
    <>
      <div className='w-[100%] lg:flex-1 xl:max-w-[720px]'>
        <Typography
          variant='h1'
          className='text-center leading-[32px] text-[24px] font-bold mb-1 lg:text-left lg:text-[28px] xl:leading-[56px] xl:text-[56px] xl:mb-0'
        >
          Hi, my name is <span className='text-accent'>Ordan.</span>
        </Typography>
        <Typography
          variant='h3'
          className='text-center text-[20px] font-semibold mb-3 lg:text-left xl:text-[36px]'
        >
          I am a <span className='text-accent'>Full-Stack</span> Developer. 💻📱
        </Typography>
        <Typography className='text-center text-[14px] font-normal xs:text-[18px] lg:text-left xl:text-[18px]'>
          I am highly adaptable, comfortable with problem-solving across the stack, and able to deliver reliable, high-quality results. I enjoy working in collaborative teams, learning new tools quickly, and building products that provide real value to users. 🚀
        </Typography>
        <div className='flex gap-5 mt-4 justify-center lg:justify-start'>
          <a href='#contact'>
            <Button className='text-[15px] py-3'>Get in touch</Button>
          </a>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <Button className='text-[15px] py-[11px]' variant='secondary'>
              Resume
            </Button>
          </a>
        </div>
      </div>
      <div>
        <img
          className='rounded-full w-[250px] h-[250px] relative z-[1] border-4 border-accent dark:border-light select-none xl:w-[350px] xl:h-[350px] 2xl:w-[500px] 2xl:h-[500px] animate-grow'
          src={me}
          alt='portrait of me'
        />
      </div>
    </>
  );
};

export default HeroContent;
