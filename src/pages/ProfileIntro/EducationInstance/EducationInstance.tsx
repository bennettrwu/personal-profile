import { EducationInfo } from '../../../content/education';

import './EducationInstance.css';

function EducationInstance({ start_date, end_date, gpa, school, degree, points }: EducationInfo) {
  return (
    <div className='work-experience-instance-container'>
      <div className='work-experience-instance-date-loc'>
        <p>
          <span>{start_date}</span> — <span>{end_date}</span>
          <br />
          <span>GPA: {gpa}</span>
        </p>
      </div>
      <div className='work-experience-instance-content'>
        <h3>
          <span>{school}</span> — <span>{degree}</span>
        </h3>
        <ul>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EducationInstance;
