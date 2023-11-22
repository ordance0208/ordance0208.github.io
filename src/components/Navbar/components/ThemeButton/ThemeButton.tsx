import { UilMoon, UilSun } from '@iconscout/react-unicons';
import IconButon from '../../../IconButon';
import useTheme from '../../../../hooks/useTheme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButon onClick={toggleTheme}>
      {theme === 'dark' ? (
        <UilSun color='#FAFAFA' />
      ) : (
        <UilMoon color='#FAFAFA' />
      )}
    </IconButon>
  );
};

export default ThemeButton;
