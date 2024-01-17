type ParagraphProps = {
  children: string;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-[0.9rem] text-light-text-secondary dark:text-dark-text-secondary text-justify">
      {children}
    </p>
  );
};

export default Paragraph;
