import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import Typography from '../../../../components/Typography';

const ContactEmail = () => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!copied) return;

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('ordance01@yahoo.com');
    setCopied(true);
  };

  return (
    <div className='flex flex-col gap-3 lg:gap-5 flex-1'>
      <Typography
        textColor='text-accent'
        className='text-[22px] lg:text-[28px] font-semibold'
      >
        Want to get in touch?
      </Typography>
      <a href='mailto:ordance01@yahoo.com'>
        <Button className='w-[100%] lg:w-[50%]'>Send me an email</Button>
      </a>
      <div className='flex gap-3 w-[100%] lg:w-[50%] items-center'>
        <div className='h-[2px] rounded-sm my-1 bg-slate-600 flex-1'></div>
        <Typography className='text-[14px] lg:text-[16px]'>OR</Typography>
        <div className='w-[25%%] h-[2px] rounded-sm my-1 bg-slate-600 flex-1'></div>
      </div>
      <Button
        variant='secondary'
        onClick={copyToClipboard}
        disabled={copied}
        className='w-[100%] lg:w-[50%]'
      >
        {copied ? 'Copied!' : 'Copy to clipboard'}
      </Button>
    </div>
  );
};

export default ContactEmail;
