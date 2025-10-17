import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';

import FrostedCard from '../../components/frosted-card';
import HalfSplit from '../../components/half-split';
import Content from '../../config/content/content';
import './bio.scss';

export default function Bio() {
  const [time, setTime] = useState('');
  useEffect(() => {
    let updateTimeout: number;

    const updateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        dateStyle: 'medium',
        timeStyle: 'full',
        timeZone: Content.profile.timezone,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(date));

      updateTimeout = setTimeout(updateTime, 500);
    };
    updateTime();

    return () => {
      clearTimeout(updateTimeout);
    };
  }, []);

  return (
    <>
      <h1>{Content.profile.name}</h1>
      <HalfSplit>
        <FrostedCard>
          <h2>{Content.profile.position}</h2>
          <p>{Content.profile.tagline}</p>
          <p>{time}</p>

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
