import ExperienceTabList from '@components/ExperienceTabList';
import ExperienceTabContent from '@components/ExperienceTabContent';

import SectionContainer from '@components/SectionContainer';
import SectionHeader from '@/app/components/SectionHeader';
import { Tabs } from '@/app/components/ui/tabs';
import experiences from '@/app/constants/experiences';

const Experience = () => (
  <SectionContainer id="experience">
    <SectionHeader subtitle="Experiência" title="Trabalho" />
    <Tabs defaultValue={experiences.find((e) => e.default === true)?.company}>
      <ExperienceTabList experiences={experiences} />
      <ExperienceTabContent experiences={experiences} />
    </Tabs>
  </SectionContainer>
);

export default Experience;
