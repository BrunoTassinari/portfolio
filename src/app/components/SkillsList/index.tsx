import Icon from '@components/baseComponents/Icon';

type SkillsListProps = {
  skills: any[];
};

const SkillsList = ({ skills }: SkillsListProps) => (
  <ul>
    {skills.map((skill) => (
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
);

export default SkillsList;
