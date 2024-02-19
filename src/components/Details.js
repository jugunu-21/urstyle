import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsData from "../items.json";
import { Link } from "react-router-dom";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const Details = () => {
  const { detail, groupIndex } = useParams();

  const [currentIndexes, setCurrentIndexes] = useState(0);

  const detailAll = JSON.parse(decodeURIComponent(detail));
  const allids = detailAll.allids;

  const filteredItems = () => {
    let filteredItemsArray = [];

    itemsData.forEach((item) => {
      item.cart.forEach((cartItem) => {
        if (allids.includes(cartItem.id)) {
          const filteredItem = {
            id: cartItem.id,
            image_url: cartItem.image_url,
            // Add any other properties you want to include
            name: cartItem.name,
            link: cartItem.link,
            price: cartItem.price,
            review: cartItem.review,
            description:cartItem.description
            // Add more properties if needed
          };
          // Push the filtered item to the array
          filteredItemsArray.push(filteredItem);
        }
      });
    });

    // Set the filtered items array to state
    return filteredItemsArray;
  };
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / reviews.length;
  };
  const itemsArrayString = encodeURIComponent(JSON.stringify(filteredItems()));
  const prevSlide = (cartLength) => {
    const isFirstSlide = currentIndexes === 0;
    const newIndex = isFirstSlide
      ? cartLength - 1
      : (currentIndexes - 1) % cartLength;
    // Update the currentIndexes array with the new index for the specific group
    setCurrentIndexes(newIndex);
  };
  const nextSlide = (cartLength) => {
    const isLastSlide = currentIndexes === cartLength - 1;
    const newIndex = isLastSlide ? 0 : currentIndexes + 1;
    setCurrentIndexes(newIndex);
  };
  const findKeyword = (string) => {
    const pattern = /\b(amazon|flipkart|mesho)\b/gi;

    const matches = string.match(pattern);

    if (matches) {
      return matches;
    } else {
      return "No keywords found";
    }
  };
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    )
  }
  return (
    <div className="  text-slate-900  m-1">
      <div className="grid grid-cols-2 border-2 rounded-lg border-stone-300  md:ml-10 m-2 ">
        <div className="m-4 ">
          <div className="m-1 font-bold text-xl">{itemsData[groupIndex].desc}</div>
          <div className="font-bold m-1"> Total Price  : Rs  {detailAll.total}</div>
          
         
          <div className=" m-1 flex">
                       
                       {Array.from(
                         { length: detailAll.avgRating },
                         (_, i) => (
                           <svg
                             key={i}
                             className="h-4 w-4 flex-shrink-0"
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
                         )
                       )}
                       {Array.from(
                         { length: 5 - detailAll.avgRating },
                         (_, i) => (
                           <svg
                             key={i}
                             className="text-gray-400 h-4 w-4 flex-shrink-0"
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
                         )
            )}
             <span className="text-xs text-muted-foreground pl-2"> ( ★ 
              {detailAll.avgRating}.0)</span>
                     </div>
                     <div className="flex items-center">
          <div className=" m-1 font-bold"> Expected-delivery date :{itemsData[groupIndex].expected_delivery}</div>
          <CalendarIcon className="w-4 h-4 fill-current" />
         </div>
          <div className="m-1">{itemsData[groupIndex].overall_description} </div>
          
         
        </div>
        <div className="h-[340px] w-[350px]  m-auto  px-2 relative group  ">
          <div
            style={{
              backgroundImage: filteredItems()[currentIndexes]
                ? ` url(${filteredItems()[currentIndexes].image_url})`
                : "",
            }}
            className="w-full h-full  bg-center bg-cover duration-500 mt-0   "
          ></div>
          {/* Left Arrow */}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={() => prevSlide(filteredItems().length)}
          >
            <BsChevronCompactLeft size={30} />
          </div>
          {/* Right Arrow */}
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={() => nextSlide(filteredItems().length)}
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      </div>
      <div>
        {filteredItems().map((item, index) => (
          <div>
            <div
              key={index}
              className=" grid grid-cols-2 md:flex md:ml-10 m-2 bg-stone-200 "
            >
              {item && (
                <>
                  <div className="m-2 overflow-hidden  bg-cover bg-top   w-52 h-52  bg-white hover:border-4 rounded-lg hover:border-stone-300">
                    <img
                      className=" mx-auto max-w-full h-full object-cover align-middle  "
                      src={item.image_url}
                      alt=""
                    />
                  </div>

                  <div className=" m-2 pl-3  ">
                    <div className="     rounded-md  font-semibold ">
                      {item.name}
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                       
                        {Array.from(
                          { length: calculateAverageRating(item.review) },
                          (_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 flex-shrink-0"
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
                          )
                        )}
                        {Array.from(
                          { length: 6 - calculateAverageRating(item.review) },
                          (_, i) => (
                            <svg
                              key={i}
                              className="text-gray-400 h-4 w-4 flex-shrink-0"
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
                          )
                        )}
                      </div>
                      <div className="mx-2">{item.review.length} Reviews</div>
                    </div>
         
                    <div>{item.description}</div>
                 
                    
                    <Link
                      to={item.link}
                      className="font-medium bg-stone-300 hover:bg-stone-400 rounded-lg px-1"
                    >
                      {findKeyword(item.image_url)}
                    </Link>

              
                    <div className=" flex my-2 items-center space-x-3 font-bold">
                      <div className="    rounded-md   "> Price: {item.price}</div>

                      <Link
                        to={`/moredetails/${item.id}/${itemsArrayString}`}
                        rel="noopener noreferrer"
                        className=" flex   items-center   rounded-lg bg-stone-300 hover:bg-stone-400 p-1  "
                      >
                        Details
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2} // Corrected property name
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="my-4 border-t border-gray-200"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
