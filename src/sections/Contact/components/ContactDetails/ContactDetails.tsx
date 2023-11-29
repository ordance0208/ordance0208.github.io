import {
  UilMapMarker,
  UilPhone,
  UilEnvelopeAlt,
} from '@iconscout/react-unicons';
import Typography from '../../../../components/Typography';

const ContactDetails = () => {
  return (
    <div className='flex flex-col gap-3 lg:gap-5 flex-1'>
      <Typography textColor='text-accent' className='text-[22px] lg:text-[28px] font-semibold'>
        Contact Details
      </Typography>
      <div className='flex items-center gap-2'>
        <UilMapMarker className='text-dark dark:text-light' size={24} />
        <Typography className='lg:text-[20px]'>Veles, Macedonia</Typography>
      </div>
      <div className='flex items-center gap-2'>
        <UilPhone className='text-dark dark:text-light' size={24} />
        <Typography className='lg:text-[20px]'>+38977989827</Typography>
      </div>
      <div className='flex items-center gap-2'>
        <UilEnvelopeAlt className='text-dark dark:text-light' size={24} />
        <Typography className='lg:text-[20px]'>ordance01@yahoo.com</Typography>
      </div>
    </div>
  );
};

export default ContactDetails;
