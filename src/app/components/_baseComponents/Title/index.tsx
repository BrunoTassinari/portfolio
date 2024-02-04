type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => (
  <h1 className="m-0 text-[1.5rem] font-bold uppercase text-darkBlue dark:text-white">
    {children}
  </h1>
);

export default Title;
