import Mounted from "../Mounted";

type SubtitleProps = {
  children: string;
};

const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <Mounted>
      <span className="m-0 text-[0.8rem] text-light-tertiary dark:text-dark-tertiary uppercase">
        {children}
      </span>
    </Mounted>
  );
};

export default Subtitle;
