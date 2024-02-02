import ExperienceTabList from '@components/ExperienceTabList';
import ExperienceTabContent from '@components/ExperienceTabContent';
import HeaderSection from '@/app/components/SectionHeader';
import Card from '@/app/components/_baseComponents/SectionContainer';
import { Tabs } from '@/app/components/ui/tabs';
import experiences from '@/app/constants/experiences';

const Experience = () => (
  <Card id="experience">
    <HeaderSection subtitle="Habilidades" title="Experiência" />
    <Tabs defaultValue={experiences.find((e) => e.default === true)?.company}>
      <ExperienceTabList experiences={experiences} />
      <ExperienceTabContent experiences={experiences} />
    </Tabs>
  </Card>
);

export default Experience;
