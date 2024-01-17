import Card from "@/app/components/_baseComponents/Card";
import Icon from "@/app/components/_baseComponents/Icon";
import HeaderSection from "@components/HeaderSection/HeaderSection";

import skills from "@/app/constants/skills";
import Mounted from "@/app/components/_baseComponents/Mounted";

const Skills = () => {
  return (
    <Card>
      <HeaderSection subtitle="Conhecimentos" title="Tecnologias" />
      <section className="w-[96%] flex justify-between">
        <ul>
          {skills.frontend.map((skill) => (
            <li key={skill.title}>
              <section className="my-2 flex items-center gap-2">
                <Icon icon={skill.icon} />
                <span className="m-0 text-[0.8rem] text-light-text-primary dark:text-dark-text-primary uppercase">
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
                <span className="m-0 text-[0.8rem] text-light-text-primary dark:text-dark-text-primary uppercase">
                  {skill.title}
                </span>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default Skills;
