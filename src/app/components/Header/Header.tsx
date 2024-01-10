"use client";

import { useTheme } from "next-themes";

import { useState, useEffect } from "react";
import ToggleTheme from "@components/ToggleTheme";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Mounted from "../Mounted";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuAnimation = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  return (
    <Mounted>
      <header
        className={`p-[20px] py-3 bg-light-primary dark:bg-dark-primary border-b-light-tertiary dark:border-b-dark-tertiary border-b-2`}
      >
        <nav className="container flex items-center justify-between">
          <span className="text-base">Bruno Tassinari</span>

          <div className="flex justify-between items-center w-1/5">
            <ToggleTheme />
            <button onClick={toggleMenu}>
              <Bars3BottomRightIcon className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen origin-top bg-light-tertiary dark:bg-dark-tertiary text-black p-[20px] py-4"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <span className="text-base text-ligth-text-contrast dark:text-dark-text-contrast">
                      Bruno Tassinari
                    </span>
                    <button onClick={toggleMenu}>
                      <XMarkIcon className="h-6 w-6 text-ligth-text-contrast dark:text-dark-text-contrast" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </Mounted>
  );
};

export default Header;
