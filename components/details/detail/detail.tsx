
"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import CalendarIcon from "@/components/reusable-components/calendar-icon";

import { ImageCollage } from "./detail-image-collage";
import IndividualProductDetail from "./detail-card";
import { IProduct } from "../interface";
import { ICollectionData } from "../interface";
function Details({ filteredItems }: { filteredItems: ICollectionData }) {
  return (
    <div className=" m-1">
      <div className="sm:grid grid-cols-3 rounded-lg    m-2 ">
        <div className="m-4    ">
          <div className="m-1 font-bold text-xl">
            {filteredItems && filteredItems.description && (
              <div className="m-1 font-bold text-xl">{filteredItems.description}</div>
            )}
          </div>
          <div className="font-bold m-1">
          </div>
          <div className=" m-1 flex flex-row ">
            <div className="w-28">
            </div>
            <div>
            </div>
          </div>
          <div className=" sm:flex items-center">
            <CalendarIcon />
          </div>
        </div>
        <div className=" m-4 col-span-2 items-end justify-end  ">
          <ImageCollage products={filteredItems.products} />
        </div>
      </div>
      <div>
        < IndividualProductDetail products={filteredItems.products} collectionId={filteredItems.collectionId} />
      </div>
    </div>
  );
}
export default Details;

