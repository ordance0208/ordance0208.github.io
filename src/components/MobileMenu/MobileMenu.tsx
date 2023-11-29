import sections from '../../utils/sectionList';
import SocialLinks from '../SocialLinks';

interface Props {
  hamburgerMenuOpened: boolean;
  setHamburgerMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ hamburgerMenuOpened, setHamburgerMenuOpened }: Props) => {
  return (
    <nav
      className={`list-none text-white font-medium fixed top-[65px] left-0 w-screen h-[calc(100vh-65px)] bg-light dark:bg-slate-900 flex flex-col justify-center items-center text-[32px] gap-10 z-30
  ${hamburgerMenuOpened ? 'animate-fly-in' : 'animate-fly-out'} tall:flex-row lg:hidden`}
    >
      {sections.map((section: string) => (
        <li
          key={section}
          className={`uppercase opacity-0 ${
            hamburgerMenuOpened ? 'animate-fly-in-delay' : ''
          }`}
        >
          <a
            className='text-dark dark:text-light dark:hover:text-accent hover:text-accent'
            href={`#${section.toLowerCase()}`}
            onClick={() => setHamburgerMenuOpened(false)}
          >
            {section}
          </a>
        </li>
      ))}
      <div
        className={`opacity-0 flex gap-3 absolute top-[80%] ${
          hamburgerMenuOpened ? 'animate-fly-in-delay' : ''
        } tall:top-[75%] lg:hidden`}
      >
        <SocialLinks />
      </div>
    </nav>
  );
};

export default MobileMenu;
