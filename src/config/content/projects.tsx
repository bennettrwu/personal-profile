import { Fragment } from 'react/jsx-runtime';

import { ProjectContent } from '../../types/configurable-content';
import SkillList from './skill-tag-config';

const projects: ProjectContent[] = [
  {
    start_date: 'Aug 2024',
    end_date: 'Current',
    title: 'ScribeAR',
    demo_link: 'https://scribear.illinois.edu',
    demo_label: 'Live Demo',
    source_link: 'https://github.com/scribear',
    points: [
      'Co-developed ScribeAR, a live captioning system for classrooms that improves accessibility in courses and office hours',
      'Architected and implemented session management backend that enables users to instantly access the transcription sessions on their own devices, such as phones or AR glasses, via a QR code',
      'Engineered backend transcription service that provides accurate and low latency (< 2 second) automated speech recognition for multiple concurrent audio streams using OpenAI Whispe',
    ],
    skills: [
      SkillList.DOCKER,
      SkillList.REACT,
      SkillList.NODE,
      SkillList.TYPESCRIPT,
      SkillList.PYTHON,
      SkillList.CUDA,
    ],
  },
  {
    start_date: 'Jan 2024',
    end_date: 'May 2024',
    title: 'Grocery Aid',
    demo_link: 'https://groceryaid.bennettrwu.com',
    demo_label: 'Live Demo',
    source_link: 'https://github.com/bennettrwu/grocery-aid',
    points: [
      'A web app for exploring and comparing prices of grocery items between stores',
      'Users create an account, then can search for items from multiple stores by keyword, or for multiple items with a budget limit',
      "Users can also compare how items compare to the store's overall pricing",
      'Implemented several MySQL queries using stored procedures and transactions and containerized application using Docker Compose',
    ],
    skills: [
      SkillList.GCP,
      SkillList.DOCKER,
      SkillList.MYSQL,
      SkillList.REACT,
      SkillList.NODE,
      SkillList.TYPESCRIPT,
    ],
  },
  {
    start_date: 'Aug 2023',
    end_date: 'Dec 2023',
    title: 'Focus Stacking',
    demo_link:
      'https://www.youtube.com/playlist?list=PL5tZqkyvUAxMxNQaaoXuQU-cmZYY38q4M',
    demo_label: 'Example Result (Warning: Bug)',
    source_link: 'https://github.com/bennettrwu/focus-stacking',
    points: [
      <Fragment key="focus-stacking-paper">
        Implements focus stacking algorithm found in:{' '}
        <i>
          Achieving 3D imaging through focus stacking. (J. Wlodek, K. J. Gofron,
          Y. Q. Cai)
        </i>
      </Fragment>,
      'Developed Python scripts to convert images taken at different focal depths into a depth map and focus stacked image (all parts of image in focus)',
      "Compared paper's approach against our implementation of Laplacian focus stacking and found paper's approach to be signficantly more accurate",
    ],
    skills: [SkillList.OPENCV, SkillList.MATPLOTLIB, SkillList.PYTHON],
  },
  {
    start_date: 'Aug 2023',
    end_date: 'Aug 2023',
    title: 'NER Extension',
    source_link: 'https://github.com/bennettrwu/ner-extension',
    demo_link: 'https://www.youtube.com/watch?v=Gim27R5bt1w',
    points: [
      <Fragment key="ner-paper">
        Built and trained transformer machine learning model detailed in{' '}
        <i>
          Template-Based Named Entity Recognition Using BART (Cui, Leyang et
          al., 2021)
        </i>{' '}
        to perform named entity recognition (e.g. people, locations)
      </Fragment>,
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
    skills: [
      SkillList.OPENCL,
      SkillList.REACT,
      SkillList.NODE,
      SkillList.C_CPP,
      SkillList.TYPESCRIPT,
    ],
  },
];

export default projects;
