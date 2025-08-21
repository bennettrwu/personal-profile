import { Fragment } from 'react/jsx-runtime';
import { EducationContent } from '../../types/configurable-content';

const education: EducationContent[] = [
  // UIUC
  {
    start_date: 'Aug 2022',
    end_date: 'May 2026',
    school: 'University of Illinois Urbana Champaign',
    degree: 'Combined BS-MCS in Computer Science',
    gpa: '3.95/4.00',
    points: [
      <Fragment key="coursework">
        <strong>Coursework:</strong> Algorithms, Artificial Intelligence,
        Computational Photography, Computer Architecture, Cloud Computing,
        Cryptography, Database Systems, Data Structures, Distributed Systems,
        Parallel Programming
      </Fragment>,
    ],
  },
];

export default education;
