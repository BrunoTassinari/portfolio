import { Github, LinkedinSquare } from "styled-icons/boxicons-logos";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";

type IconProps = {
  icon: string;
} & React.HTMLAttributes<HTMLElement>;

const icons = {
  github: Github,
  linkedin: LinkedinSquare,
  bars3BottomRight: Bars3BottomRightIcon,
  xMark: XMarkIcon,
  sun: SunIcon,
  moon: MoonIcon,
} as any;

const Icon = ({ icon, ...rest }: IconProps) => {
  const IconTag = icons[icon];
  return (
    <IconTag
      className="h-6 w-6 text-light-tertiary dark:text-dark-tertiary mr-1"
      {...rest}
    />
  );
};

export default Icon;
