import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

export default function RecommendedBooks() {
  return (
    <div className="bg-bridal-900">
      <div
        className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:items-center
       lg:justify-between"
      >
        <ul
          role="list"
          className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-9 
          lg:grid-cols-12"
        >
          {people.map((person) => (
            <li
              key={person.email}
              className="col-span-1 md:col-span-3 lg:col-span-4  
              flex flex-col divide-y divide-gray-200 rounded-lg 
              bg-white text-center shadow "
            >
              <div className="flex flex-col">
                <div className="h-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src={person.imageUrl}
                    alt="book image"
                  />
                </div>
                <div className="h-1/2">
                  <h3 className="mt-6 text-3xl text-slate-600 font-medium ">
                    {person.name}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-xl text-gray-600">{person.title}</dd>
                  </dl>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
