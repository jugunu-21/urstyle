import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CategoryCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
        
      }}
      className="w-full items-center justify-center p-2 mt-4 "
    >

        
      <CarouselContent className=" w-96 p-2 ">
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/6   border-gray-500s p-2 items-center justify-center">
            
              <Card className="  border-gray-900" >
                <CardContent className=" aspect-square border-2 border-gray-500 rounded-full items-center justify-center p-6">
                </CardContent>
               
              </Card>
              <span className=" flex justify-center items-centetext-sm font-semibold  border-gray-500 
              ">{index + 1}</span>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
