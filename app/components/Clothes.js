"use client"
import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import itemsData from "../../public/items.json";
import Carrousel from "../../Components/reusablecomponents/Carrousel";
import Smallicon from "../../Components/reusablecomponents/Smallicon";
import Link from "next/link";
import Star from "../../Components/reusablecomponents/Star";
import { caropic } from "../../Components/datas/caropicData";
import { iconsData } from "../../Components/datas/iconsData";
import { clickFiltersData } from "../../Components/datas/clickFiltersData";
import avgg from "../../Components/datas/avgg";
import Sitelink from "../../Components/reusablecomponents/Sitelink";
import Menudropdown from "../..//Components/reusablecomponents/Menudropdown";
function Clothes() {
  let caropicIndex = 0;
  const [filter, setfilter] = useState("");

  const handleFilterChange = (newFilter) => {
    setfilter(newFilter);

    console.log("Filter changed:", newFilter);
  };
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
        <Menudropdown
          name="categories"
          dropdata={clickFiltersData}
          onfilterchange={handleFilterChange}
        />
      </div>
      <div>
        {itemsData.map((group,groupIndex) => (
          <div key={groupIndex}>
            {(filter === "" || group.look === filter) && (
              <section>
              {((group.id + 1) % 3 === 0) && (
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

                <div className=" px-4 my-4 bg-stone-100 rounded-lg ">
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
                          query: { groupindex: groupIndex} // Correctly specify groupid in query parameters
                        }}
                      >
                        Go to Details
                      </Link>
                    </div>
                    <div className="m-1">
                      <div className="font-normal">
                        <div>Expected delivery: {group.expected_delivery}</div>
                        <h2 className="">
                          Total cost :Rs {avgg({ groupid: groupIndex }).total}
                        </h2>
                        <Star len={avgg({ groupid: groupIndex }).avgRating} />
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 lg:grid-cols-4  items-center bg-stone-200 rounded-lg w-full ">
                    {group.cart.map((cart, index) => (
                      <div key={index} className="mb-4 ">
                        <div className=" m-2 sm:m-auto  sm:w-64 h-[22rem] relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg  content-center hover:border-2 hover:border-stone-200 bg-white my-1 ">
                          <img
                            alt="photos"
                            className=" sm:w-46 max-h-[16rem]  object-cover align-middle  aspect-product  overflow-hidden "
                            src={cart.image_url}
                          />
                           < Sitelink sitelink={cart.image_url}/>
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
