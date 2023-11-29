import Image from 'next/image';
import LandingPage from '@/app/components/LandingPage';
import RecommendedBooks from '@/app/components/RecommendedBooks';

export default function Landing() {
  return (
    <>
      <LandingPage />
      <RecommendedBooks />
    </>
  );
}
