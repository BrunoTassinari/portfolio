import Subtitle from '@components/Subtitle';
import Title from '@components/Title';

type HeaderSectionProps = {
  subtitle: string;
  title: string;
};

const HeaderSection = ({ subtitle, title }: HeaderSectionProps) => (
  <section className="w-full flex flex-col justify-start">
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </section>
);

export default HeaderSection;
