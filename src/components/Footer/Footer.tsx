import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <div className='bg-slate-900 p-3 flex flex-col gap-2 items-center justify-center'>
      <div className='flex gap-3'>
        <UilLinkedin className='text-accent' size={42} />
        <UilGithub className='text-accent' size={42} />
        <UilFacebook className='text-accent' size={42} />
      </div>
      <p className='text-[#FAFAFA] '>
        Copyright &copy; 2023, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
