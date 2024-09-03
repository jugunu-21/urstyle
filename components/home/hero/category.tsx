import * as React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { fashionCategory } from "@/public/category"
export function Category({ setCategoryQuery }: { setCategoryQuery: (category: string) => void }) {
  const scrollbarRef = React.useRef(null);

  return (

    <div className="  flex h-32 overflow-x-auto w-full   p-1 pb-0 mt-4 gap-2">

      <button className="  h-20 aspect-square " onClick={() => setCategoryQuery('')}>
        <div className="aspect-square rounded-full border-2 border-y-red-300" style={{ backgroundImage: `url(${'/f1.png'})`, backgroundSize: 'cover' }}>

        </div>
        <div className="justify-center items-center text-xs font-semibold ">Urstyle</div>

      </button>
      <div
        className="  border-[1px] border-stone-800 mt-1 mb-6 "
        
      ></div>
      <div className="flex gap-3  ">
        {fashionCategory.map((fashion, index) => (
          <button key={index} className="focus:border-2 focus:border-green-200 rounded-full h-14 aspect-square " onClick={() => setCategoryQuery(fashion.look)}>
            <div className="aspect-square rounded-full " style={{ backgroundImage: `url(${fashion.image})`, backgroundSize: 'cover' }}>

            </div>
            <div className="justify-center items-center text-xs font-semibold ">{fashion.look.split(' ')[0]}</div>

          </button>
        ))}
      </div>
    </div>

  )
}
