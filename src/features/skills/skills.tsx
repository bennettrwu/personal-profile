import FrostedCard from '../../components/frosted-card';
import SkillTag from '../../components/skill-tag';
import Content from '../../config/content/content';

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <FrostedCard>
        {Content.skills.map((group, i) => (
          /* eslint-disable-next-line @eslint-react/no-array-index-key --
           * Array is an immutable array, item index will not change
           */
          <div key={i}>
            {i !== 0 && <hr />}
            <h3>{group.title}</h3>
            {group.skills.map((skill, j) => (
              /* eslint-disable-next-line @eslint-react/no-array-index-key --
               * Array is an immutable array, item index will not change
               */
              <SkillTag key={j} {...skill} />
            ))}
          </div>
        ))}
      </FrostedCard>
    </>
  );
}
