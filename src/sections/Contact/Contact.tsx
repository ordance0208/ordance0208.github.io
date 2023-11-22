import {
  UilMapMarker,
  UilPhone,
  UilEnvelopeAlt,
} from '@iconscout/react-unicons';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-light dark:bg-[#090e19] relative py-[64px]'
    >
      <div className='max-w-[90%] m-auto 2xl:max-w-[1440px] xl:max-w-[1144px] flex flex-col h-full pt-5'>
        <Typography className='text-[28px] lg:text-[42px] font-bold mb-2 lg:mb-5'>
          Contact
        </Typography>
        <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row'>
          <div className='flex flex-col gap-3 lg:gap-5 flex-1'>
            <p className='text-[22px] lg:text-[28px] font-semibold text-accent'>
              Contact Details
            </p>
            <div className='flex items-center gap-2'>
              <UilMapMarker className='text-dark dark:text-light' size={24} />
              <Typography className='lg:text-[20px]'>
                Veles, Macedonia
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <UilPhone className='text-dark dark:text-light' size={24} />
              <Typography className='lg:text-[20px]'>
                +38977989827
              </Typography>
            </div>
            <div className='flex items-center gap-2'>
              <UilEnvelopeAlt className='text-dark dark:text-light' size={24} />
              <Typography className='lg:text-[20px]'>
                ordance01@yahoo.com
              </Typography>
            </div>
          </div>
          <div className='flex flex-col gap-3 lg:gap-5 flex-1'>
            <p className='text-[22px] lg:text-[28px] font-semibold text-accent'>
              Want to get in touch?
            </p>
            <Button className='w-[100%] lg:w-[50%]'>Send me an email</Button>
            <div className='flex gap-3 w-[100%] lg:w-[50%] items-center'>
              <div className='h-[2px] rounded-sm my-1 bg-slate-600 flex-1'></div>
              <Typography className='text-[14px] lg:text-[16px]'>OR</Typography>
              <div className='w-[25%%] h-[2px] rounded-sm my-1 bg-slate-600 flex-1'></div>
            </div>
            <Button variant='secondary' className='w-[100%] lg:w-[50%]'>
              Copy to clipboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
