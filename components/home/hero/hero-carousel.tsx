import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import caropic from "@/public/caropicData"
export function HeroCarousel() {
  const backgroundStyle = (url: string) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  });
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="my-1 px-32 "
      plugins={[
        
      ]}
    >
      <CarouselContent className=" m-0 p-0">
        {caropic.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 h-44 m-0 p-0 ">
              <div style={backgroundStyle(item.url)} className=""></div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
      
    </Carousel>
  )
}
