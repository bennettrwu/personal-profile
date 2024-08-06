import { SkillInfo } from '../../content/skill_config';

import './SkillTag.css';

function SkillTag({ color, iconClass, skillName }: SkillInfo) {
  return (
    <div className='skill-tag-container' style={{ backgroundColor: color }}>
      <i className={iconClass + ' skill-tag-icon'} /> {skillName}
    </div>
  );
}

export default SkillTag;
