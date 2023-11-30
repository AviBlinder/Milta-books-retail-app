import React from 'react';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const About = () => {
  const divStyle = {
    backgroundColor: '#191919',
    color: '#D8D355',
  };

  return (
    <div style={divStyle}>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:flex-col lg:items-center
       lg:justify-between pb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 mt-2 md:mt-4">
            <img
              src="/assets/images/OraNiv-MiltaOwner.png"
              alt="Events"
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
          <div className="col-span-1" style={divStyle}>
            <div className="grid grid-rows-1 mt-16 md:mt-28 md:grid-rows-8 ">
              <div className="row-span-1 row-start-1 md:row-span-2 md:row-start-4 ">
                <div className="flex justify-center items-center ">
                  <h3 className="text-2xl md:text-5xl"> החנות ברחובות</h3>
                </div>
              </div>
              <div className=" row-span-1 md:row-span-4">
                <div className="flex flex-row justify-center mt-1 md:mt-6 md:flex-row">
                  <div className="flex items-center px-10 flex-col pt-4 md:pt-10">
                    <div>
                      <h3 className=" text-xl md:text-2xl text-left">
                        {' '}
                        Yaakov 26 Street
                      </h3>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl text-left">
                        {' '}
                        Rehovot, Israel
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center px-10 flex-col pt-4 md:pt-10">
                    <div>
                      <h3 className=" text-xl md:text-2xl text-right">
                        {' '}
                        רח' יעקב 26
                      </h3>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl text-right">
                        {' '}
                        רחובות, ישראל
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-16 md:mt-28">
            <div className="flex flex-col justify-evenly ">
              <div className="flex justify-center items-center">
                <h1 className="text-2xl md:text-5xl mt-4 md:mt-14">
                  {' '}
                  דרכים לתקשר איתנו
                </h1>
              </div>
              <div className="py-10">
                <div className="flex flex-row py-4 md:py-8">
                  <span className="sr-only">Telephone</span>
                  <FaFacebook
                    className="h-7 w-6 "
                    style={divStyle}
                    aria-hidden="true"
                  />

                  <p className="ml-4 text-white text-xl md:text-2xl">
                    {' '}
                    https://www.facebook.com/miltabooks
                  </p>
                </div>
                <div className="flex flex-row py-4 md:py-8">
                  <span className="sr-only">Telephone</span>
                  <MdOutlineMail
                    className="h-7 w-6"
                    style={divStyle}
                    aria-hidden="true"
                  />
                  <p className="ml-4 text-white text-xl md:text-2xl">
                    {' '}
                    milta.books@gmail.com
                  </p>
                </div>
                <div className="flex flex-row py-4 md:py-8">
                  <span className="sr-only">Telephone</span>
                  <FaPhoneAlt
                    className="h-7 w-6"
                    style={divStyle}
                    aria-hidden="true"
                  />
                  <p className="ml-4 text-white text-xl md:text-2xl">
                    {' '}
                    08-649-8979
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <img
              src="/assets/images/ShopsInside.jpg"
              alt="Events"
              className="rounded-lg shadow-md h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
