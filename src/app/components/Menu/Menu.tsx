import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Mounted from "../Mounted";
import { useState } from "react";

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

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Mounted>
      <button onClick={toggleMenu}>
        <Bars3BottomRightIcon className="h-6 w-6 text-light-text-primary dark:text-dark-text-primary" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full origin-top bg-light-tertiary dark:bg-dark-tertiary"
          >
            <div className="container w-[90%] py-4 m-auto flex justify-center flex-col">
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
    </Mounted>
  );
};

export default Menu;
