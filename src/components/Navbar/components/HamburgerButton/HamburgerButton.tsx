import { UilBars, UilTimes } from '@iconscout/react-unicons';
import IconButon from '../../../IconButon';

interface Props {
  hamburgerMenuOpened: boolean;
  setHamburgerMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButtont = ({
  hamburgerMenuOpened,
  setHamburgerMenuOpened,
}: Props) => {
  return (
    <div className='relative z-10 max-h-[40px] lg:hidden'>
      <IconButon onClick={() => setHamburgerMenuOpened((prev) => !prev)}>
        {hamburgerMenuOpened ? (
          <UilTimes className='text-dark dark:text-light' />
        ) : (
          <UilBars className='text-dark dark:text-light' />
        )}
      </IconButon>
    </div>
  );
};

export default HamburgerButtont;
