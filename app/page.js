import LandingPage from '@/app/components/LandingPage';
import RecommendedBooks from '@/app/components/RecommendedBooks';
import Events from '@/app/components/Events';
import About from '@/app/components/About';
import Head from 'next/head';

export default function Landing() {
  return (
    <>
      <Head>
        <title>Milta Books Retail Shop</title>
        <description>
          A Bricks-and-Mortar books shop located in Rehovot
        </description>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <LandingPage />
      <RecommendedBooks />
      <Events />
      <About />
    </>
  );
}
