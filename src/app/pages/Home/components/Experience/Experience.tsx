import HeaderSection from '@components/HeaderSection';
import ExperienceTabList from '@components/ExperienceTabList';
import ExperienceTabContent from '@components/ExperienceTabContent';
import Icon from '@/app/components/_baseComponents/Icon';
import Card from '@/app/components/_baseComponents/Card';
import { Tabs, TabsContent } from '@/app/components/ui/tabs';

import experiences from '@/app/constants/experiences';

const Experience = () => (
  <Card>
    <HeaderSection subtitle="Habilidades" title="Experiência" />
    <Tabs defaultValue={experiences.find((e) => e.default === true)?.company}>
      <ExperienceTabList experiences={experiences} />
      <ExperienceTabContent experiences={experiences} />
    </Tabs>
  </Card>
);

export default Experience;
