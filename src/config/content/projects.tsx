import {ProjectContent} from '../../types/configurable-content';
import SkillList from './skill-tag-config';

const projects: ProjectContent[] = [
  {
    start_date: 'Jan 2024',
    end_date: 'May 2024',
    title: 'Grocery Aid',
    demo_link: 'https://groceryaid.bennettrwu.com',
    demo_label: 'Live Demo',
    source_link: 'https://github.com/bennettrwu/Grocery-Aid',
    points: [
      'A web app for exploring and comparing prices of grocery items between stores',
      'Users create an account, then can search for items from multiple stores by keyword, or for multiple items with a budget limit',
      "Users can also compare how items compare to the store's overall pricing",
      'Implemented several MySQL queries using stored procedures and transactions and containerized application using Docker Compose',
    ],
    skills: [SkillList.GCP, SkillList.DOCKER, SkillList.MYSQL, SkillList.REACT, SkillList.NODE, SkillList.TYPESCRIPT],
  },
  {
    start_date: 'Aug 2023',
    end_date: 'Dec 2023',
    title: 'Focus Stacking',
    demo_link: 'https://www.youtube.com/playlist?list=PLzI2HALtu4JJXak1UzjpRWR-HawyVVQLw',
    demo_label: 'Example Result (Warning: Bug)',
    source_link: 'https://github.com/bennettrwu/Focus-Stacking',
    points: [
      <>
        Implements focus stacking algorithm found in:{' '}
        <i>Achieving 3D imaging through focus stacking. (J. Wlodek, K. J. Gofron, Y. Q. Cai)</i>
      </>,
      'Developed Python scripts to convert images taken at different focal depths into a depth map and focus stacked image (all parts of image in focus)',
      "Compared paper's approach against our implementation of Laplacian focus stacking and found paper's approach to be signficantly more accurate",
    ],
    skills: [SkillList.OPENCV, SkillList.MATPLOTLIB, SkillList.PYTHON],
  },
  {
    start_date: 'Aug 2023',
    end_date: 'Aug 2023',
    title: 'NER Extension',
    source_link: 'https://github.com/bennettrwu/NER-Extension',
    demo_link: 'https://youtu.be/cR2qvGNRs_A',
    points: [
      <>
        Built and trained transformer machine learning model detailed in{' '}
        <i>Template-Based Named Entity Recognition Using BART (Cui, Leyang et al., 2021)</i> to perform named entity
        recognition (e.g. people, locations)
      </>,
      'Implemented Chrome browser extension to allow user to interact with language model to highlight named entities on websites',
    ],
    skills: [SkillList.PYTORCH, SkillList.PYTHON, SkillList.TYPESCRIPT],
  },
  {
    start_date: 'Apr 2022',
    end_date: 'Nov 2022',
    title: 'Pi Eye',
    source_link: 'https://github.com/Pi-Eye',
    points: [
      'An application for converting a Raspberry Pi into a security camera with motion detection',
      'The Raspberry Pi captures video and sends it to the Pi-Eye server which then encodes, run motion detection, saves, and restreams video to users on webpage',
      'Achieved 30x increase in motion detection FPS at 1080p compared to existing open-source project by engineering a GPU accelerated algorithm',
    ],
    skills: [SkillList.OPENCL, SkillList.REACT, SkillList.NODE, SkillList.C_CPP, SkillList.TYPESCRIPT],
  },
];

export default projects;
