import { ProfileContent } from '../../types/configurable-content';

const profile: ProfileContent = {
  name: 'Bennett R. Wu',
  position: 'Software Development Engineer',
  tagline: (
    <>
      <span>Making life better,</span> <span>one line of code at a time</span>
    </>
  ),
  timezone: 'Chicago Standard Time (CST)',
  links: [
    // Github
    {
      icon: <i className="devicon-github-original"></i>,
      aria: 'Link to my Github profile',
      target: '_blank',
      href: 'https://github.com/bennettrwu',
    },
    // LinkedIn
    {
      icon: <i className="devicon-linkedin-plain"></i>,
      aria: 'Link to my LinkedIn profile',
      target: '_blank',
      href: 'https://linkedin.com/in/bennettrwu',
    },
  ],
  resume_link: '/Bennett-Wu_resume-redacted.pdf',
  bio: (
    <>
      Hi, I'm Bennett, a computer science student with a passion for creating
      software that makes a positive impact.
      <br />
      <br />
      I've had the opportunity to work on diverse projects, from developing
      automations that help scientists analyze experiments faster, to full stack
      web applications and large scale data analysis pipelines. I'm constantly
      working to improve my skills and dedicated to writing software that can
      drive meaningful change.
      <br />
      <br />
      Growing up, I watched hours of videos on computer building and new
      technological innovations. Inspired by the power of computing and
      software, I pursed an education in computer science. Currently, I'm
      enrolled in the combined BS-MCS program at the University of Illinois,
      with plans to graduate in Spring 2026.
    </>
  ),
};

export default profile;
