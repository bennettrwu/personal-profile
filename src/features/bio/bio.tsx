import { Link } from 'react-router-dom';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';

import FrostedCard from '../../components/frosted-card';
import HalfSplit from '../../components/half-split';
import Content from '../../config/content/content';
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

          <div id="bio-icon-links-container">
            {Content.profile.links.map((link, i) => (
              <Link
                /* eslint-disable-next-line @eslint-react/no-array-index-key --
                 * Array is an immutable array, item index will not change
                 */
                key={i}
                className="bio-icon-links"
                to={link.href}
                aria-label={link.aria}
                target={link.target}
              >
                <span>{link.icon}</span>
              </Link>
            ))}
          </div>

          <a
            id="bio-resume-link"
            href={Content.profile.resume_link}
            aria-label="Link to view PDF resume"
            target="_blank"
          >
            Resume
            <ArrowTopRightOnSquareIcon className="right-icon" />
          </a>
        </FrostedCard>
        <FrostedCard>
          <p>{Content.profile.bio}</p>
        </FrostedCard>
      </HalfSplit>
    </>
  );
}
