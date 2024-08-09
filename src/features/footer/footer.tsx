import FrostedCard from '../../components/frosted-card';
import ScrollLink from '../../components/scroll-link';

import './footer.scss';

export default function Footer() {
  return (
    <footer id='footer'>
      <FrostedCard>
        <p id='footer-text'>
          Copyright © 2024 | Bennett Ruichu Wu | <ScrollLink id='privacy-poliy-link' to={'/privacy'}>
            Privacy Policy
          </ScrollLink>
        </p>
      </FrostedCard>
    </footer>
  );
}
