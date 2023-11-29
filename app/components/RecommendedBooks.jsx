import Image from 'next/image';

const RecommendedBooks = () => {
  const sections = [
    {
      title: 'PAPERBACKS/HARDBOUND',
      description: 'We proudly carry over one million book titles',
      imageSrc: '/assets/images/book1.png',
    },
    {
      title: 'ELECTRONIC BOOKS',
      description: 'An assortment of downloadable titles for your e-reader',
      imageSrc: '/assets/images/book2.png',
    },
    {
      title: 'MUSIC AND VIDEOS',
      description: 'We have a vast collection of records and DVDs',
      imageSrc: '/assets/images/book3.png',
    },
  ];

  return (
    <div className="bg-bridal-900">
      <div
        className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:items-center
       lg:justify-between lg:min-h-screen"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">מִילְתָא</span>
          <span className="block text-indigo-600">המלצות העורכים</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-0">
          {sections.map((section) => (
            <div key={section.title} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                      <Image
                        src={section.imageSrc}
                        alt=""
                        className="h-8 w-8"
                        width={32}
                        height={32}
                        layout="responsive"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {section.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
