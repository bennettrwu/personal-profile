import { EducationContent } from '../../types/configurable-content';

const education: EducationContent[] = [
  // UIUC
  {
    start_date: 'May 2024',
    end_date: 'Jul 2024',
    school: 'University of Illinois Urbana Champaign',
    degree: 'Bachelor of Science in Computer Science',
    gpa: '3.98/4.00',
    points: [
      <>
        <strong>Coursework:</strong> Artificial Intelligence, Computational Photography, Computer Architecture, Database
        Systems, Parallel Programming
      </>,
      <>
        <strong>In Progress:</strong> Cryptography, Programming Languages and Compilers
      </>,
    ],
  },
];

export default education;
