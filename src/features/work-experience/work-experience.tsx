import FrostedCard from '../../components/frosted-card';
import OffsetSplit from '../../components/offset-split';
import SkillTag from '../../components/skill-tag';
import Content from '../../config/content/content';
import './work-experience.scss';

export default function WorkExperience() {
  return (
    <>
      <h2>Work Experience</h2>
      <FrostedCard>
        {Content.work_experience.map((experience, i) => (
          /* eslint-disable-next-line @eslint-react/no-array-index-key --
           * Array is an immutable array, item index will not change
           */
          <div key={i}>
            {i !== 0 && <hr />}
            <OffsetSplit>
              <div>
                <p className="work-experience-date">
                  <span>{experience.start_date}</span> —{' '}
                  <span>{experience.end_date}</span>
                  <br />
                  <span>{experience.location}</span>
                </p>
              </div>
              <div>
                <h3 className="work-experience-company">
                  {experience.company}
                </h3>
                <p className="work-experience-title">{experience.job_title}</p>
                <ul>
                  {experience.points.map((point, j) => (
                    /* eslint-disable-next-line @eslint-react/no-array-index-key --
                     * Array is an immutable array, item index will not change
                     */
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                {experience.skills.map((skill, j) => (
                  /* eslint-disable-next-line @eslint-react/no-array-index-key --
                   * Array is an immutable array, item index will not change
                   */
                  <SkillTag key={j} {...skill} />
                ))}
              </div>
            </OffsetSplit>
          </div>
        ))}
      </FrostedCard>
    </>
  );
}
