type SectionHeaderProps = {
  subtitle: string;
  title: string;
};

const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => (
  <section className="w-full flex flex-col justify-start">
    <span className="m-0 text-[0.8rem] text-strokeBlue dark:text-lightBlue uppercase">
      {subtitle}
    </span>
    <h1 className="m-0 text-[1.5rem] font-bold uppercase text-darkBlue dark:text-white">
      {title}
    </h1>
  </section>
);

export default SectionHeader;
