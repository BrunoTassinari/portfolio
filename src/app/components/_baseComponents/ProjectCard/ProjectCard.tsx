import Image from "next/image";
import React from "react";

import Subtitle from "@baseComponents/Subtitle";

type ProjectCardProps = {
  img: string;
};

const ProjectCard = ({ img }: ProjectCardProps) => {
  const image = require(`../../../../../public/assets/images/${img}.png`);
  return (
    <div className="w-[100%] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative">
      <a href="#">
        <Image
          src={image}
          alt="Picture of the author"
          className="object-cover rounded-t-xl rounded-b-xl"
        />
        <div className="px-4 py-1 w-[100%] h-[100%] flex flex-col justify-center items-center  bg-light-secondary dark:bg-dark-secondary rounded-xl absolute bottom-0 opacity-50">
          <p className="text-lg font-bold text-light-text-primary dark:text-dark-text-primary truncate block capitalize">
            Product Name
          </p>
          <Subtitle>{"dada"}</Subtitle>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
