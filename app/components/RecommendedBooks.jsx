import Image from 'next/image';
import client from '@/utils/contentfulClient';
import { convertNumbers } from '@/utils/convertNumbers';

export default function RecommendedBooks({ recommendationItems }) {
  // const getAssetURL = async (asset) => {
  //   await client.getAsset(asset).then((asset) => {
  //     console.log(`asset: ${asset.fields.file.url}`);
  //     return asset.fields.file.url;
  //   });
  // };
  return (
    <div className="bg-bridal-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:flex-col lg:items-center lg:justify-between">
        <div className="text-4xl md:text-6xl font-medium flex justify-center align-middle text-primary-700 mb-6">
          <h1 className="text-right">
            {`${convertNumbers(recommendationItems.length)} המומלצים שלנו`}
          </h1>
        </div>
        <ul
          role="list"
          className="w-full grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-9 
          lg:grid-cols-12 "
        >
          {recommendationItems.map((item, index) => (
            <li
              key={index}
              className="col-span-1 md:col-span-3 lg:col-span-4  
              flex flex-col divide-y divide-gray-200 rounded-lg 
              bg-white text-center shadow transform hover:md:scale-110 transition duration-500 ease-in"
            >
              <div className="flex flex-col items-stretch">
                <div className="">
                  <Image
                    className="object-cover rounded-t-lg"
                    src={`https:${item.fields.bookImage?.fields?.file.url}`}
                    alt={item.fields.bookImage?.fields?.file.title}
                    height={800}
                    width={500}
                    // fill
                  />
                </div>
                <div className="">
                  <h3 className="mt-6 text-3xl text-slate-600 font-medium text-center ">
                    {item.fields.title}
                  </h3>
                </div>
                <div>
                  {item.fields.description.content.map((line) =>
                    line.content.map((value) => (
                      <p
                        dir="rtl"
                        className="mt-1 text-xl md:text-2xl text-slate-500 mr-2 px-2 text-right"
                      >
                        {value.value}
                      </p>
                    ))
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
