import Mounted from "../Mounted";

type SubtitleProps = {
  text: string;
};

const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <Mounted>
      <span className="m-0 text-[12px] text-light-tertiary dark:text-dark-tertiary uppercase">
        {text}
      </span>
    </Mounted>
  );
};

export default Subtitle;
