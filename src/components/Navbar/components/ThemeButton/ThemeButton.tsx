import { UilMoon, UilSun } from '@iconscout/react-unicons';
import IconButon from '../../../IconButon';
import useTheme from '../../../../hooks/useTheme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButon onClick={toggleTheme}>
      {theme === 'dark' ? (
        <UilSun className='text-dark dark:text-light' />
      ) : (
        <UilMoon className='text-dark dark:text-light' />
      )}
    </IconButon>
  );
};

export default ThemeButton;
