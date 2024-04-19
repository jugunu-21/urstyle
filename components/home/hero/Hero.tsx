"use client"
import React from 'react';
import Carrousel from "@/components/reusablecomponents/Carrousel"
import caropic from "@/Data/caropicData"
export default function Hero() {
  return (
    <div>
       <div className="mb-2 ">
    
      <div className="bg-white shadow  ">
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 font-serif ">
              Welcome to our site.....
            </h1>
          </div>
        </div>
        <Carrousel caropic={caropic} />
        </div>
       
        </div>
  );
}
