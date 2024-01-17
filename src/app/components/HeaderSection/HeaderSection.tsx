import Subtitle from "@/app/components/_baseComponents/Subtitle";
import Title from "@/app/components/_baseComponents/Title";

type HeaderSectionProps = {
  subtitle: string;
  title: string;
};

const HeaderSection = ({ subtitle, title }: HeaderSectionProps) => {
  return (
    <section className="w-full flex flex-col justify-start">
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </section>
  );
};

export default HeaderSection;
