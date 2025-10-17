import { SkillGroup } from '../../types/configurable-content';
import SkillList from './skill-tag-config';

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
    title: 'Databases:',
    skills: [SkillList.MYSQL, SkillList.POSTGRESQL, SkillList.MONGODB],
  },
  {
    title: 'Frameworks / Libraries',
    skills: [
      SkillList.REACT,
      SkillList.NODE,
      SkillList.EXPRESS,
      SkillList.MOCHA,
      SkillList.JEST,
      SkillList.SPRINGBOOT,
      SkillList.OPENCL,
      SkillList.OPENCV,
      SkillList.NUMPY,
      SkillList.PYTORCH,
      SkillList.TENSORFLOW,
      SkillList.MATPLOTLIB,
    ],
  },
  {
    title: 'Tools / Technologies',
    skills: [
      SkillList.GIT,
      SkillList.DOCKER,
      SkillList.APACHE_SPARK,
      SkillList.GCP,
      SkillList.AWS,
      SkillList.VSCODE,
      SkillList.INTELLIJ,
      SkillList.GITHUB_ACTIONS,
      SkillList.KAFKA,
      SkillList.LINUX,
      SkillList.CUDA,
    ],
  },
];

export default skills;
