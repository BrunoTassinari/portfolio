import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Icon from '@/app/components/baseComponents/Icon';
import anchors from '@/app/constants/anchors';

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <div>
      <button type="button" onClick={toggleMenu}>
        <Icon
          icon="bars3BottomRight"
          className="mr-1 h-6 w-6 text-darkBlue dark:text-white"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.section
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full origin-top bg-strokeBlue dark:bg-lightBlue"
          >
            <section className="container w-[90%] py-4 m-auto flex justify-center flex-col">
              <section className="flex flex-col gap-20">
                <div className="flex justify-between">
                  <span className="text-[1.4rem] font-bold text-white dark:text-gray">
                    Bruno Tassinari
                  </span>
                  <button type="button" onClick={toggleMenu}>
                    <Icon
                      icon="xMark"
                      className="mr-1 h-8 w-8 text-white dark:text-gray"
                    />
                  </button>
                </div>
                <div className="flex justify-center ">
                  <ul className="flex flex-col gap-8">
                    {anchors.map((anchor) => (
                      <li
                        key={anchor.id}
                        className="text-center hover:transform hover:scale-110 transition-all hover:text-lightBlue"
                      >
                        <Link
                          href={`#${anchor.id}`}
                          className="text-[1.3rem] font-bold text-white dark:text-gray "
                          onClick={toggleMenu}
                        >
                          {anchor.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </section>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
