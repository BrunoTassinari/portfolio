import {
  Github,
  LinkedinSquare,
  Javascript,
  Java,
  Typescript,
  Angular,
  ReactLogo,
  TailwindCss,
  Nodejs,
  Mongodb,
  Docker,
} from "styled-icons/boxicons-logos";
import { Dotnet, Postgresql } from "styled-icons/simple-icons";
import { BodyText } from "styled-icons/bootstrap";
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
  javascript: Javascript,
  java: Java,
  typescript: Typescript,
  angular: Angular,
  react: ReactLogo,
  tailwind: TailwindCss,
  nodejs: Nodejs,
  mongodb: Mongodb,
  docker: Docker,
  dotnet: Dotnet,
  postgresql: Postgresql,
  htmlcss: BodyText,
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
