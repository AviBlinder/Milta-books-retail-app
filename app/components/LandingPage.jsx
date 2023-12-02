import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { track } from '@vercel/analytics';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Milta Books - Your Gateway to Literary Wonders</title>
        <meta
          name="description"
          content="Explore the world of literature with Milta Books. Discover our curated selection of books, exclusive events, and literary insights. Dive into your next great read today!"
        />
        <meta
          name="keywords"
          content="Milta Books, Bookstore, Literary Collections, Bestsellers, Book Recommendations"
        />
      </Head>

      <div
        className="flex min-h-screen flex-col items-center justify-center bg-gray-900"
        id="Home"
      >
        <div className="relative w-full flex-grow overflow-hidden">
          <Image
            src="/assets/images/HeroImage.png"
            alt="Milta Books Store"
            fill
            // objectFit="cover"
            className="z-0 adjusted-image object-cover"
          />
          <div
            className="absolute top-[68px] left-[30px] right-[0px] lg:top-[100px] lg:left-[0px] lg:-right-[80px]    
        flex flex-col items-center "
          >
            <h1
              className="text-[80px] md:text-[100px] lg:text-[120px] font-bold 
          header_gradient  tracking-wider"
            >
              מִילְתָא
            </h1>
            <p className="mt-2 text-[40px] md:text-[70px] lg:text-[80px] header_gradient lg:ml-4">
              חנות ספרים
            </p>
            {/* className="mt-8 rounded-md bg-bridal-900 px-4 py-2 text-base font-semibold text-gray-700 shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2" */}

            <div
              // bg-[#6e4e43]/90
              className="
            mt-8 md:mt-12 lg:mt-16 z-20
            text-4xl px-8 py-4 rounded-xl text-amber-200 hover:bg-[#6e4e43] bg-[#6e4e43]/90
            hover:cursor-pointer"
            >
              <Link
                onClick={() => {
                  track('VisitAbout');
                }}
                href="/About"
              >
                בואו לבקר
              </Link>
            </div>
          </div>

          <img
            className="hidden md:block absolute bottom-0 h-full w-screen"
            src="/assets/images/Wave.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
