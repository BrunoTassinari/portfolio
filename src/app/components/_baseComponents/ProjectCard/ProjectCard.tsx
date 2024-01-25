import Image from 'next/image';
import React from 'react';

import Subtitle from '@baseComponents/Subtitle';
import ProjectInfo from '../ProjectInfo';

type ProjectCardProps = {
  project: any;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const img = require(`../../../../../public/assets/images/${project.image}.png`);

  const [openDetails, setOpenDetails] = React.useState(false);

  const toogleOpenDetails = () => {
    setOpenDetails((prevState) => !prevState);
  };

  return (
    <>
      <button
        type="button"
        className="w-[100%] bg-white shadow-md rounded-md duration-500 hover:scale-105 hover:shadow-xl relative"
        onClick={toogleOpenDetails}
      >
        <div>
          <Image
            src={img}
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
      </button>

      <ProjectInfo
        project={project}
        openDetails={openDetails}
        toogleOpenDetails={toogleOpenDetails}
      />
    </>
  );
};

export default ProjectCard;
