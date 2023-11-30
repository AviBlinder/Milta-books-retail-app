import LandingPage from '@/app/components/LandingPage';
import RecommendedBooks from '@/app/components/RecommendedBooks';
import Events from '@/app/components/Events';
import About from '@/app/components/About';

export default function Landing() {
  return (
    <>
      <LandingPage />
      <RecommendedBooks />
      <Events />
      <About />
    </>
  );
}
