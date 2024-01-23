import Image from "next/image";
import React from "react";

import Subtitle from "@baseComponents/Subtitle";
import Icon from "../Icon";

type ProjectCardProps = {
  project: any;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const images = require(`../../../../../public/assets/images/${project.image}.png`);

  const [openProjectInfo, setOpenProjectInfo] = React.useState(false);

  const handleProjectClick = (e: any) => {
    setOpenProjectInfo((prevState) => !prevState);
  };

  return (
    <>
      <li
        className="w-[100%] bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-xl relative"
        onClick={handleProjectClick}
      >
        <div>
          <Image
            src={images}
            alt={project.alt}
            className="object-cover rounded-md"
          />
          <div className="px-4 py-1 w-[100%] h-[100%] flex flex-col justify-center items-center bg-white-rgba dark:bg-black-rgba absolute bottom-0 rounded-md">
            <p className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary truncate block capitalize">
              {project.name}
            </p>
            <Subtitle>{project.subtitle}</Subtitle>
          </div>
        </div>
      </li>

      {openProjectInfo && (
        <div className="fixed top-0 left-0 w-full h-full bg-light-secondary dark:bg-dark-secondary rounded-xl flex flex-col justify-center">
          <div className="flex justify-between items-center px-4 py-1">
            <p className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary truncate block capitalize">
              {project.name}
            </p>
            <button onClick={handleProjectClick}>
              <Icon
                icon="xMark"
                className="mr-1 h-6 w-6 text-ligth-text-primary dark:text-dark-text-primary"
              />
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
          <div className="px-4 py-1">
            <p className="text-base text-light-text-primary dark:text-dark-text-primary">
              {project.link}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
