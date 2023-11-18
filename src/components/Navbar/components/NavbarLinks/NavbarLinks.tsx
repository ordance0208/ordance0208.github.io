import sections from '../../../../utils/sectionList';

const NavbarLinks = () => {
  return (
    <nav className={`hidden lg:flex list-none gap-6 text-white font-medium`}>
      {sections.map((section: string) => (
        <li>
          <a className='hover:text-accent' href={`#${section.toLowerCase()}`}>
            {section}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default NavbarLinks;
