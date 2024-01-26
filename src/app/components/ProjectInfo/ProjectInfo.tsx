import Image from 'next/image';
import Modal from 'react-modal';
import Icon from '@components/Icon';

type ProjectInfoProps = {
  project: any;
  openDetails: boolean;
  toogleOpenDetails: (e: any) => void;
};

const ProjectInfo = ({
  project,
  openDetails,
  toogleOpenDetails,
}: ProjectInfoProps) => {
  const img = require(`../../../../../public/assets/images/${project.image}.png`);

  if (!openDetails) return null;

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openDetails}
      className="fixed w-[30%] h-[30%] bg-light-secondary dark:bg-dark-secondary rounded-xl flex flex-col"
    >
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
  );
};

export default ProjectInfo;
