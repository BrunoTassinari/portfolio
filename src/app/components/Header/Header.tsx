"use client";

import ToggleTheme from "@components/ToggleTheme";
import Mounted from "../Mounted";
import Menu from "@components/Menu";

const Header = () => {
  return (
    <Mounted>
      <header className="bg-light-primary dark:bg-dark-primary border-b-light-tertiary dark:border-b-dark-tertiary border-b-2">
        <nav className="container w-[90%] py-3 m-auto flex items-center justify-between">
          <span className="text-base">Bruno Tassinari</span>
          <div className="w-[20%] flex justify-between items-center">
            <ToggleTheme />
            <Menu />
          </div>
        </nav>
      </header>
    </Mounted>
  );
};

export default Header;