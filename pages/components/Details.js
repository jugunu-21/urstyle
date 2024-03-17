import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

import itemsData from "@/public/items";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CalendarIcon from "@/Components/reusablecomponents/CalendarIcon";
import Star from "@/Components/reusablecomponents/Star";
import avgg from "@/Components/datas/avgg";
function Details() {
  // const router = useRouter();
  // const {
  //   query: { groupid },
  // } = router;
  // const props = {
  //   groupid,
  // };
  // // console.log(groupid);
  // let groupIndex = parseInt(props.groupid);
  const groupIndex = 0;
  const filteredItems = itemsData[groupIndex];
  const findKeyword = (string) => {
    const pattern = /\b(amazon|flipkart|mesho)\b/gi;
    const matches = string.match(pattern);

    if (matches && matches.includes("amazon")) {
      return "https://www.citypng.com/public/uploads/preview/-115963234920bla0rqz8j.png"; // Image URL for Amazon
    } else {
      return ""; // Return empty string for no image
    }
  };

  return (
    <div className="    m-1">
      <div className="grid sm:grid-cols-2 border-2 rounded-lg border-stone-300  md:ml-10 m-2 ">
        <div className="m-4 ">
          <div className="m-1 font-bold text-xl">
            {filteredItems && filteredItems.desc && (
              <div className="m-1 font-bold text-xl">{filteredItems.desc}</div>
            )}
          </div>
          <div className="font-bold m-1">
            Total Price : Rs {avgg({ groupid: groupIndex }).total}
          </div>

          <div className=" m-1 flex">
            <Star len={avgg({ groupid: groupIndex }).avgRating} />

            <span className="text-xs text-muted-foreground pl-2">
              (★{avgg({ groupid: groupIndex }).avgRating}.0)
            </span>
          </div>
          <div className=" sm:flex items-center">
            <div className=" m-1 font-bold">
              Expected-delivery date :{filteredItems.expected_delivery}
            </div>
            <CalendarIcon className="w-4 h-4 fill-current" />
          </div>
          <div className="m-1">{filteredItems.overall_description}</div>
        </div>
        <div className="  h-[340px] w-[450px]  m-auto  px-2 items-center ">
          <div class="flex flex-col flex-wrap h-96 m-2">
            {filteredItems.cart.map((item) => {
              const code = parseInt(item.code);
              return (
                <div key={item.id}>
                  {code === 3 && (
                    <img
                      className="max-h-[300px] w-auto rounded-lg"
                      src={item.image_url}
                      alt=""
                    />
                  )}
                  {code === 1 && (
                    <div className="">
                      <img
                        className="max-h-[100px] w-auto  rounded-lg"
                        src={item.image_url}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {filteredItems.cart.map((item) => (
          <div>
            <div
              key={item.id}
              className=" grid grid-cols-2 md:flex md:ml-10 m-2 bg-stone-200 "
            >
              {item && (
                <>
                 
                    <div className="m-2 overflow-hidden  bg-cover bg-top   sm:w-52 h-52  bg-white hover:border-4 rounded-lg  border-2 hover:border-stone-300">
                      <img
                        className=" mx-auto max-w-full h-full object-cover align-middle  "
                        src={item.image_url}
                        alt=""
                      />
                    </div>

                    <div className=" m-2 pl-3  ">
                      <div className="     rounded-md  font-bold ">
                        {item.name}
                      </div>
                      <div className="flex items-center">
                        <Star len={item.review} />

                        <div className="mx-2">
                          {avgg({ groupid: item.id }).avgRating} Reviews
                        </div>
                      </div>
                      <div className="font-semibold my-1">{item.price}</div>
                      <div className="mb-2">{item.description}</div>
                      <div className="h-8 w-24">
                        <Link
                          href={item.link}
                          className="w-full h-full font-medium rounded-lg bg-black bg-cover flex items-center justify-center hover:border-2 hover:border-gray-200 "
                          style={{
                            backgroundImage: `url(${findKeyword(
                              item.image_url
                            )})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          {/* Optional: Display a placeholder or text if no image is found */}
                          {!findKeyword(item.image_url) && (
                            <span className="text-white">
                              Image not available
                            </span>
                          )}
                        </Link>
                      </div>

                      <div className=" flex my-2 items-center space-x-3 font-medium">
                        <Link
                           href={{
                            pathname: "/components/Moredetails",
                            query: {
                              itemid: item.id,
                              groupid:groupIndex,
                            },
                          }}
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
}

export default Details;
