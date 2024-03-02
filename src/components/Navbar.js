import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About", to: "/about", current: true },
  { name: "Contact", to: "/contact", current: true },
  { name: "Home", to: "/home", current: true },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenHem, setIsDropdownOpenHem] = useState(false);

  return (
    <div className="min-h-full h-full bg-purple-200">
      <div className=" flex relative  h-16 mx-auto max-w-7xl px-4  items-center justify-between ">
        <div className="flex items-center justify-between ">
          <div className="">
            <Link
              to="/"
              className="font-serif text-cyan-800 text-xl font-extrabold"
            >
              URSTYLE
            </Link>
          </div>
          <div className="hidden xsm:block">
            <div className="flex   ml-2 sm:ml-10 items-baseline">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="hidden xsm:block text-sm sm:text-base  font-medium sm:font-bold hover:bg-gray-700 hover:text-white rounded-md px-1 sm:px-3 sm:py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div
            className=" block xsm:hidden "
            onMouseEnter={() => setIsDropdownOpenHem(true)}
            onMouseLeave={() => setIsDropdownOpenHem(false)}
          >
            <div className="ml-4 flex items-center md:ml-6">
              <div className=" ml-3">
                <button
                  type="button"
                  className="  max-w-xs items-center  text-sm    "
                  id="user-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setIsDropdownOpenHem(!isDropdownOpenHem)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {isDropdownOpenHem === true && (
                  <div
                    className="absolute z-10 right-0  mt-2 w-44 bg-white origin-top-right rounded-lg  py-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button" onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="pl-4 block py-1 text-sm sm:text-base  font-normal hover:bg-gray-700 hover:text-white rounded-md px-1 "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3">
                <button
                  type="button"
                  className=" flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <img
                    className="h-8 w-10 rounded-full"
                    src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129"
                    alt=""
                  />
                </button>
                {isDropdownOpen === true && (
                  <div
                    className=""
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div
                      className=" absolute z-10 right-2   w-44  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </Link>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main></main>
    </div>
  );
}
