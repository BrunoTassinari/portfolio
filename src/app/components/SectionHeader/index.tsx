type SectionHeaderProps = {
  subtitle: string;
  title: string;
};

const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => (
  <section className="flex flex-col ">
    <span className="text-[0.8rem] text-strokeBlue dark:text-lightBlue uppercase">
      {subtitle}
    </span>
    <span className="text-[1.5rem] font-bold uppercase text-darkBlue dark:text-white">
      {title}
    </span>
  </section>
);

export default SectionHeader;
