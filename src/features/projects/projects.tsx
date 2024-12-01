import {Link} from 'react-router-dom';
import FrostedCard from '../../components/frosted-card';
import OffsetSplit from '../../components/offset-split';
import SkillTag from '../../components/skill-tag';
import Content from '../../config/content/content';

import './project.scss';

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <FrostedCard>
        {Content.projects.map((project, i) => (
          <div key={i}>
            {i !== 0 && <hr />}
            <OffsetSplit>
              <div>
                <p className="project-date">
                  <span>{project.start_date}</span> — <span>{project.end_date}</span>
                </p>
              </div>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-link-container">
                  <span className="project-link">
                    <Link to={project.source_link} target="_blank">
                      Source Code
                    </Link>
                  </span>
                  {project.demo_link && (
                    <span className="project-link">
                      <Link to={project.demo_link} target="_blank">
                        {project.demo_label ? <>{project.demo_label}</> : <>Demo</>}
                      </Link>
                    </span>
                  )}
                </p>
                <ul>
                  {project.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                {project.skills.map((skill, j) => (
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
