import { useState } from 'react';
import sections from '../../utils/sectionList';
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import IconButon from '../IconButon';
import MobileMenu from '../MobileMenu';
import ThemeButton from './components/ThemeButton/ThemeButton';
import Typograpghy from '../Typography/Typograpghy';

const Navbar = () => {
  const [hamburgerMenuOpened, setHamburgerMenuOpened] =
    useState<boolean>(false);

  return (
    <>
      <div className='py-3 fixed w-full backdrop-blur-sm top-0 right-0 z-10 border-b border-slate-900/30 bg-white/30 dark:bg-slate-900/50'>
        <div className='flex items-center justify-between mx-auto max-w-[90%] xl:max-w-[1144px] 2xl:max-w-[1440px]'>
          <a href='#hero'>
            <Typograpghy className='font-semibold text-[20px]'>
              <span className='text-accent font-bold'>{'<'}</span>/
              <span className='text-accent font-bold'>{'>'}</span> Ordan
              Gramatov
            </Typograpghy>
          </a>
          <div className='flex items-center gap-1 sm:gap-5'>
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
            <ThemeButton />
            <div className='relative z-10 max-h-[40px] lg:hidden'>
              <IconButon
                onClick={() => setHamburgerMenuOpened((prev) => !prev)}
              >
                {hamburgerMenuOpened ? (
                  <UilTimes className='text-dark dark:text-light' />
                ) : (
                  <UilBars className='text-dark dark:text-light' />
                )}
              </IconButon>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        hamburgerMenuOpened={hamburgerMenuOpened}
        setHamburgerMenuOpened={setHamburgerMenuOpened}
      />
    </>
  );
};

export default Navbar;
