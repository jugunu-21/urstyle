import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

import React from "react";

import itemsData from "../items.json";

const Details = () => {
  const { upperId, lowerId } = useParams();

  const upperItemId = upperId;
  const lowerItemId = lowerId;

  const upperItem = itemsData?.find((item) => item?.upper?.id === upperItemId);
  const lowerItem = itemsData?.find((item) => item?.lower?.id === lowerItemId);

  if (!upperItem && !lowerItem) {
    return <div>Item not found</div>;
  }

  const itemsArray = [
    {
      id: upperItem?.upper?.id,
      name: upperItem?.upper?.name,
      link: upperItem?.upper?.link,
      image_url: upperItem?.upper?.image_url,
      price: upperItem?.upper?.price,
      review: upperItem?.upper?.review || [],
    },
    {
      id: lowerItem?.lower?.id,
      name: lowerItem?.lower?.name,
      link: lowerItem?.lower?.link,
      image_url: lowerItem?.lower?.image_url,
      price: lowerItem?.lower?.price,
      review: lowerItem?.lower?.review || [],
    },
  ];
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRating / reviews.length;
  };

  const itemsArrayString = encodeURIComponent(JSON.stringify(itemsArray));
  return (
    <div className= " dark:bg-black text-slate-900 dark:text-emerald-100 p-4">
      {itemsArray.map((item, index) => (
        <div key={index} className="md:flex  space-x-4 my-4 ">
          {item.image_url && (
            <div className="m-2 overflow-hidden item-center " style={{ width: "400px", height: "500px" }}>
           <img
             className=" w-full h-full object-cover align-middle rounded-lg hover:border-4 hover:border-violet-500"
             src={item.image_url}
             alt=""
           />
         </div>
         
          )}
          {item.name && (
            <>
              <div className="p-4 pl-10 sm:block    md:flex md:items-center md:justify-center">
                <div className="mb-4">
                  <div
                    className={classNames(
                      item.current
                        ? "py-4 bg-emerald-950 dark:bg-emerald-950 text-white"
                        : "hover:bg-gray-700 hover:text-white",
                      "rounded-md text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </div>
                  <div className="flex py-4">
                    {Array.from(
                      { length: calculateAverageRating(item.review) },
                      (_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 flex-shrink-0"
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
                          className="text-pink-200 h-5 w-5 flex-shrink-0"
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
                  <div
                    className={classNames(
                      item.current
                        ? "bg-gray-900 "
                        : "hover:bg-gray-700 hover:text-white",
                      "rounded-md text-sm font-medium"
                    )}
                  >
                    {item.price}
                  </div>

                  <div className=" my-4 py-4">
                    <Link
                      to={`/moredetails/${item.id}/${itemsArrayString}`}
                      rel="noopener noreferrer"
                      className=" inline-flex items-center px-10 py-4 text- font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
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
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-4 border-t border-gray-200"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Details;
