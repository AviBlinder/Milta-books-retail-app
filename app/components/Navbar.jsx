'use client';
import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

const navigation = [
  { name: 'אודות', href: 'About' },
  { name: 'שיר השבוע', href: 'Poem' },
  { name: 'אירועים', href: 'Events' },
  { name: 'מומלצים', href: 'Recommended' },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        // You can adjust the offset as needed
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        hasScrolled ? 'sticky bg-slate-50/70' : 'absolute'
      } inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <nav
        className="flex items-center justify-between py-2 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 hover:cursor-pointer">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Milta Books</span>
            <img
              className="h-12 w-auto rounded-full"
              src="assets/icons/MiltaLogo.png"
              alt="Milta Books Logo"
            />
          </Link>
        </div>
        <p>{hasScrolled}</p>
        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
          </button>
        </div>
        {/* Desktop Menu  */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              activeClass="active"
              to={item.href} // The href should be the id of the target component
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={item.name}
              className={`${
                hasScrolled
                  ? 'text-gray-700 hover:bg-bridal-900 hover:underline hover:underline-offset-4'
                  : 'bg-transparent text-white hover:underline hover:underline-offset-4'
              } text-2xl font-semibold tracking-wide leading-6 
                 
              px-6 py-2 hover:cursor-pointer rounded-xl`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Placeholder div for additional justify-end menu options */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden py-3 px-6"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 " />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bridal-900 
        px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
        >
          <div className="flex items-center justify-between ">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Milta Books</span>
              <img
                className="h-8 w-auto rounded-full"
                src="assets/icons/MiltaLogo.png"
                alt="Milta Books Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6 flex flex-col items-center">
                {navigation.map((item) => (
                  <Link
                    activeClass="active"
                    to={item.href} // 'to' prop should match the id attribute of the target component
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={item.name}
                    className="-mx-3 block rounded-lg px-20 py-2 text-2xl font-semibold leading-7 text-gray-500 hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)} // Close the mobile menu on click
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
