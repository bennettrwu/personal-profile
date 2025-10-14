import { Link } from 'react-router-dom';

import { ArrowLeftIcon } from '@heroicons/react/16/solid';

import './home-button.scss';

export default function HomeButton() {
  return (
    <Link to={'/'} id="home-button">
      <ArrowLeftIcon className="left-icon" /> Return to profile
    </Link>
  );
}
