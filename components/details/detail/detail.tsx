// "use client";
// import React from "react";
// import { useParams, useSearchParams } from "next/navigation";
// import avgg from "@/components/reusable-components/average-review";
// import CalendarIcon from "@/components/reusable-components/calendar-icon";
// import Star from "@/components/reusable-components/star-icon";
// // import itemsData from "@/public/items.json";
// import {DetailCollage} from "./detail-image-collage";
// import Summary from "./detail-card";
// import {Icollection} from "../interface"
// function Details ({filteredItems ,groupIndex}:{filteredItems:Icollection,groupIndex:number}) {

//   return (
//     <div className="    m-1">
//       <div className="flex sm:flex-cols-2 border-2 rounded-lg border-stone-300  md:ml-10 m-2 ">
//         <div className="m-4 ">
//           <div className="m-1 font-bold text-xl">
//             {filteredItems && filteredItems.desc && (
//               <div className="m-1 font-bold text-xl">{filteredItems.desc}</div>
//             )}
//           </div>
//           <div className="font-bold m-1">
//             Total Price : Rs {avgg({ groupid: groupIndex }).total}
//           </div>

//           <div className=" m-1 flex flex-row ">
//             <div className="w-28">
//             <div className="h-4 w-6">

//                       <Star len={avgg({ groupid: groupIndex }).avgRating} />
//                       </div>
//             </div>


//             <div>
//               <span className="text-xs text-muted-foreground pl-2">
//                 (★{avgg({ groupid: groupIndex }).avgRating}.0)
//               </span>
//             </div>
//           </div>
//           <div className=" sm:flex items-center">
//             <div className=" m-1 font-bold">
//               Expected delivery date :{filteredItems.expected_delivery}
//             </div>
//             <CalendarIcon />
//           </div>
//           <div className="m-1">{filteredItems.overall_description}</div>
//         </div>
//         <DetailCollage filteredItems={filteredItems} />
//       </div>
//       <div>
//         <Summary filteredItems={filteredItems} groupIndex={groupIndex} />
//       </div>
//     </div>
//   );
// }

// export default Details;
"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import CalendarIcon from "@/components/reusable-components/calendar-icon";
import Star from "@/components/reusable-components/star-icon";
import { ImageCollage} from "./detail-image-collage";
import Summary from "./detail-card";
import { IProduct } from "../interface";
import {ICollectionData } from "../interface";
function Details({ filteredItems}: { filteredItems: ICollectionData }) {
  // const images = filteredItems.products.map(product => product.image);

  return (
    <div className=" m-1">
   
      <div className="sm:grid grid-cols-3 rounded-lg  border-2  border-green-600   m-2 ">
        <div className="m-4   border-2  border-green-600 ">
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
        <div className=" m-4 col-span-2 border-2  border-green-600   ">  
                 <ImageCollage products ={filteredItems.products} />
                 </div>

      </div>
     
      <div>
        <Summary products={filteredItems.products} collectionId={filteredItems.collectionId} />
      </div>

    </div>
  );
}
export default Details;

