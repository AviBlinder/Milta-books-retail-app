import Image from 'next/image';
import client from '@/utils/contentfulClient';
// import { useEffect, useState } from 'react';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

// export default function RecommendedBooks({ recommendationItems }) {
export default function RecommendedBooks() {
  // console.log('recommendationItems:', recommendationItems.length);
  const getAssetURL = async (asset) => {
    await client.getAsset(asset).then((asset) => {
      console.log(`asset: ${asset.fields.file.url}`);
      return asset.fields.file.url;
    });
  };

  return (
    <div className="bg-bridal-900">
      <div
        className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:flex-col lg:items-center
       lg:justify-between"
      >
        <div className="text-4xl md:text-6xl font-medium flex justify-center align-middle text-primary-700 mb-6">
          <h1 id="Recommended"> המומלצים שלנו</h1>
        </div>
        <ul
          role="list"
          className="w-full grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-9 
          lg:grid-cols-12 "
        >
          {people.map((person, index) => (
            <li
              key={index}
              className="col-span-1 md:col-span-3 lg:col-span-4  
              flex flex-col divide-y divide-gray-200 rounded-lg 
              bg-white text-center shadow transform hover:md:scale-110 transition duration-300 ease-in-out"
            >
              <div className="flex flex-col">
                <div className="h-3/5 ">
                  <img
                    className="w-full h-full object-cover rounded-t-lg"
                    src={person.imageUrl}
                    alt="book image"
                  />
                </div>
                <div className="h-2/5">
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
