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
              Sign up for urstyle
            </div>
            <div className=" text-xl font-mono text-black">
              Get E-mail updates about our latest clothes collection and
              <span className="text-orange-700"> special offer </span>
            </div>
          </div>
          {/* <div className=" flex"> */}
            {/* <textarea
              name=""
              id=""
              cols={30} 
              rows={1}
              placeholder="your email address"
              className=" text-center w-64 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
            ></textarea> */}
            {/* <textarea
              name=""
              id=""
              cols={10}
              rows={1}
              placeholder="sing up"
              className=" text-center w-32 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
            ></textarea> */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 py-2 bg-white mx-2 rounded-lg">
              <h2 className="title-font font-serif text-black tracking-widest text-lg mb-3">Subscribe</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Placeholder</label>
                  <input type="email"
              id="email"  name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                 
            
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded">Button</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              </p>
            </div>
          </div>
        </div>
      // </div>

  );
}
