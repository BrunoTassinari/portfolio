type TitleProps = {
  children: string;
};

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="m-0 text-[1.5rem] font-bold uppercase text-light-text-primary dark:text-dark-text-primary">
      {children}
    </h1>
  );
};

export default Title;
