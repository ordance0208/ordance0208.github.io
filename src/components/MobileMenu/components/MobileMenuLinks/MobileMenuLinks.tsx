import sections from '../../../../utils/sectionList';

interface Props {
  hamburgerMenuOpened: boolean;
  setHamburgerMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuLinks = ({
  hamburgerMenuOpened,
  setHamburgerMenuOpened,
}: Props) => {
  return (
    <>
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
    </>
  );
};

export default MobileMenuLinks;
