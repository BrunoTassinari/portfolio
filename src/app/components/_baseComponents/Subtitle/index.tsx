type SubtitleProps = {
  children: string;
};

const Subtitle = ({ children }: SubtitleProps) => (
  <span className="m-0 text-[0.8rem] text-strokeBlue dark:text-lightBlue uppercase">
    {children}
  </span>
);

export default Subtitle;
