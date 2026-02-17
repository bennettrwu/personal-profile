import { SkillTagConfig } from '../types/configurable-content';
import './skill-tag.scss';

function SkillTag({ iconClass, skillName }: SkillTagConfig) {
  if (iconClass) {
    return (
      <div className="skill-tag-container">
        <i className={iconClass + ' skill-tag-icon'} /> {skillName}
      </div>
    );
  } else {
    return <div className="skill-tag-container">{skillName}</div>;
  }
}

export default SkillTag;
