import Typography from '../Typography/Typography';

interface Props {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Container = ({ title, children, className }: Props) => {
  return (
    <div
      className={`max-w-[90%] m-auto xl:max-w-[1144px] 2xl:max-w-[1440px] ${className}`}
    >
      {title && (
        <Typography
          variant='h2'
          className='text-[28px] lg:text-[42px] font-bold mb-2 lg:mb-5'
        >
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};

export default Container;
