import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Icon from "@/app/components/_baseComponents/Icon";

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
    <>
      <button onClick={toggleMenu}>
        <Icon
          icon="bars3BottomRight"
          className="mr-1 h-6 w-6 text-light-text-primary dark:text-dark-text-primary"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.section
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full origin-top bg-light-tertiary dark:bg-dark-tertiary"
          >
            <section className="container w-[90%] py-4 m-auto flex justify-center flex-col">
              <section className="flex justify-between">
                <span className="text-[1rem] font-bold text-ligth-text-contrast dark:text-dark-text-contrast">
                  Bruno Tassinari
                </span>
                <button onClick={toggleMenu}>
                  <Icon
                    icon="xMark"
                    className="mr-1 h-6 w-6 text-ligth-text-contrast dark:text-dark-text-contrast"
                  />
                </button>
              </section>
            </section>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
