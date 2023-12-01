import Image from 'next/image';
import React from 'react';

const PoemPage = () => {
  return (
    <div className="bg-bridal-900">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:flex-col lg:items-center
       lg:justify-between pb-8 "
      >
        <div className=" my-2 text-white min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-2xl mx-auto">
            <h1
              className="text-5xl font-bold mb-6 text-center text-amber-600"
              id="WeeklyPoem"
            >
              שיר השבוע
            </h1>
            <div className="flex flex-col md:flex-row animate-slide-down">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-6 max-h-7xl">
                <p className="text-lg mb-4 text-right">
                  <span>,</span>
                  בְּמָה רַע זְמַן זֶה מִזְמַנִּים שֶׁקָדְמוּ לוֹ? הַלוּמֵי
                  קְרָב
                  <br />
                  יָגוֹן וּפְחָדִים מִשַׁשְׁנוּ פְּצָעִים זְוָעָתִיִּים
                  שֶׁזֹּהֲמוּ
                  <br />
                  וְיָדֵינוּ לֹא הֵבִיאוּ שׁוּם מַרְפֵּא. בַּמַּעֲרָב אוֹר
                  הַשְׁקִיעָה
                  <br />
                  <span>,</span>
                  עוֹד מְלַהֵט, וְאֶשְׁכּוֹלוֹת שֶׁל גַּגּוֹת בּוֹהֲקִים
                  בַּשֶׁמֶשׁ
                  <br />
                  <span>,</span>
                  אַךְ כָּאן הַמָּוֶת כְּבָר עוֹבֵר וּמְסַמֶּן X עַל דְּלָתוֹת
                  <br />
                  <span>.</span>
                  וְקוֹרֵא לָעוֹרְבִים, וְהָעוֹרְבִים בָּאִים
                  <br />
                </p>
                <cite className="block text-right text-sm">
                  {' '}
                  שיר מאת אנה אחמטובה
                </cite>
              </div>
              <div className="flex justify-center mx-4">
                <Image
                  src="/assets/images/PoemsIllustration1.jpg" // Replace with the path to your illustration
                  alt="Illustration for the poem"
                  width={640} // Adjust the size as needed
                  height={360} // Adjust the size as needed
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoemPage;
