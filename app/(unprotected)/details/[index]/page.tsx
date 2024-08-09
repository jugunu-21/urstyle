"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import avgg from "@/components/reusableComponent/avg";
import CalendarIcon from "@/components/reusableComponent/calendarIcon";
import Star from "@/components/reusableComponent/star";
import itemsData from "@/Data/items.json";
import Cardlist from "@/components/details/overview/cardList/cardList";
import Summary from "@/components/details/overview/summary/summary";
function Details() {
  const params = useParams();
  const productIdArray = Array.isArray(params.index)
    ? params.index
    : [params.index];
  const [param1] = productIdArray;
  const groupIndex = param1 ? parseInt(param1, 10) : undefined;


  
  // Ensure groupIndex is a valid number and within the bounds of itemsData
  if (
    groupIndex === undefined ||
    isNaN(groupIndex) ||
    groupIndex < 0 ||
    groupIndex >= itemsData.length
  ) {
    return <div>Item not found</div>;
  }

  const filteredItems = itemsData[groupIndex];

  // const groupIndex = index;
  // const filteredItems = itemsData[groupIndex];

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

          <div className=" m-1 flex flex-row ">
            <div className="w-28">
            <div className="h-4 w-6">
                      
                      <Star len={avgg({ groupid: groupIndex }).avgRating} />
                      </div>
            </div>
            
           
            <div>
              <span className="text-xs text-muted-foreground pl-2">
                (★{avgg({ groupid: groupIndex }).avgRating}.0)
              </span>
            </div>
          </div>
          <div className=" sm:flex items-center">
            <div className=" m-1 font-bold">
              Expected delivery date :{filteredItems.expected_delivery}
            </div>
            <CalendarIcon />
          </div>
          <div className="m-1">{filteredItems.overall_description}</div>
        </div>
        <Cardlist filteredItems={filteredItems} />
      </div>
      <div>
        <Summary filteredItems={filteredItems} groupIndex={groupIndex} />
      </div>
    </div>
  );
}

export default Details;
