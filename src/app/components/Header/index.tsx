'use client';

import ToggleTheme from '@components/ToggleTheme';
import Menu from '@/app/components/baseComponents/Menu';

const Header = () => (
  <header className="bg-white dark:bg-gray border-b-strokeBlue dark:border-b-lightBlue border-b-[1px] fixed z-30 w-[100%]">
    <nav className="container w-[90%] py-3 m-auto flex items-center justify-between">
      <span className="text-[1rem] font-bold">Bruno Tassinari</span>
      <section className="w-[20%] flex justify-between items-center">
        <ToggleTheme />
        <Menu />
      </section>
    </nav>
  </header>
);

export default Header;
