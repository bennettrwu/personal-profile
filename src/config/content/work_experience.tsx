import { WorkExperienceContent } from '../../types/configurable-content';
import SkillList from './skill_tag_config';

const work_experience: WorkExperienceContent[] = [
  // Expedia Group
  {
    start_date: 'May 2024',
    end_date: 'Jul 2024',
    location: 'Chicago, IL',
    company: 'Expedia Group',
    job_title: 'Software Development Engineer Intern',
    points: [
      'Eliminated 184 duplicate licenses by migrating Salesforce integration to merged instance',
      'Advanced new feature development by developing Kafka consumer to process ad campaign events in a Kotlin SpringBoot application',
      'Owned projects throughout CI/CD pipeline and ultimately deployed to production',
      'Developed communication skills while working with others to understand and validate project requirements',
    ],
    skills: [
      SkillList.KAFKA,
      SkillList.SPRINGBOOT,
      SkillList.JAVA,
      SkillList.KOTLIN,
      SkillList.INTELLIJ,
      SkillList.POSTGRESQL,
      SkillList.DOCKER,
    ],
  },
  // CS 128 CA
  {
    start_date: 'Aug 2023',
    end_date: 'May 2024',
    location: 'Champaign, IL',
    company: 'University of Illinois',
    job_title: 'Course Assistant (CS 128)',
    points: [
      'Facilitated student understanding of C++ concepts including pointers, memory management, object inheritance, file streams; receiving positive feedback for effective teaching',
    ],
    skills: [SkillList.C_CPP, SkillList.DOCKER, SkillList.LINUX],
  },
  // AbbVie
  {
    start_date: 'May 2023',
    end_date: 'Apr 2023',
    location: 'North Chicago, IL',
    company: 'AbbVie',
    job_title: 'Summer Worker',
    points: [
      'Slashed time from one week to a few minutes for nuclear magnetic resonance spectra analysis through automation with Python scripts',
      'Ensured seamless machine learning data collection by building web application on AWS for scientists to quickly view and correct machine predictions while generating result report',
    ],
    skills: [
      SkillList.AWS,
      SkillList.LINUX,
      SkillList.PYTHON,
      SkillList.PYTORCH,
      SkillList.TENSORFLOW,
      SkillList.NUMPY,
      SkillList.MATPLOTLIB,
      SkillList.REACT,
    ],
  },
];

export default work_experience;
