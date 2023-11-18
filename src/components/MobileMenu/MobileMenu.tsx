import sections from '../../utils/sectionList';
import { UilLinkedin, UilGithub, UilFacebook } from '@iconscout/react-unicons';

interface Props {
  hamburgerMenuOpened: boolean;
}

const MobileMenu = ({ hamburgerMenuOpened }: Props) => {
  return (
    <nav
      className={`lg:hidden list-none text-white font-medium fixed top-[65px] left-0 w-screen h-[calc(100vh-65px)] bg-slate-900 flex flex-col justify-center items-center text-[32px] gap-10 z-10
  ${hamburgerMenuOpened ? 'animate-fly-in' : 'animate-fly-out'}`}
    >
      {sections.map((section: string) => (
        <li
          className={`uppercase  opacity-0 ${
            hamburgerMenuOpened ? 'animate-fly-in-delay' : ''
          }`}
        >
          <a className='hover:text-accent' href={`#${section.toLowerCase()}`}>
            {section}
          </a>
        </li>
      ))}
      <div
        className={`lg:hidden opacity-0 flex gap-3 absolute top-[90%] ${
          hamburgerMenuOpened ? 'animate-fly-in-delay' : ''
        }`}
      >
        <UilLinkedin className='text-accent' size={42} />
        <UilGithub className='text-accent' size={42} />
        <UilFacebook className='text-accent' size={42} />
      </div>
    </nav>
  );
};

export default MobileMenu;
