import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// const Customersreview = (props) => {
//   const reviewData = props.reviewData; 
  // [
  //   {
  //     img: "https://www.thefamouspeople.com/profiles/images/jeff-bezos-2.jpg",
  //     name: "Emily Selman",
  //     date: "July 16, 2021",
  //     content:
  //       "This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!",
  //     rating: 3,
  //   },
  //   {
  //     img: "https://www.thefamouspeople.com/profiles/images/jeff-bezos-2.jpg",
  //     name: "Emily Selman",
  //     date: "July 16, 2021",
  //     content:
  //       "Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.",
  //     rating: 3,
  //   },
  //   {
  //     img: "https://www.thefamouspeople.com/profiles/images/jeff-bezos-2.jpg",
  //     name: "Mark Edwards",
  //     date: "July 6, 2021",
  //     content:
  //       "Really happy with the look and options of these icons. I've found uses for them everywhere in my recent projects. I hope there will be 20px versions in the future!",
  //     rating: 5,
  //   },
  // ];
  const Customersreview = (props) => {
    const reviewData = props.reviewData; // Assuming props.reviewData is an array of review objects
    
    return (
      <div className="my-8">
        {reviewData.map((review, index) => (
          <div key={index} className="my-6 text-gray-500 text-sm dark:text-emerald-500 ">
            <div className="flex">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={review.image} alt="" />
              </div>
              <div className="ml-4">
                <div className="font-medium text-gray-700 dark:text-orange-200">{review.rname}</div>
                <div className="text-gray-600 dark:text-emerald-400">{review.date}</div>
                <div className="flex items-center my-2">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <svg
                      key={i}
                   
                      className="text-gray-200 dark:text-emerald-700 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="gold"
                      aria-hidden="true"
                    >
                    
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                   {Array.from({ length: (5-review.rating) }, (_, i) => (
                    <svg
                      key={i}
                   
                      className="text-gray-200 dark:text-rose-50 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                    
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  
                </div>
                <div className="mt-2">{review.content}</div>
              </div>
            </div>
            {index !== reviewData.length - 1 && (
              <div className="my-4 border-t border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  



const FAQ = () => {
  return (
    <div className="text-gray-500 dark:text-emerald-200 ">
      <div className="py-4">
        <h4 className=" py-1 text-gray-700 dark:text-orange-200 font-semibold ">
          What format are these icons?
        </h4>
        <p className=" ">
          The icons are in SVG (Scalable Vector Graphic) format. They can be
          imported into your design tool of choice and used directly in code.
        </p>
      </div>
      <div className="py-2">
        <h4 className=" py-1 text-gray-700 dark:text-orange-200  font-semibold ">
          Can I use the icons at different sizes?
        </h4>
        <p className="">
          Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be
          scaled to different sizes as needed. We don't recommend going smaller
          than 20 x 20 or larger than 64 x 64 to retain legibility and visual
          balance.
        </p>
      </div>
      <div className="py-2">
        <h4 className=" py-1 text-gray-700 dark:text-orange-200 font-semibold ">
          Do I have to add attribution to my projects?
        </h4>
        <p className="">
          No. You are allowed to use these icons freely in your personal and
          professional work. If you enjoy the icon pack, feel free to tell
          others!
        </p>
      </div>
    </div>
  );
};
const License = () => (
  <div className="text-gray-500  dark:text-emerald-500">
    <div className="py-2">
      <h4 className=" py-1 text-gray-700 dark:text-orange-200 font-semibold ">Overview</h4>
      <p >
        For personal and professional use. You cannot resell or redistribute
        these icons in their original or modified state.
      </p>
      <ul className=" py-1 ml-4 list-disc  ">
        <li>
      
          <span>You're allowed to use the icons in unlimited projects.</span>
        </li>
        <li>
          <span>Attribution is not required to use the icons.</span>
        </li>
      </ul>
    </div>
    <div className="py-2">
  
      <h6 className=" text-gray-700 dark:text-orange-200 font-semibold">What you can do with it </h6>
      <ul className=" py-1 list-disc ml-4">
        <li>
          Use them freely in your personal and professional work. Make them your
          own.
        </li>
        <li> liChange the colors to suit your project or brand.</li>
      </ul>
    </div>
    <div className="py-2">
      <h6 className=" text-gray-700  dark:text-orange-200 font-semibold">
        What you can't do with it
      </h6>
      <ul className=" py-1 list-disc ml-4">
        <li>
          Don't be greedy. Selling or distributing these icons in their original
          or modified state is prohibited.
        </li>
        <li>
          Don't be evil. These icons cannot be used on websites or applications
          that promote illegal or immoral beliefs or activities.
        </li>
      </ul>
    </div>
  </div>
);
export default function Moredetails() {
  const [selectedContent, setSelectedContent] = useState("customers");
  
  const { id, itemsArrayString } = useParams();
  const itemId = id;
  const decodedItemsArray = JSON.parse(decodeURIComponent(itemsArrayString));

  if (!decodedItemsArray || !Array.isArray(decodedItemsArray)) {
    return <div>Error: Invalid data format</div>;
  }

  const finalItem = decodedItemsArray.find((item) => item?.id === itemId);
  
  if (!finalItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className=" dark:bg-black p-4 lg:grid lg:grid-cols-2 lg:grid-rows-4  space-x-4 -space-y-1 ">
      <div className="lg:col-span-1  lg:row-span-2 ">
        <div
          className="  rounded-lg overflow-hidden"
          style={{ height: "600px" }}
        >
          <img
            src={finalItem.image_url}
            className=" object-cover object-center h-full w-full"
            alt=""
          />
        </div>
      </div>
      <div className="lg:col-span-1  lg:row-span-4 pr-10 ">
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              <svg
                className="text-gray-900 dark:text-red-500 font-bold h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-900  dark:text-red-500 font-bold font-bold h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-900  dark:text-red-500 font-bold h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-900  dark:text-red-500 font-bold h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="gold"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="text-gray-200 dark:text-rose-200 h-5 w-5 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {/* <p className="sr-only">4 out of 5 stars</p>
            <Link
              to="#"
              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              117 reviews
            </Link> */}
          </div>
        </div>
        <div>
          <h1 className="pt-4 pb-2 text-3xl font-bold">
            Application UI Icon Pack
          </h1>
          <h1 className="pb-4 text-gray-500 dark:text-emerald-500">
            Version 1.0 (Updated June 5, 2021)
          </h1>
          <div className="space-y-6">
            <p className="text-base text-gray-500 dark:text-emerald-500">
            The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.
            </p>
          </div>
        </div>

        <div className=" md:inline-flex ">
        
          <Link to={finalItem.link}  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-20 md:mx-2 "> Pay$220</Link>
          
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-20  "
          >
            Preview
          </button>
        </div>
        <div className="my-4 border-t border-gray-200 dark:text-emerald-800 "></div>

        <div className="mt-10">
          <h3 className="text-sm m text-gray-900  dark:text-red-500 font-bold">Highlights</h3>

          <div className="mt-4">
            <ul className="list-disc space-y-2 pl-4 text-sm">
              <li>
                <span className="text-gray-500 dark:text-emerald-500">Hand cut and sewn locally</span>
              </li>
              <li className="text-gray-500 dark:text-emerald-500">
                <span className="text-gray-500 dark:text-emerald-500">
                  Dyed with our proprietary colors
                </span>
              </li>
              <li className="text-gray-500 dark:text-emerald-500">
                <span className="text-gray-500 dark:text-emerald-500">
                  Pre-washed &amp; pre-shrunk
                </span>
              </li>
            </ul>
          </div>
          <div className="my-4 border-t border-gray-200 dark:text-emerald-700"></div>
        </div>
        <div className="mt-10">
          <h2 className="text-sm text-gray-900  dark:text-red-500 font-bold">License</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-500 dark:text-emerald-500">
              The 6-Pack includes two black, two white, and two heather gray
              Basic Tees. Sign up for our subscription service and be the first
              to get new, exciting colors, like our upcoming &quot;Charcoal
              Gray&quot; limited release.
            </p>
          </div>
        </div>
        <div className="my-4 border-t border-gray-200 dark:border-emerald-800"></div>
        <div className=" mt-10 pb-10 ">
          <h2 className="text-sm  text-gray-900  dark:text-red-500 font-bold pb-4 ">Share </h2>
          <div className=" flex  space-x-6  ">
            <Link to="#" className="aspect-square size-5  ">
              <img
                src="https://1.bp.blogspot.com/-qYwreqeIN6w/XN0LzjGE2GI/AAAAAAAAAmA/PV1m0NfGuxUEXFBS8Ge4VMXWE34XzrfYgCPcBGAYYCw/s20/facebook-logo-Grey-%2Bhigh%2Bresolution.png"
                alt=""
              />
            </Link>
            <Link to="#" className="aspect-square size-5 ">
              <img
                src="https://www.iconninja.com/files/611/75/580/instagram-icon.png"
                alt=""f
                srcset=""
              />
            </Link>
            <Link to="#" className="aspect-square size-8   ">
              <img className="rounded-full"
                src="https://logowik.com/content/uploads/images/twitter-x-line9741.logowik.com.webp"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 lg:row-span-4 pt-10 ">
        <div className="  inline-flex space-x-5 dark:text-neutral-50 ">
          <button
            className="border border-transparent group  hover:border-b-gray-500   focus:border-b-black "
            onClick={() => setSelectedContent("customers")}
          >
            Customers Review
          </button>
          <button
            className="border border-transparent group hover:border-b-gray-700
          focus:outline-none focus:border-b-black"
            onClick={() => setSelectedContent("FAQ")}
          >
            FAQ
          </button>
          <button
            className="border border-transparent group hover:border-b-gray-700 focus:outline-none focus:border-b-black"
            onClick={() => setSelectedContent("License")}
          >
            License
          </button>
        </div>

        <div className="my-4 border-t border-gray-200 dark:border-emerald-800"></div>
        <div>{selectedContent === "customers" && <Customersreview reviewData={finalItem.review} />}</div>

        <div>{selectedContent === "FAQ" && <FAQ />}</div>
        <div>{selectedContent === "License" && <License />}</div>
      </div>
    </div>
  );
}
