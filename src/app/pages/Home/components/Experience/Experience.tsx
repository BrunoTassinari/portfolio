import HeaderSection from '@components/HeaderSection';
import Icon from '@/app/components/_baseComponents/Icon';
import Card from '@/app/components/_baseComponents/Card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';

import experience from '@/app/constants/experience';

const Experience = () => (
  <Card>
    <HeaderSection subtitle="Habilidades" title="Experiência" />

    <Tabs defaultValue={experience.find((e) => e.default === true)?.company}>
      <TabsList className="bg-light-secondary dark:bg-dark-secondary">
        {experience.map((e) => (
          <TabsTrigger key={e.company} value={e.company}>
            {e.company}
          </TabsTrigger>
        ))}
      </TabsList>
      <div>
        {experience.map((e) => (
          <TabsContent key={e.company} value={e.company}>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col">
                <h3 className="text-[1.3rem] font-semibold">{e.role}</h3>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {e.period}
                </span>
              </div>
              <div>
                <ul className="flex flex-wrap text-xs  text-light-tertiary dark:text-dark-tertiary">
                  {e.stack?.map((d) => (
                    <li key={d} className="flex items-center  mr-2 mb-2">
                      <section className="flex items-center">{d}</section>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="list-inside text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {e.topics?.map((d) => (
                    <li key={d}>
                      <section className="flex items-center">
                        <Icon icon="stop" />
                        {d}
                      </section>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  </Card>
);

export default Experience;
