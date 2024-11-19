
"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import CalendarIcon from "@/components/reusable-components/calendar-icon";

import { DetailImageCollage } from "./detail-image-collage";
import IndividualProductDetail from "./detail-card";
import { ICollectionData } from "../interface";
import { Card, CardContent } from "@/components/ui/card";
import { calculateTotalPrice } from "@/components/reusable-components/total-product-price";
function Details({ singleCollection }: { singleCollection: ICollectionData }) {
  return (
    <div className=" m-1">
      <Card>
        <CardContent>
          <div className="sm:grid grid-cols-12 rounded-lg m-auto item ">
            <div className="justify-center col-span-5  items-center my-auto m-4  item">
              <div className="m-1 font-bold text-2xl" >{singleCollection.name}</div>
              <div className="my-2  text-lg font-semibold" >{singleCollection.description}</div>
              <div className="font-bold "> Rs. {calculateTotalPrice(singleCollection.products)}</div>
              {singleCollection.products.map((product) => [
                <div key={product.subCategory}>
                  {/* {product.name} */}
                </div>
              ])}
              {/* <div className="my-2  text-lg font-semibold">{singleCollection.products[1].image}</div> */}
            </div>
            <div className=" m-4 col-span-7 items-end justify-end  item ">
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

