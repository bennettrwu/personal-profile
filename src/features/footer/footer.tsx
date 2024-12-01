import FrostedCard from '../../components/frosted-card';
import ScrollLink from '../../components/scroll-link';

import './footer.scss';

export default function Footer() {
  return (
    <footer id="footer">
      <FrostedCard>
        <p id="footer-text">
          <span>Copyright © 2024</span> | <span>Bennett Ruichu Wu</span> |{' '}
          <span>
            <ScrollLink id="privacy-poliy-link" to={'/privacy'}>
              Privacy Policy
            </ScrollLink>
          </span>
        </p>
      </FrostedCard>
    </footer>
  );
}
