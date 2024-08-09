import HorizontalCenterContent from '../../components/horizontal-center-content';
import Bio from '../../features/bio/bio';
import Education from '../../features/education/education';
import Footer from '../../features/footer/footer';
import Skills from '../../features/skills/skills';
import WorkExperience from '../../features/work-experience/work-experience';

export default function Profile() {
  return (
    <HorizontalCenterContent>
      <Bio />
      <Education />
      <Skills />
      <WorkExperience />
      <Footer />
    </HorizontalCenterContent>
  );
}
