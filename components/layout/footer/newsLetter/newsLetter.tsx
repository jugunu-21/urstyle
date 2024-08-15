import React from 'react';

export default function Newsletter() {
  return (

         <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://cm1.narvii.com/6520/3b103973169af1af80f04d5e06842fb47be23c15_00.jpg')`,
        }}
       >
        <div className=" py-2 px-2 sm:py-8 sm:px-24 lg:flex">
          <div className=" rounded-lg bg-white p-2 "  >
            <div className="font-serif text-black text-3xl">
              sign up for urstyle
            </div>
            <div className=" text-xl font-mono text-black">
              Get E-mail updates about our latest clothes collection and
              <span className="text-orange-700"> special offer </span>
            </div>
          </div>
          <div className=" flex">
            <textarea
              name=""
              id=""
              cols={30} 
              rows={1}
              placeholder="your email address"
              className=" text-center w-64 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
            ></textarea>
            <textarea
              name=""
              id=""
              cols={10}
              rows={1}
              placeholder="sing up"
              className=" text-center w-32 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
            ></textarea>
          </div>
        </div>
      </div>

  );
}
