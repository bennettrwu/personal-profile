import { EducationContent } from '../../types/configurable-content';

const education: EducationContent[] = [
  // UIUC
  {
    start_date: 'Aug 2022',
    end_date: 'May 2026',
    school: 'University of Illinois Urbana Champaign',
    degree: 'Combined BS-MCS in Computer Science',
    gpa: '3.98/4.00',
    points: [
      <>
        <strong>Coursework:</strong> Algorithms, Artificial Intelligence, Computational Photography, Computer Architecture,
        Database Systems, Data Structures, Distributed Systems, Parallel Programming
      </>,
      <>
        <strong>In Progress:</strong> Cryptography, Programming Languages and Compilers
      </>,
    ],
  },
];

export default education;
