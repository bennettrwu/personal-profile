import { Link } from 'react-router-dom';
import FrostedCard from '../../components/frosted-card';
import Content from '../../config/content/content';
import HalfSplit from '../../components/half-split';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';

import './bio.scss';

export default function Bio() {
  return (
    <>
      <h1>{Content.profile.name}</h1>
      <HalfSplit>
        <FrostedCard>
          <h2>{Content.profile.position}</h2>
          <p>{Content.profile.tagline}</p>
          <p>{Content.profile.timezone}</p>

          <div id='bio-icon-links-container'>
            {Content.profile.links.map((link, i) => (
              <Link key={i} className='bio-icon-links' to={link.href} title={link.title} target={link.target}>
                <span>{link.icon}</span>
              </Link>
            ))}
          </div>

          <a id='bio-resume-link' href={Content.profile.resume_link} title='Link to my PDF resume' target='_blank'>
            View Resume
            <ArrowTopRightOnSquareIcon className='right-icon' />
          </a>
        </FrostedCard>
        <FrostedCard>
          <p>{Content.profile.bio}</p>
        </FrostedCard>
      </HalfSplit>
    </>
  );
}
