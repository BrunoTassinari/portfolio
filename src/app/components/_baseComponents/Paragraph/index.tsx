type ParagraphProps = {
  children: string;
};

const Paragraph = ({ children }: ParagraphProps) => (
  <p className="text-[0.9rem] text-smoothGray dark:text-whiteIce text-justify">
    {children}
  </p>
);

export default Paragraph;
