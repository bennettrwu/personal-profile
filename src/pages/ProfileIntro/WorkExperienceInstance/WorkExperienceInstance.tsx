import SkillTag from '../../../components/SkillTag/SkillTag';
import { WorkExperienceInfo } from '../../../content/work_experience';

import './WorkExperienceInstance.css';

function WorkExperienceInstance({ start_date, end_date, location, company, job_title, points, skills }: WorkExperienceInfo) {
  return (
    <div className='work-experience-instance-container'>
      <div className='work-experience-instance-date-loc'>
        <p>
          <span>{start_date}</span> — <span>{end_date}</span>
          <br />
          <span>{location}</span>
        </p>
      </div>
      <div className='work-experience-instance-content'>
        <h3>
          <span>{company}</span> — <span>{job_title}</span>
        </h3>
        <ul>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
        {skills.map((skill) => (
          <SkillTag {...skill} />
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceInstance;
