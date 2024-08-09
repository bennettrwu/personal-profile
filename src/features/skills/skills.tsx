import FrostedCard from '../../components/frosted-card';
import SkillTag from '../../components/skill-tag';
import Content from '../../config/content/content';

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <FrostedCard>
        {Content.skills.map((group, i) => (
          <div key={i}>
            <h3>{group.title}</h3>
            {group.skills.map((skill, j) => (
              <SkillTag key={j} {...skill} />
            ))}
          </div>
        ))}
      </FrostedCard>
    </>
  );
}
