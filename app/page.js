'use client';
import LandingPage from '@/app/components/LandingPage';
import RecommendedBooks from '@/app/components/RecommendedBooks';
import Events from '@/app/components/Events';
import About from '@/app/components/About';
import WeeklyPoem from '@/app/components/WeeklyPoem';
import { usePathname } from 'next/navigation';

export default function Landing() {
  return (
    <div className="bg-bridal-900">
      <LandingPage />
    </div>
  );
}
