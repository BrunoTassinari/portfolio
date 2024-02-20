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
    className={`w-full mt-10 flex flex-col relative gap-[20px] ${className}`}
  >
    <div
      id={id}
      className="absolute pointer-events-none -top-[80px] lg:-top-[12px]"
    />
    {children}
  </section>
);
export default SectionContainer;
