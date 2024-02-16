type SectionContainerProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SectionContainer = ({
  children,
  className,
  id,
}: SectionContainerProps) => (
  <section
    className={`container w-[88%] m-auto my-6 flex flex-col relative ${className}`}
  >
    <div
      id={id}
      className="absolute pointer-events-none -top-[80px] lg:-top-[12px]"
    />
    {children}
  </section>
);
export default SectionContainer;
