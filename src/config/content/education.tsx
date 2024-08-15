import { EducationContent } from '../../types/configurable-content';

const education: EducationContent[] = [
  // UIUC
  {
    start_date: 'Aug 2022',
    end_date: 'May 2026',
    school: 'University of Illinois Urbana Champaign',
    degree: (
      <>
        Bachelor of Science in Computer Science (Expected May 2025)
        <br />
        Professional Master of Computer Science (Expected May 2026)
      </>
    ),
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
