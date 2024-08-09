import HorizontalCenterContent from '../../components/horizontal-center-content';
import Footer from '../../features/footer/footer';
import HomeButton from '../../features/home-button/home-button';

export default function NotFound() {
  return (
    <HorizontalCenterContent>
      <HomeButton />
      <h1>404 Page Not Found</h1>
      <Footer />
    </HorizontalCenterContent>
  );
}
