"use client";

import ToggleTheme from "@components/ToggleTheme";
import Mounted from "@baseComponents/Mounted";
import Menu from "@baseComponents/Menu";

const Header = () => {
  return (
    <Mounted>
      <header className="bg-light-primary dark:bg-dark-primary border-b-light-tertiary dark:border-b-dark-tertiary border-b-[1px]">
        <nav className="container w-[90%] py-3 m-auto flex items-center justify-between">
          <span className="text-[1rem] font-bold">Bruno Tassinari</span>
          <section className="w-[20%] flex justify-between items-center">
            <ToggleTheme />
            <Menu />
          </section>
        </nav>
      </header>
    </Mounted>
  );
};

export default Header;
