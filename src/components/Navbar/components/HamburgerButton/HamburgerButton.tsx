import { UilBars, UilTimes } from '@iconscout/react-unicons';
import IconButon from '../../../IconButon';

interface Props {
  hamburgerMenuOpened: boolean;
  setHamburgerMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton = ({
  hamburgerMenuOpened,
  setHamburgerMenuOpened,
}: Props) => {
  return (
    <div className='lg:hidden relative z-10'>
      <IconButon onClick={() => setHamburgerMenuOpened((prev) => !prev)}>
        {hamburgerMenuOpened ? (
          <UilTimes color='#FAFAFA' />
        ) : (
          <UilBars color='#FAFAFA' />
        )}
      </IconButon>
    </div>
  );
};

export default HamburgerButton;
