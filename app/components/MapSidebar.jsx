import React from 'react';

const MapSidebar = ({ isMapVisible, onClose }) => {
  return (
    <div
      className={`fixed top-[10%] left-[3%] md:left-[5%] md:right-[15%] mx-0 md:mx-5 z-50 w-[95%] md:w-[90%]  h-3/4 bg-white transform
                  ${isMapVisible ? 'translate-x-0' : '-translate-x-[-110%]'}
                  transition-transform duration-700 ease-in-out`}
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-4 p-2 bg-amber-100 rounded-xl text-black 
        border-gray-400 border-2 shadow-md"
      >
        סגירת מפה
      </button>
      <iframe
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?q=Yaakov%2026%20Street,%20Rehovot%20-%20Israel&t=&z=15&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
};

export default MapSidebar;
