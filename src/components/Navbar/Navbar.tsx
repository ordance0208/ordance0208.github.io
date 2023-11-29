import { useState } from 'react';
import ThemeButton from './components/ThemeButton/ThemeButton';
import HamburgerButton from './components/HamburgerButton';
import NavbarLinks from './components/NavbarLinks';
import Typography from '../Typography/';
import MobileMenu from '../MobileMenu';
import Container from '../Container';

const Navbar = () => {
  const [hamburgerMenuOpened, setHamburgerMenuOpened] =
    useState<boolean>(false);

  return (
    <>
      <div className='py-3 fixed w-full backdrop-blur-sm top-0 right-0 z-30 border-b border-slate-900/30 bg-white/30 dark:bg-slate-900/50'>
        <Container className='flex items-center justify-between'>
          <a href='#hero'>
            <Typography className='font-semibold text-[20px]'>
              <span className='text-accent font-bold'>{'<'}</span>/
              <span className='text-accent font-bold'>{'>'}</span> Ordan
              Gramatov
            </Typography>
          </a>
          <div className='flex items-center gap-1 sm:gap-5'>
            <NavbarLinks />
            <ThemeButton />
            <HamburgerButton
              hamburgerMenuOpened={hamburgerMenuOpened}
              setHamburgerMenuOpened={setHamburgerMenuOpened}
            />
          </div>
        </Container>
      </div>
      <MobileMenu
        hamburgerMenuOpened={hamburgerMenuOpened}
        setHamburgerMenuOpened={setHamburgerMenuOpened}
      />
    </>
  );
};

export default Navbar;
