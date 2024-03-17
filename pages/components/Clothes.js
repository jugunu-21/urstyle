import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import itemsData from "../../public/items.json";
import Carrousel from "@/Components/reusablecomponents/Carrousel";
import Smallicon from "@/Components/reusablecomponents/Smallicon";
import Link from "next/link";
import Star from "@/Components/reusablecomponents/Star"
import { caropic } from "@/Components/datas/caropicData";
import { iconsData } from "@/Components/datas/iconsData";
import { clickFiltersData } from "@/Components/datas/clickFiltersData";
import avgg from "@/Components/datas/avgg"
function Clothes() {

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

  
  const [filter, setfilter] = useState("");

  const [options, setoptions] = useState(false);
  return (
    <div className="mb-2 ">
      <div className="   text-2xl ">
        <div className="bg-white shadow  ">
          <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 font-serif ">
              Welcome to our site.....
            </h1>
          </div>
        </div>
        <Carrousel caropic={caropic} />
        <div className="  mx-2 mb-1 mt-2 ">
          <div
            className=" ml-1 inline-block "
            onMouseEnter={() => setoptions(true)}
            onMouseLeave={() => setoptions(false)}
          >
            <div className=" ">
              <button
                type="button"
                class=" relative inline-flex justify-center gap-x-1.5 rounded-md   pr-3 py-2   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  w-52 font-bold text-lg bg-gray-300 active:bg-gray-300"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setoptions(!options)}
              >
                Categories
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {options === true && (
              <div
                class="absolute z-10 bg-gray-300 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div class="py-1" role="none">
                  {clickFiltersData.map((item, index) => (
                    <div key={index}>
                      <Link
                        href="javascript:void(0)"
                        onClick={() => setfilter(item.link)}
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
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
      </div>
      <div>
        {itemsData.map((group, groupIndex) => (
          <div className="" key={group.id}>
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
                        href={{
                          pathname: "/components/Details",
                          query: {
                            groupid: group.id,
                          },
                        }}
                      >
                        Go to Details
                      </Link>
                    </div>
                    <div className="m-1">
                      <div className="font-normal">
                        <div>Expected delivery: {group.expected_delivery}</div>
                        <h2 className="">
                          Total cost :Rs {avgg({groupid:group.id} ).total}
                        </h2>
                        <Star len={avgg({groupid:group.id}).avgRating}/>
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 lg:grid-cols-4  items-center bg-stone-200 rounded-lg w-full ">
                    {group.cart.map((item, index) => (
                      <div key={index} className="mb-4 ">
                        <div className=" m-2 sm:m-auto  sm:w-64 h-[22rem] relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg  content-center hover:border-2 hover:border-stone-200 bg-white my-1 ">
                          <img
                            alt="photos"
                            className=" sm:w-46 max-h-[16rem]  object-cover align-middle  aspect-product  overflow-hidden "
                            src={item.image_url}
                          />
                          <div className="m-1 ml-2">
                            <div>
                              <span className="font-normal ">{item.name}</span>
                              <a
                                href={item.link}
                                className="font-medium bg-stone-200 rounded-lg px-1"
                              >
                                {findKeyword(item.image_url)}
                              </a>
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
        <Smallicon icon={iconsData} />
      </div>
    </div>
  );
}

export default Clothes;
