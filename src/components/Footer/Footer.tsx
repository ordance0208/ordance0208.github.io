import Typography from '../Typography';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <div className='border-t-[1px] border-[#eeeeee] dark:border-t-0 dark:bg-slate-900 p-3 flex flex-col gap-3 items-center justify-center'>
      <SocialLinks />
      <Typography className='font-semibold'>
        Copyright &copy; 2025 - Ordan Gramatov
      </Typography>
    </div>
  );
};

export default Footer;
