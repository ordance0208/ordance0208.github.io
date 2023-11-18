import { useState } from 'react';
import MobileMenu from '../MobileMenu';
import NavbarLinks from './components/NavbarLinks';
import HamburgerButton from './components/HamburgerButton';
import ThemeButton from './components/ThemeButton/ThemeButton';

const Navbar = () => {
  const [hamburgerMenuOpened, setHamburgerMenuOpened] =
    useState<boolean>(false);

  return (
    <>
      <div className='py-3 px-7 fixed w-full backdrop-blur-sm top-0 right-0 z-10 border-b border-slate-900/10 bg-slate-900/50'>
        <div className='flex items-center justify-between 2xl:max-w-[1440px] xl:max-w-[1144px] mx-auto'>
          <p className='font-semibold text-xl text-white'>
            <span className='text-accent font-bold'>{'<'}</span>/
            <span className='text-accent font-bold'>{'>'}</span> Ordan Gramatov
          </p>
          <div className={`flex items-center gap-1 sm:gap-5`}>
            <NavbarLinks />
            <ThemeButton />
            <HamburgerButton
              hamburgerMenuOpened={hamburgerMenuOpened}
              setHamburgerMenuOpened={setHamburgerMenuOpened}
            />
          </div>
        </div>
      </div>
      <MobileMenu hamburgerMenuOpened={hamburgerMenuOpened} />
    </>
  );
};

export default Navbar;
