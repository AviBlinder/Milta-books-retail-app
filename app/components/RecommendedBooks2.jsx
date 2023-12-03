import Image from 'next/image';
import client from '@/utils/contentfulClient';
import { convertNumbers } from '@/utils/convertNumbers';

export default function RecommendedBooks({ recommendationItems }) {
  console.log('recommendationItems = ', recommendationItems);
  return (
    <div className="bg-bridal-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:flex-col lg:items-center lg:justify-between">
        <div className="text-4xl md:text-6xl font-medium flex justify-center text-primary-700 mb-6">
          <h1 className="text-right">
            {`${convertNumbers(recommendationItems.length)} המומלצים שלנו`}
          </h1>
        </div>
        <ul
          role="list"
          className="w-full grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {recommendationItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow hover:scale-105 transition duration-500 ease-in-out"
            >
              <div className="flex flex-col items-stretch">
                <div className="h-auto w-full">
                  <Image
                    className="object-cover rounded-t-lg"
                    src={`https:${item.fields.bookImage?.fields?.file.url}`}
                    alt={item.fields.bookImage?.fields?.file.title}
                    layout="fill"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mt-2 text-xl text-slate-600 font-medium text-right">
                    {item.fields.title}
                  </h3>
                  <div className="text-lg text-slate-500 text-right">
                    {item.fields.description.content.map((line, lineIndex) =>
                      line.content.map((value, valueIndex) => (
                        <p
                          key={`${lineIndex}-${valueIndex}`}
                          className="mt-1 text-right"
                        >
                          {value.value}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
