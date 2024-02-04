import { TabsList, TabsTrigger } from '@/app/components/ui/tabs';

type ExperienceTabListProps = {
  experiences: any;
};

const ExperienceTabList = ({ experiences }: ExperienceTabListProps) => (
  <TabsList className="bg-whiteIce dark:bg-lightGray mb-4">
    {experiences.map((e: any) => (
      <TabsTrigger key={e.company} value={e.company}>
        {e.company}
      </TabsTrigger>
    ))}
  </TabsList>
);

export default ExperienceTabList;
