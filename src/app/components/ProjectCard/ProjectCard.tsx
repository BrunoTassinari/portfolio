import Image from 'next/image';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Subtitle from '@/app/components/_baseComponents/Subtitle';

import Modal from '@/app/components/_baseComponents/Modal';
import Icon from '@/app/components/_baseComponents/Icon';

type ProjectCardProps = {
  project: any;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const img = require(`../../../../public/assets/images/${project.image}.png`);

  const [openDetails, setOpenDetails] = React.useState(false);

  const toogleOpenDetails = () => {
    setOpenDetails((prevState) => !prevState);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <button
          type="button"
          className="w-[100%] bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-xl"
          onClick={toogleOpenDetails}
        >
          <div className="">
            <Image
              src={img}
              alt={project.alt}
              className="object-cover rounded-md"
            />
            <div className="fixed  px-4 py-1 flex flex-col justify-center items-center bg-white-rgba dark:bg-black-rgba rounded-md">
              <p className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary truncate block capitalize">
                {project.name}
              </p>
              <Subtitle>{project.subtitle}</Subtitle>
            </div>
          </div>
        </button>

        <div className="relative z-10">
          <Modal showModal={openDetails}>
            <div>
              <Image src={img} alt={project.alt} className="object-cover" />
            </div>
            <div className="flex justify-between items-center pt-5 px-4 py-1 border-t-[1px] border-t-light-tertiary dark:border-t-dark-tertiary">
              <div className="flex items-center">
                <p className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary truncate block capitalize mr-3">
                  {project.name}
                </p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Icon icon="arrowTopRight" />
                </a>
              </div>
              <button type="button" onClick={toogleOpenDetails}>
                <Icon icon="xMark" />
              </button>
            </div>
            <div className="px-4 py-1">
              <p className="text-base text-light-text-primary dark:text-dark-text-primary">
                {project.description}
              </p>
            </div>
            <div className="px-4 py-1">
              <p className="text-base text-light-text-primary dark:text-dark-text-primary">
                {project.stack}
              </p>
            </div>

            <div className="px-4 py-1" />
          </Modal>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectCard;
