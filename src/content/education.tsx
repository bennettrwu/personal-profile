export type EducationInfo = {
  start_date: string | React.JSX.Element;
  end_date: string | React.JSX.Element;
  gpa: string | React.JSX.Element;
  school: string | React.JSX.Element;
  degree: string | React.JSX.Element;
  points: Array<string | React.JSX.Element>;
};

// Education
const UIUC: EducationInfo = {
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
};

const Education = [UIUC];

export default Education;
