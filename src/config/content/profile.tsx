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
      icon: <i className='devicon-github-original'></i>,
      aria: 'Link to my Github profile',
      target: '_blank',
      href: 'https://github.com/bennettrwu',
    },
    // LinkedIn
    {
      icon: <i className='devicon-linkedin-plain'></i>,
      aria: 'Link to my LinkedIn profile',
      target: '_blank',
      href: 'https://linkedin.com/in/bennett-wu',
    },
  ],
  resume_link: '/Bennett-Wu_resume-redacted.pdf',
  bio: (
    <>
      During high school, I entered a hack-a-thon with little to no programming experience — and failed miserably. However,
      that experience ignited a passion for coding that has only grown since.
      <br />
      <br />
      Computing has revolutionized our world — and will continue to do so. I'm dedicated to using software to make a positive
      difference in the world, whether it be in a website, mobile app, embedded devices, infrastructure, or something new.
      <br />
      <br />
      When I'm not programming, I enjoy 3D printing, photography, and playing piano.
    </>
  ),
};

export default profile;
