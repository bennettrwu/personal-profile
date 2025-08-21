import FrostedCard from '../../components/frosted-card';
import HorizontalCenterContent from '../../components/horizontal-center-content';
import Footer from '../../features/footer/footer';
import HomeButton from '../../features/home-button/home-button';

export default function Privacy() {
  return (
    <HorizontalCenterContent>
      <HomeButton />
      <h1 id="privacy-policy">Privacy Policy</h1>
      <FrostedCard>
        <p>Last Updated: August 9, 2024</p>

        <p>
          Your privacy is important to me. I have provided this privacy policy
          to help you understand how your personal information is collected,
          used, and protected.
        </p>

        <h2>1. Information Collected</h2>

        <p>
          This website collects the following types of information when you
          visit:
        </p>
        <ul>
          <li>
            <strong>Basic Website Information:</strong> This website collects
            information such as, but not limited to, IP addresses, browser
            details, timestamps, and referring pages. This information is used
            to monitor, diagnose, and debug technical issues with this website.
          </li>
          <li>
            <strong>Cloudflare Analytics:</strong> This website uses Cloudflare
            Analytics to monitor and analyze traffic. This tool does not use
            cookies and provides aggregated information about website usage,
            such as page views and visit duration. This information is used to
            monitor and analyze website traffic to see how this website is
            performing.
          </li>
          <li>
            <strong>Local Storage:</strong> This website uses local storage in
            your browser to store your preferences for the background animation.
            This information is stored locally on your device and is not sent to
            our servers or shared with any third parties.
          </li>
        </ul>

        <h2>2. How This Website Uses Your Information</h2>

        <p>
          The information this website collects is used for the following
          purposes:
        </p>
        <ul>
          <li>
            To monitor, diagnose, and debug technical issues with this website.
          </li>
          <li>
            To monitor and analyze website traffic to see how this website is
            performing.
          </li>
          <li>
            To remember your preferences for the background animation during
            your visits.
          </li>
        </ul>

        <h2>3. Third-Party Services</h2>

        <p>
          Cloudflare Analytics is the only third-party service this website
          uses.
        </p>

        <h2>4. Data Security</h2>

        <p>
          I take data security seriously and have implemented appropriate
          measures to protect the information collected through this website.
          However, please note that no method of transmission over the internet
          or method of electronic storage is 100% secure.
        </p>

        <h2>5. Your Choices</h2>

        <p>
          You can control how your browser handles local storage by adjusting
          your browser settings. This includes clearing the stored preferences
          or disabling local storage altogether.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>

        <p>
          I may update this privacy policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>

        <strong>
          This privacy policy applies solely to the website at the domain{' '}
          <i>bwu.dev</i> (subdomains not included).
        </strong>
      </FrostedCard>
      <Footer />
    </HorizontalCenterContent>
  );
}
