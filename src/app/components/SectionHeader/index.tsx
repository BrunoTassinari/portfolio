import Subtitle from '@/app/components/_baseComponents/Subtitle';
import Title from '@/app/components/_baseComponents/Title';

type SectionHeaderProps = {
  subtitle: string;
  title: string;
};

const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => (
  <section className="w-full flex flex-col justify-start">
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
  </section>
);

export default SectionHeader;
