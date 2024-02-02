import Icon from '@components/_baseComponents/Icon';
import { TabsContent } from '@/app/components/ui/tabs';

type ExperienceTabContentProps = {
  experiences: any;
};

const ExperienceTabContent = ({ experiences }: ExperienceTabContentProps) => (
  <>
    {experiences.map((e: any) => (
      <TabsContent key={e.company} value={e.company}>
        <div className="flex flex-col">
          <h3 className="text-[1.3rem] font-semibold">{e.role}</h3>
          <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
            {e.period}
          </span>
        </div>
        <div className="mr-2 my-2">
          <ul className="flex flex-wrap text-xs  text-light-tertiary dark:text-dark-tertiary">
            {e.stacks?.map((stack: any) => (
              <li key={stack} className="flex items-center  mr-2 mb-2">
                <section className="flex items-center">{stack}</section>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-2 my-2">
          <ul className="list-inside text-sm text-light-text-secondary dark:text-dark-text-secondary">
            {e.topics?.map((topic: any) => (
              <li key={topic}>
                <section className="flex items-center">
                  <Icon icon="stop" />
                  {topic}
                </section>
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    ))}
  </>
);

export default ExperienceTabContent;
