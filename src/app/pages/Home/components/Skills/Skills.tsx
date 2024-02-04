import HeaderSection from '@/app/components/SectionHeader';
import Icon from '@/app/components/_baseComponents/Icon';
import Card from '@/app/components/_baseComponents/SectionContainer';

import skills from '@/app/constants/skills';

const Skills = () => (
  <Card id="skills">
    <HeaderSection subtitle="Conhecimentos" title="Tecnologias" />
    <section className="w-full flex justify-between">
      <ul>
        {skills.frontend.map((skill) => (
          <li key={skill.title}>
            <section className="my-2 flex items-center gap-2">
              <Icon icon={skill.icon} />
              <span className="m-0 text-[0.8rem] text-darkBlue dark:text-white uppercase">
                {skill.title}
              </span>
            </section>
          </li>
        ))}
      </ul>
      <ul>
        {skills.backend.map((skill) => (
          <li key={skill.title}>
            <section className="my-2 flex items-center gap-2">
              <Icon icon={skill.icon} />
              <span className="m-0 text-[0.8rem] text-darkBlue dark:text-white uppercase">
                {skill.title}
              </span>
            </section>
          </li>
        ))}
      </ul>
    </section>
  </Card>
);

export default Skills;
