import SectionHeader from '../../SectionHeader';

type SectionContainerProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SectionContainer = ({
  children,
  className,
  id,
  title,
  subtitle,
}: SectionContainerProps) => (
  <section
    className={`container w-[88%] m-auto my-8 flex flex-col gap-[30px] relative ${className}`}
  >
    <div
      id={id}
      className="absolute pointer-events-none -top-[80px] lg:-top-[12px]"
    />
    <SectionHeader title={title} subtitle={subtitle} />
    {children}
  </section>
);
export default SectionContainer;
