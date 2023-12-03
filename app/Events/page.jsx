import React from 'react';
import client from '@/utils/contentfulClient';

export const metadata = {
  title: 'Upcoming Events at Milta Books - Join the Literary Community',
  description:
    'Stay updated with the latest events at Milta Books. From our Jazz evenings to meeting award-winning poets, there is always something exciting happening. Join our literary community today!',
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

export const revalidate = 604800;
export async function fetchEvents() {
  try {
    const response = await client.getEntries({
      content_type: 'events',
    });
    console.log('response.items :', response.items);
    return response.items;
  } catch (error) {
    console.log('error =', error);
    return [];
  }
}

const EventsComponent = async () => {
  const events = await fetchEvents();
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
              {events.map((event, index) => (
                <div
                  key={index}
                  className="mt-0 sm:mt-2 mr-5 sm:mr-28 shadow-md p-2 md:p-4"
                >
                  <h1 className="text-2xl md:text-3xl font-bold text-right tracking-wide">
                    {event.fields.title}
                  </h1>
                  <div className="text-xl md:text-2xl font-normal tracking-wide">
                    {event.fields.eventDescription.content.map((content) =>
                      content.content.map((paragraph, index) => (
                        <p className="mr-2  " dir="rtl" key={index}>
                          {paragraph.value}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
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
