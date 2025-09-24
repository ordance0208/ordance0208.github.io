import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';
import Typography from '../../../../components/Typography';
import meAbout from '../../../../assets/img/me-about.png';

const Summary = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <img
        src={meAbout}
        alt='me'
        className='h-[400px] max-w-[60%] inlin-block mx-auto lg:h-[450px] rounded-xl lg:flex-1 object-cover'
      />
      <div className='flex-2 flex flex-col mt-4 lg:ml-10 lg:mt-0'>
        <Typography className='text-[18px] lg:text-[20px] leading-7'>
          Hello 👋, I am Ordan Gramatov, a 24-year-old Full-Stack
          Software Developer based in Veles, North Macedonia. Started off my career as a
          Front-End developer where I've honed my skills in creating user-friendly
          and visually appealing interfaces with amazing functionality. Transitioning into Full-Stack
          development has been an exciting journey. It's allowed me to
          seamlessly connect the dots between the client and the server.
        </Typography>
        <Typography className='text-[18px] lg:text-[20px] pt-[20px] leading-7'>
          Feel free to explore my portfolio, and don't hesitate to reach out for
          a chat about potential job offer or any questions you might have.
        </Typography>
        <div className='flex gap-2 flex-col mt-4 lg:gap-4 lg:flex-row lg:mt-[auto]'>
          <a
            href='https://www.linkedin.com/in/ordan-gramatov/'
            target='_blank'
            rel='noopener noreferrer'
            className='relative z-1'
          >
            <div className='flex gap-2 items-center'>
              <UilLinkedin className='text-accent' size={42} />
              <Typography className='text-[18px] lg:text-[20px]'>
                ordan-gramatov
              </Typography>
            </div>
          </a>
          <a
            href='https://github.com/ordance0208/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex gap-2 items-center'>
              <UilGithub className='text-accent' size={42} />
              <Typography className='text-[18px] lg:text-[20px]'>
                ordance0208
              </Typography>
            </div>
          </a>
          <a
            href='https://www.facebook.com/ordancheg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex gap-2 items-center'>
              <UilFacebook className='text-accent' size={42} />
              <Typography className='text-[18px] lg:text-[20px]'>
                ordancheg
              </Typography>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Summary;
