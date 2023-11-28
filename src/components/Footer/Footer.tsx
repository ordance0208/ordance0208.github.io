import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';
import Typography from '../Typography';

const Footer = () => {
  return (
    <div className='border-t-[1px] border-[#eeeeee] dark:border-t-0 dark:bg-slate-900 p-3 flex flex-col gap-3 items-center justify-center'>
      <div className='flex gap-3'>
        <a
          href='https://www.linkedin.com/in/ordan-gramatov/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <UilLinkedin className='text-accent' size={42} />
        </a>
        <a
          href='https://github.com/ordance0208/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <UilGithub className='text-accent' size={42} />
        </a>
        <a
          href='https://www.facebook.com/ordancheg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <UilFacebook className='text-accent' size={42} />
        </a>
      </div>
      <Typography className='font-semibold'>
        Copyright &copy; 2023, All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
