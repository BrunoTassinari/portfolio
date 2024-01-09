"use client";

import { useState, useEffect } from "react";
import ToggleTheme from "@components/ToggleTheme";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="p-[20px] py-3 bg-light-primary dark:bg-dark-primary border-b-primary border-b-4">
      <div className="container flex items-center justify-between">
        <span className="text-base">Bruno Tassinari</span>

        <div className="flex justify-between items-center w-1/5">
          <ToggleTheme />
          <button>
            <Bars3BottomRightIcon className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
