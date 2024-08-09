import { SkillTagConfig } from '../types/configurable-content';

import './skill-tag.scss';

function SkillTag({ iconClass, skillName }: SkillTagConfig) {
  return (
    <div className='skill-tag-container'>
      <i className={iconClass + ' skill-tag-icon'} /> {skillName}
    </div>
  );
}

export default SkillTag;
