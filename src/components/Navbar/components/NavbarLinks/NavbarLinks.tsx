import sections from '../../../../utils/sectionList';

const NavbarLinks = () => {
  return (
    <nav className='hidden list-none gap-6 text-white font-medium lg:flex'>
      {sections.map((section: string) => (
        <ul key={section}>
          <li>
            <a
              className='text-dark dark:text-light hover:text-accent'
              href={`#${section.toLowerCase()}`}
            >
              {section}
            </a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default NavbarLinks;
