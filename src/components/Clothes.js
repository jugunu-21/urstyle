import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import itemsData from "../items.json";
import { Link } from "react-router-dom";

import * as images from "./Features/image";

function Clothes() {
  const smallicon = [
    {
      url: images.image1,
      des: "Free shipping",
    },
    {
      url: images.image2,
      des: "  Online order",
    },
    {
      url: images.image3,
      des: "Save money",
    },
    {
      url: images.image4,
      des: " Promotions",
    },
    {
      url: images.image5,
      des: "  Happy Sell",
    },
    {
      url: images.image6,
      des: "  24/7 Support",
    },
  ];
  const caropic = [
    {
      url: "https://colorlib.com/wp/wp-content/uploads/sites/2/5_apparel-mockups.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61Pdr3h6MmL._SX3000_.jpg",
    },

    {
      url: " https://www.sheknows.com/wp-content/uploads/2018/12/xgaq7w4on5xummmnkzx5.jpeg?w=1024",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/febatf24/mfdunrec/WA_WW_2x._CB582758481_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/febatf24/mfdunrec/MA_2x._CB582758480_.jpg",
    },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    Array(itemsData.length + 1).fill(0)
  );

  const prevSlide = (groupIndex, cartLength) => {
    const isFirstSlide = currentIndexes[groupIndex] === 0;
    const newIndex = isFirstSlide
      ? (cartLength - 1) % cartLength
      : (currentIndexes[groupIndex] - 1) % cartLength;

    setCurrentIndexes((prevState) =>
      prevState.map((value, index) => (index === groupIndex ? newIndex : value))
    );
  };

  const nextSlide = (groupIndex, cartLength) => {
    const isLastSlide = currentIndexes[groupIndex] === cartLength - 1;
    const newIndex = isLastSlide
      ? 0
      : (currentIndexes[groupIndex] + 1) % cartLength;
    setCurrentIndexes((prevState) =>
      prevState.map((value, index) => (index === groupIndex ? newIndex : value))
    );
  };

  const goToSlide = (groupIndex, slideIndex) => {
    setCurrentIndexes((prevState) =>
      prevState.map((value, index) =>
        index === groupIndex ? slideIndex : value
      )
    );
  };
  const totalSum = (group) => {
    let sum = 0;
    let array = [];
    let totalrating = 0;
    let avg = 0;
    group.cart.forEach((item) => {
      const priceWithoutCurrency = item.price.replace("₹", "");

      const price = parseInt(priceWithoutCurrency);

      sum += price;
      let id = item.id;
      array.push(id);

      item.review.forEach((review) => {
        let rating = parseInt(review.rating);

        totalrating += rating;
      });

      let reviewLength = item.review.length;
      let avgrating = totalrating / reviewLength;

      avg = Math.floor(avgrating);

      totalrating = 0;
    });

    return { total: sum, allids: array, avgRating: avg };
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

  let caropicIndex = 0;

  const click = [
    {
      name: "All",
      link: "",
    },
    {
      name: "Party",
      link: "Party",
    },
    {
      name: "Casual",
      link: "Casual",
    },
    {
      name: "StreetStyle",
      link: "StreetStyle",
    },
    {
      name: "EthnicWear",
      link: "EthnicWear",
    },
  ];
  const [filter, setfilter] = useState("");
  // const clickFilter = (name) => {
  //   setfilter(name);
  // };
  const [options, setoptions] = useState(false);
  return (
    <div className="mb-2 ">
      <div className="   text-2xl ">
        <header className="bg-white shadow  ">
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 font-serif ">
              Welcome to our site.....
            </h1>
          </div>
        </header>
        <div className="w-vw  h-[512px]  m-auto py-8 px-2 relative group  ">
          <button
            style={{
              backgroundImage: caropic[
                currentIndexes[currentIndexes.length - 1]
              ]
                ? ` linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0) ,
                            rgba(255, 255, 255, 0.0) , rgba(255, 255, 255, 0.0) , rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9) , rgba(245, 245, 244, 1)) ,url(${
                              caropic[currentIndexes[currentIndexes.length - 1]]
                                .url
                            })`
                : "",
            }}
            className="w-full h-full  bg-top bg-cover object-top duration-500 mt-0    "
          ></button>
          <div className="top-[75%] ] left-[35%]   absolute text-center  font-serif text-xs sm:text-xl">
            <h1 className="text-center">
              You are on <span className="font-medium">URSTYLE</span> u can see
              more like your mood..
            </h1>
          </div>

          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={() => prevSlide(currentIndexes.length - 1, caropic.length)}
          >
            <BsChevronCompactLeft size={30} />
          </div>

          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={() => nextSlide(currentIndexes.length - 1, caropic.length)}
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
        <div className="mx-2 mb-1 mt-2 ">
          <div
            className=" ml-2 inline-block "
            onMouseEnter={() => setoptions(true)}
            onMouseLeave={() => setoptions(false)}
          >
            <div className=" ">
              <button
                type="button"
                class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-52"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setoptions(true)}
              >
                Categories
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {options === true && (
              <div
                class="  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  {click.map((item, index) => (
                    <Link
                      to="#"
                      onClick={() => setfilter(item.link)}
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {itemsData.map((group, groupIndex) => (
          <div className="" key={groupIndex}>
            {(filter === "" || group.look === filter) && (
              <section>
                {(groupIndex + 1) % 3 === 0 && (
                  <div className="w-[vw] h-48 sm:h-[300px] my-6">
                    {(() => {
                      caropicIndex = (caropicIndex + 1) % caropic.length;
                      return (
                        <div
                          className="h-40 sm:h-full w-full bg-cover bg-top text-2xl"
                          style={{
                            backgroundImage: `url(${caropic[caropicIndex].url})`,
                          }}
                        ></div>
                      );
                    })()}
                  </div>
                )}

                <div className=" px-4 my-4 bg-stone-100 rounded-lg       ">
                  <div className="flex space-x-10 m-1 p-2">
                    <div>
                      <h1 className=" text-xl sm:text-3xl font-bold tracking-tight">
                        {group.desc ? group.desc : "Summer Breeze Outfit"}
                      </h1>
                      <p className="text-gray-500 dark:text-gray-400">
                        Embrace the Season with Effortless Style
                      </p>
                      <Link
                        className=" bg-stone-200 rounded-lg hover:bg-stone-300 text-lg font-semibold text-neutral-950"
                        to={`/details/${encodeURIComponent(
                          JSON.stringify(totalSum(group))
                        )}/${groupIndex}`}
                      >
                        Go to Details
                      </Link>
                    </div>
                    <div className="m-1">
                      <div className="font-normal">
                        <div> Expected delivery: {group.expected_delivery}</div>
                        <h2 className="">
                          Total cost :Rs {totalSum(group).total}
                        </h2>
                        <div className="flex">
                          {Array.from(
                            { length: totalSum(group).avgRating },
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
                            { length: 5 - totalSum(group).avgRating },
                            (_, i) => (
                              <svg
                                key={i}
                                className="text-gray-400 h-5 w-5 flex-shrink-0"
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
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 lg:grid-cols-4  items-center bg-stone-200 rounded-lg w-full ">
                    {group.cart.map((item, index) => (
                      <div key={index} className="mb-4 ">
                        <div
                          key={index}
                          className=" m-2 sm:m-auto  sm:w-64 h-[22rem] relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg  content-center hover:border-2 hover:border-stone-200 bg-white my-1 "
                        >
                          <img
                            alt="photos"
                            className=" sm:w-46 max-h-[16rem]  object-cover align-middle  aspect-product  overflow-hidden "
                            src={item.image_url}
                          />
                          <div className="m-1 ml-2">
                            {/* <div className="font-medium ">{item.price}</div> */}
                            <div>
                              <span className="font-normal ">{item.name} </span>
                              <Link
                                to={item.link}
                                className="font-medium bg-stone-200 rounded-lg px-1"
                              >
                                {findKeyword(item.image_url)}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}
        <div className=" m-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-2 p-4 ">
          {smallicon.map((item, index) => (
            <div key={index}>
              <div className="  border-2 border-blue-300 rounded-lg m-2 ">
                <img src={item.url} alt="" />
                <div className=" m-2 pb-2 text-center pr-2 bg-blue-200 rounded-lg">
                  {item.des}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clothes;
