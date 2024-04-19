"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Menudropdown({ name, dropdata, onfilterchange }) {
 const [optionsVisible, setOptionsVisible] = useState(false);

 const handleMouseEnter = () => {
    setOptionsVisible(true);
 };

 const handleMouseLeave = () => {
    setOptionsVisible(false);
 };

 const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
 };

 return (
    <div  className="mx-2 mb-1 mt-2">
      <div 
        className="ml-1 inline-block bg-slate-800"
        // onMouseEnter={handleMouseEnter}
       // onMouseLeave={handleMouseLeave}
     
       >
        <div className="flex items-center">
          <button
            type="button"
            className="relative inline-flex justify-center gap-x-1.5 rounded-md pr-3 py-2 text-gray-900 shadow-sm   w-52 font-bold text-lg bg-gray-300 active:bg-gray-300"
            onClick={toggleOptions}
          >
            {name}
          </button>
          <svg
            className="text-gray-400 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            height="20"
            width="20"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {optionsVisible && (
          <div className="absolute z-10 bg-gray-300 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="py-1" role="none">
              {dropdata.map((item, index) => (
                <div key={index}>
                 <Link
                    href="#"
                    onClick={() => onfilterchange(item.link)}
                    className="text-gray-700 block px-4 py-2 text-sm"
                 >
                    {item.name}
                 </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
 );
}
