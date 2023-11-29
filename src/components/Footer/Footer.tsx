import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';
import Typography from '../Typography';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <div className='border-t-[1px] border-[#eeeeee] dark:border-t-0 dark:bg-slate-900 p-3 flex flex-col gap-3 items-center justify-center'>
      <SocialLinks />
      <Typography className='font-semibold'>
        Copyright &copy; 2023, All rights reserved
      </Typography>
    </div>
  );
};

export default Footer;
