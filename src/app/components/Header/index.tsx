'use client';

import ToggleTheme from '@components/ToggleTheme';
import Link from 'next/link';
import Menu from '@/app/components/baseComponents/Menu';
import anchors from '@/app/constants/anchors';

const Header = () => (
  <header className="bg-white dark:bg-gray border-b-strokeBlue dark:border-b-lightBlue border-b-[1px] fixed z-30 w-[100%]">
    <nav className="max-w-80 xl:max-w-[96%] lg:max-w-4xl md:max-w-3xl sm:max-w-2xl mx-auto py-3 flex items-center justify-between">
      <span className=" w-[20%] text-[1.2rem] font-bold">Bruno Tassinari</span>

      <div className="justify-between items-center hidden sm:flex">
        <ul className="flex gap-8">
          {anchors.map((anchor) => (
            <li
              key={anchor.id}
              className="text-center hover:transform transition-all ease-in hover:text-lightBlue"
            >
              <Link href={`#${anchor.id}`} className="text-[1rem] ">
                {anchor.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[20%] justify-end hidden sm:flex">
        <ToggleTheme />
      </div>
      <div className="w-[20%] justify-between items-center flex sm:hidden">
        <ToggleTheme />
        <Menu />
      </div>
    </nav>
  </header>
);

export default Header;
