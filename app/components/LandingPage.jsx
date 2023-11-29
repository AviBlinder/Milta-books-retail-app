import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
      <div className="relative w-full flex-grow overflow-hidden">
        <Image
          src="/assets/images/HeroImage.png"
          alt="Milta Books Store"
          layout="fill"
          objectFit="cover"
          className="z-0 adjusted-image"
        />
        <div
          className="absolute top-20 right-[55px] lg:top-40 lg:left-20 lg:py-10    
        flex flex-col items-center px-20 "
        >
          <h1 className="text-6xl md:text-6xl lg:text-[100px] font-bold text-white tracking-wider">
            מִילְתָא
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
            חנות ספרים
          </p>
          <a
            href="#"
            className="mt-8 rounded-md bg-bridal-900 px-4 py-2 text-base font-semibold text-gray-700 shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            הנחות חורף
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full ">
          <Image
            src="/assets/images/wave.png"
            alt="Wave Design"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
            className="z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
