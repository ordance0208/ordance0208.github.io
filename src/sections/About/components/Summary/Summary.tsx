import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';
import Typography from '../../../../components/Typography';
import meAbout from '../../../../assets/img/me-about.png';

const Summary = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <img
        src={meAbout}
        className='h-[400px] lg:h-[450px] rounded-xl lg:flex-1 object-cover'
      />
      <div className='flex-2 flex flex-col mt-4 lg:ml-10 lg:mt-0'>
        <Typography className='text-[18px] lg:text-[20px] leading-7'>
          Hello 👋, My name is Ordan Gramatov, a 22-year-old Full-Stack
          Developer from Veles, Macedonia. With 9 months of professional
          experience as a Front-End Developer, Ordan brings a fresh perspective
          to web development. Beyond the screen, Ordan is a curious learner who
          thrives in collaborative settings.
        </Typography>
        <Typography className='text-[18px] lg:text-[20px] pt-[20px] leading-7'>
          Whether you need a Full-Stack Developer or a problem solver, Ordan
          Gramatov is your go-to guy. Join him on his journey as he continues to
          make waves in web development
        </Typography>
        <Typography className='text-[18px] lg:text-[20px] pt-[20px] leading-7'>
          Ordan's work speaks for itself—clean, user-friendly interfaces that
          blend form and function seamlessly. He doesn't just code; he crafts
          digital experiences. His knack for understanding user behavior makes
          his work both beautiful and practical. 🚀
        </Typography>
        <div className='flex gap-2 flex-col mt-4 lg:gap-4 lg:flex-row lg:mt-[auto]'>
          <div className='flex gap-2 items-center'>
            <UilLinkedin className='text-accent' size={42} />
            <Typography className='text-[18px] lg:text-[20px]'>
              ordan-gramatov
            </Typography>
          </div>
          <div className='flex gap-2 items-center'>
            <UilGithub className='text-accent' size={42} />
            <Typography className='text-[18px] lg:text-[20px]'>
              ordance0208
            </Typography>
          </div>
          <div className='flex gap-2 items-center'>
            <UilFacebook className='text-accent' size={42} />
            <Typography className='text-[18px] lg:text-[20px]'>
              ordance0208
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
