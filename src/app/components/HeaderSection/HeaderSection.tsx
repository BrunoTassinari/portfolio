import Subtitle from "@baseComponents/Subtitle";
import Title from "@baseComponents/Title";

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