import FrostedCard from '../../components/frosted-card';
import OffsetSplit from '../../components/offset-split';
import Content from '../../config/content/content';
import './education.scss';

export default function Education() {
  return (
    <>
      <h2>Education</h2>
      <FrostedCard>
        {Content.education.map((education, i) => (
          /* eslint-disable-next-line @eslint-react/no-array-index-key --
           * Array is an immutable array, item index will not change
           */
          <div key={i}>
            {i !== 0 && <hr />}
            <OffsetSplit>
              <div>
                <p className="education-date">
                  <span>{education.start_date}</span> —{' '}
                  <span>{education.end_date}</span>
                  <br />
                  <span>GPA:</span> <span>{education.gpa}</span>
                </p>
              </div>
              <div>
                <h3 className="education-school">{education.school}</h3>
                <p className="education-degree">{education.degree}</p>
                <ul>
                  {education.points.map((point, j) => (
                    /* eslint-disable-next-line @eslint-react/no-array-index-key --
                     * Array is an immutable array, item index will not change
                     */
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </OffsetSplit>
          </div>
        ))}
      </FrostedCard>
    </>
  );
}
