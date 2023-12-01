import Image from 'next/image';

const LandingPage = () => {
  return (
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
          className="absolute top-20 left-[30px] right-[0px] lg:top-15 lg:left-[0px] lg:right-[2px]    
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
          {/* <button
            href="#"
            className="mt-8 rounded-md bg-bridal-900 px-4 py-2 text-base font-semibold text-gray-700 shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            הנחות חורף
          </button> */}
        </div>
        <img
          className="hidden md:block absolute bottom-0 h-full w-screen"
          src="/assets/images/Wave.png"
        ></img>
      </div>
    </div>
  );
};

export default LandingPage;
