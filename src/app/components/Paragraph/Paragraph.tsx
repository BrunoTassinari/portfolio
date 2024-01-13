import Mounted from "../Mounted";

type ParagraphProps = {
  children: string;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Mounted>
      <p className="text-[12px] text-light-text-secondary dark:text-dark-text-secondary mt-[8px]">
        {children}
      </p>
    </Mounted>
  );
};

export default Paragraph;
