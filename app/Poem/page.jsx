import Image from 'next/image';
import React from 'react';
import client from '@/utils/contentfulClient';

export const metadata = {
  title: 'Poem of the Week at Milta Books - Literary Inspiration',
  description:
    'Delve into our featured poem of the week by renowned poet Anna Akhmatova. Experience the depth of words and emotions at Milta Books, your literary retreat.',
  keywords: [
    'Milta Books Poetry',
    'Weekly Poem',
    'Weekly Selected Story',
    'Literary Inspiration',
    'Poetry Collection',
    'Anna Akhmatova',
  ],
};
export async function fetchPoem() {
  try {
    const response = await client.getEntries({
      content_type: 'poem',
    });
    return response.items;
  } catch (error) {
    console.log('error =', error);
    return [];
  }
}

const PoemPage = async () => {
  const weeklyPoem = await fetchPoem();

  return (
    <>
      <div className="bg-bridal-900">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:flex-col lg:items-center
       lg:justify-between pb-8 "
        >
          <div className=" my-2 text-white min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl mx-auto">
              <h1
                className="text-5xl font-bold mb-6 text-center text-amber-600"
                id="WeeklyPoem"
              >
                שיר השבוע
              </h1>
              {weeklyPoem.map((poem, poemIndex) => (
                <div key={poemIndex} className="flex flex-col md:flex-row ">
                  <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-6 max-h-7xl animate-slide-inwards-left">
                    {' '}
                    {poem.fields.poem.content.map((paragraph, index) =>
                      paragraph.content.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          dir="rtl"
                          className="text-xl md:text-2xl mb-4 text-right text-semibold text-amber-200"
                        >
                          {line.value}
                        </p>
                      ))
                    )}
                    <p
                      dir="rtl"
                      className="italic text-xl md:text-2xl mb-4 text-right text-semibold  text-amber-200"
                    >
                      {poem.fields.poemName}
                    </p>
                    <p
                      dir="rtl"
                      className="mt-2 italic text-xl md:text-2xl mb-4 text-right text-semibold  text-amber-200"
                    >
                      איור: {poem.fields.illustrationName}
                    </p>
                  </div>
                  <div
                    className="relative max-h-screen w-[25vw] 
                  flex justify-center mx-4 animate-slide-inwards-right "
                  >
                    <Image
                      src={`https:${poem.fields.illustration.fields.file.url}`}
                      alt={`${poem.fields.illustration.fields.file.fileName}`}
                      fill
                      // width={
                      //   poem.fields.illustration.fields.file.details.image.width
                      // }
                      // height={
                      //   poem.fields.illustration.fields.file.details.image
                      //     .height
                      // }
                      className="rounded-lg "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoemPage;
