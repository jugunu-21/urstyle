"use client";
import React, { useState } from "react";

import Link from "next/link";

const navigation = [
  { order: "1", name: "About", to: "/Component/About" },
  { order: "2", name: "Contact", to: "/Component/Contact" },
  { order: "3", name: "Home", to: "/Component/Home" },
];
import Navbardrop from "@/components/layout/navbar/Navbardrop"

export default function Navbar() {
  const [isDropdownOpenHem, setIsDropdownOpenHem] = useState(false);


  return (
    <div className="  bg-purple-200">
      <div className="flex relative h-16 mx-auto max-w-7xl px-4 items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="">
            <Link
              href="/"
              className="font-serif text-cyan-800 text-xl font-extrabold"
            >
              URSTYLE
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex ml-2 sm:ml-10 items-baseline">
              {navigation.map((item) => (
                <Link key={item.order} href={item.to}>
                  <div className="pl-4 text-neutral-950 block py-1 text-sm sm:text-base font-normal hover:bg-gray-700 hover:text-white rounded-md px-1">
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div
            className="block sm:hidden"
            onMouseEnter={() => setIsDropdownOpenHem(true)}
            onMouseLeave={() => setIsDropdownOpenHem(false)}
          >
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3">
                <button
                  type="button"
                  className="max-w-xs items-center text-sm"
                  id="user-menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  aria-label="for dropping the auth functionalities"
                  onClick={() => setIsDropdownOpenHem(!isDropdownOpenHem)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {isDropdownOpenHem && (
                  <div className="absolute z-10 right-0 mt-2 w-44 bg-white origin-top-right rounded-lg py-1">
                    {navigation.map((item) => {
                      return (
                        <Link key={item.order} href={item.to}>
                          <div className="pl-4 text-neutral-950 block py-1 text-sm sm:text-base font-normal hover:bg-gray-700 hover:text-white rounded-md px-1">
                            {item.name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
         <Navbardrop/>
      
        </div>
      </div>

    </div>
  );
}
{/* <img
                    className="h-8 w-10 rounded-full"
                    src="https://cdnb.artstation.com/p/assets/images/images/048/110/613/small/pankaj-kumar-roy-12.jpg?1649236129"
                    alt=""
                  /> */}