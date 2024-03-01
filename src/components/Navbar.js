import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'About', to: '/about', current: true },
  { name: 'Contact', to: '/contact', current: true },
  { name: 'Home', to: '/home', current:true}
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-full h-full">
      <nav className="bg-purple-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="font-serif text-cyan-800 text-xl font-extrabold">URSTYLE</Link>
              </div>
              <div className="">
                <div className="ml-2 sm:ml-10 flex items-baseline">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="text-gray-900 text-base font-semibold hover:bg-gray-700 hover:text-white rounded-md px-1 sm:px-3 sm:py-2"
                      aria-current={item.current ? 'page' : undefined}
                     
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="" >
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3">
                  <button
                    type="button"
                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    onClick={handleDropdownToggle}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-10 rounded-full" src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129" alt="" />
                  </button>
                  {isDropdownOpen && (
                    <span className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main></main>
    </div>
  );
}


     
    

