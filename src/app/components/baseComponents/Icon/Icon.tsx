import { Github, LinkedinSquare } from "styled-icons/boxicons-logos";

type IconProps = {
  name: string;
  size?: number;
};

const icons = {
  github: Github,
  linkedin: LinkedinSquare,
} as any;

const Icon = ({ name, size }: IconProps) => {
  const IconTag = icons[name];
  return (
    <IconTag className="h-6 w-6 text-light-tertiary dark:text-dark-tertiary mr-1" />
  );
};

export default Icon;
