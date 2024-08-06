import WorkExperienceInstance from './WorkExperienceInstance/WorkExperienceInstance';
import EducationInstance from './EducationInstance/EducationInstance';
import Content from '../../content/content';

import './ProfileIntro.css';
import SkillTag from '../../components/SkillTag/SkillTag';
import { Link } from 'react-router-dom';

function ProfileIntro() {
  return (
    <>
      <h1 className='section-header'>Bennett R. Wu</h1>
      <div className='split-container'>
        <div className='frosted spaced card'>
          <h4>{Content.Profile.Position}</h4>
          <p>{Content.Profile.Tagline}</p>
          <br />
          <p>
            <strong>Timezone: </strong>
            {Content.Profile.Timezone}
          </p>
          <div id='icon-links'>
            {Content.Profile.Links.map((link_info) => (
              <Link className='icon-link' to={link_info.href} title={link_info.title} target={link_info.target}>
                <span>{link_info.icon}</span>
              </Link>
            ))}
          </div>
          <Link className='large-link' to={Content.Profile.Resume} title='Link to my resume' target='_blank'>
            View Resume
            <span className='right-icon'>
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fill-rule='evenodd'
                clip-rule='evenodd'
                fill='currentColor'
              >
                <path d='M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z' />
              </svg>
            </span>
          </Link>
        </div>
        <div className='frosted spaced card'>{Content.Profile.Bio}</div>
      </div>

      <h1>Education</h1>
      <div className='frosted spaced card'>
        {Content.Education.map((exp, id) => (
          <>
            {id !== 0 && <hr />}
            <EducationInstance {...exp} />
          </>
        ))}
      </div>

      <h1>Skills</h1>
      <div className='frosted spaced card'>
        {Content.Skills.map((skill_group) => {
          return (
            <div>
              <h4>{skill_group.group}</h4>
              {skill_group.list.map((skill) => (
                <SkillTag {...skill} />
              ))}
            </div>
          );
        })}
      </div>

      <h1>Work Experience</h1>
      <div className='frosted spaced card'>
        {Content.WorkExperience.map((exp, id) => (
          <>
            {id !== 0 && <hr />}
            <WorkExperienceInstance {...exp} />
          </>
        ))}
      </div>

      <h1>Projects</h1>
      <div className='frosted spaced card'></div>
    </>
  );
}

export default ProfileIntro;
