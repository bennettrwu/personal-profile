import { SkillGroup } from '../../types/configurable-content';
import SkillList from './skill_tag_config';

const skills: SkillGroup[] = [
  {
    title: 'Languages:',
    skills: [
      SkillList.C_CPP,
      SkillList.PYTHON,
      SkillList.JAVASCRIPT,
      SkillList.TYPESCRIPT,
      SkillList.JAVA,
      SkillList.KOTLIN,
      SkillList.MYSQL,
      SkillList.POSTGRESQL,
      SkillList.MONGODB,
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      SkillList.REACT,
      SkillList.NODE,
      SkillList.EXPRESS,
      SkillList.MOCHA,
      SkillList.JEST,
      SkillList.SPRINGBOOT,
      SkillList.OPENCL,
    ],
  },
  {
    title: 'Libraries',
    skills: [SkillList.OPENCV, SkillList.NUMPY, SkillList.PYTORCH, SkillList.TENSORFLOW, SkillList.MATPLOTLIB],
  },
  {
    title: 'Technologies',
    skills: [
      SkillList.GIT,
      SkillList.DOCKER,
      SkillList.GCP,
      SkillList.AWS,
      SkillList.VSCODE,
      SkillList.INTELLIJ,
      SkillList.GITHUB_ACTIONS,
      SkillList.KAFKA,
      SkillList.LINUX,
    ],
  },
];

export default skills;
