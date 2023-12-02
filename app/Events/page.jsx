import React from 'react';
export const metadata = {
  title: 'Upcoming Events at Milta Books - Join the Literary Community',
  description:
    'Stay updated with the latest events at Milta Books. From our Jazz evenings to meeting award-winning poets, there is always something exciting happening. Join our literary community today!',
  // content=", , , , , "
  keywords: [
    'Milta Books Events',
    'Bookstore Events',
    'Literary Events',
    'Reading Sessions',
    'Community Events',
    'Poetry  Events',
    'Jazz Events',
  ],
};

const events = [
  {
    title: 'POSTER-MAKING CONTEST',
    description:
      'Join our annual celebration of all things art and literature. Winners will be announced on August 31. Click here for more details.',
  },
  {
    title: 'MEET AND GREET STELLA ORNELAS',
    description:
      'Award-winning poet Stella Ornelas is dropping by on March 10, 7 PM. She will be reading from her new collection, Spring, and signing copies. Buy tickets now!',
  },
  {
    title: 'STORY TIME WITH FRIENDS',
    description:
      "Read books and spend time with kids for an afternoon in an event hosted by the Lily River Children's Foundation. Volunteer now.",
  },
];

const EventsComponent = () => {
  return (
    <>
      <div className="bg-bridal-900" id="Events">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:flex-col lg:items-center
       lg:justify-between pb-8"
        >
          <div className="text-4xl md:text-6xl font-medium flex justify-center align-middle text-primary-700 mb-6">
            <h1> אירועים קרובים</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-evenly animate-slide-inwards-left">
              <div className="mt-0 sm:mt-2 mr-5 sm:mr-28">
                <h1 className="text-2xl font-bold">POSTER-MAKING CONTEST</h1>
                <h3 className="text-xl font-normal">
                  {' '}
                  Join our annual celebration of all things art and literature.
                  Winners will be announced on August 31. Click here for more
                  details.
                </h3>
              </div>
              <div className="mt-4 sm:mt-2 mr-5 sm:mr-28">
                <h1 className="text-2xl font-bold">
                  {' '}
                  MEET AND GREET STELLA ORNELAS
                </h1>
                <h3 className="text-xl font-normal">
                  {' '}
                  Award-winning poet Stella Ornelas is dropping by on March 10,
                  7 PM. She will be reading from her new collection, Spring, and
                  signing copies. Buy tickets now!
                </h3>
              </div>
              <div className="mt-4 sm:mt-2 mr-5 sm:mr-28 mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold">STORY TIME WITH FRIENDS</h1>
                <h3 className="text-xl font-normal">
                  {' '}
                  Read books and spend time with kids for an afternoon in an
                  event hosted by the Lily River Children's Foundation.
                  Volunteer now.
                </h3>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-6 gap-1 shadow-lg">
              <div className="col-span-3">
                <img
                  src="/assets/images/JazzEvent1.jpg"
                  alt="Events"
                  className="rounded-lg shadow-md h-full object-cover"
                />
              </div>
              <div className="col-span-3">
                <img
                  src="/assets/images/Event2.jpg"
                  alt="Events"
                  className="rounded-lg shadow-md h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsComponent;
