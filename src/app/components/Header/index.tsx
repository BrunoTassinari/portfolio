'use client';

import ToggleTheme from '@components/ToggleTheme';
import Link from 'next/link';
import Menu from '@/app/components/baseComponents/Menu';
import anchors from '@/app/constants/anchors';

const Header = () => (
  <header className="bg-white dark:bg-gray border-b-strokeBlue dark:border-b-lightBlue border-b-[1px] fixed z-30 w-[100%]">
    <nav className="max-w-[96%] mx-auto py-3 flex items-center justify-between">
      <span className="sm:w-[20%] text-[1rem] lg:text-[1.2rem] font-bold">
        Bruno Tassinari
      </span>

      <div className="justify-between items-center hidden lg:flex">
        <ul className="flex gap-8">
          {anchors.map((anchor) => (
            <li
              key={anchor.id}
              className="text-center hover:transform transition-all ease-in hover:text-lightBlue"
            >
              <Link
                href={`#${anchor.id}`}
                className="text-[0.9rem] lg:text-[1rem]"
              >
                {anchor.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[20%] justify-end hidden lg:flex">
        <ToggleTheme />
      </div>
      <div className="flex justify-between items-center lg:hidden">
        <ToggleTheme />
        <Menu />
      </div>
    </nav>
  </header>
);

export default Header;
