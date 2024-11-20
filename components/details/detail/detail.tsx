
"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import CalendarIcon from "@/components/reusable-components/calendar-icon";

import { DetailImageCollage } from "./detail-image-collage";
import IndividualProductDetail from "./detail-card";
import { ICollectionData } from "../interface";
import { Card, CardContent } from "@/components/ui/card";
import { calculateTotalPrice } from "@/components/reusable-components/total-product-price";
import { PlatformLinks } from "@/components/reusable-components/small-web-icons";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
function Details({ singleCollection }: { singleCollection: ICollectionData }) {
  return (
    <div className=" m-1">
      <Card>
        <CardContent>
          <div className="sm:grid grid-cols-2 rounded-lg m-auto item item  ">
            <div className="justify-center   items-center my-auto m-4  item item p-4">

              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold ">{singleCollection.name}</p>
                {/* <TextGenerateEffect className='text-5xl font-medium pb-4' words={singleCollection.name} /> */}
                <span className="top-[30px]  absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
              </div>
              <div className="my-2  text-lg font-medium" >{singleCollection.description}</div>
              {/* <div className='text-5xl font-medium' words={singleCollection.description} /> */}
              <div className="font-medium text-lg my-2 "> Rs. {calculateTotalPrice(singleCollection.products)}</div>
              {singleCollection.products.map((product) => [
                <div key={product.subCategory}>
                  {/* {product.name} */}
                </div>
              ])}
              <div className=" my-2 text-2xl">   <PlatformLinks productColl={singleCollection} /></div>

            </div>
            <div className=" m-4  items-end justify-end  item item">
              <DetailImageCollage products={singleCollection.products} />
            </div>
          </div>
        </CardContent>
      </Card>
      <div>
        < IndividualProductDetail products={singleCollection.products} collectionId={singleCollection.collectionId} />
      </div>
    </div>
  );
}
export default Details;

