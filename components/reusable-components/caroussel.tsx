import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";

interface carouselImageItem {
 url: string;
}

// Define the props for the Carrousel component
interface CarrouselProps {
 carouselImage: carouselImageItem[];
}

const Carrousel: React.FC<CarrouselProps> = ({ carouselImage }) => {
 return (
    <Carousel className="  w-full">
      <CarouselContent>
        {carouselImage.map((item, index) => {
          const backgroundStyle = {
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0) ,
                               rgba(255, 255, 255, 0.0) , rgba(255, 255, 255, 0.0) , rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9) , rgba(245, 245, 244, 1)), url(${item.url})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            width: "100%", // Equivalent to w-full
            height: "100%", // Equivalent to h-full
          };
          return (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                 <CardContent className="  flex w-full   " style={{ height: '500px' }}>
                    <div style={backgroundStyle}></div>
                 </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className=" left-8" />
      <CarouselNext className="right-8"/>
    </Carousel>
 );
}

export default Carrousel;







// import React from 'react';
// import  { useState } from "react";
// import itemsData from "@/public/items.json"
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// export default function Carrousel({carouselImage}) {
 
//     const [currentIndexes, setCurrentIndexes] = useState(
//         Array(itemsData.length + 1).fill(0)
//       );
//     const prevSlide = (groupIndex, cartLength) => {
//         const isFirstSlide = currentIndexes[groupIndex] === 0;
//         const newIndex = isFirstSlide
//           ? (cartLength - 1) % cartLength
//           : (currentIndexes[groupIndex] - 1) % cartLength;
    
//         setCurrentIndexes((prevState) =>
//           prevState.map((value, index) => (index === groupIndex ? newIndex : value))
//         );
//       };
    
//       const nextSlide = (groupIndex, cartLength) => {
//         const isLastSlide = currentIndexes[groupIndex] === cartLength - 1;
//         const newIndex = isLastSlide
//           ? 0
//           : (currentIndexes[groupIndex] + 1) % cartLength;
//         setCurrentIndexes((prevState) =>
//           prevState.map((value, index) => (index === groupIndex ? newIndex : value))
//         );
//       };
    
//       const goToSlide = (groupIndex, slideIndex) => {
//         setCurrentIndexes((prevState) =>
//           prevState.map((value, index) =>
//             index === groupIndex ? slideIndex : value
//           )
//         );
//       };
//   return (
//     <div className="w-vw  h-[512px]  m-auto py-8 px-2 relative group  ">
//     <button
//       style={{
//         backgroundImage:carouselImage[
//           currentIndexes[currentIndexes.length - 1]
//         ]
//           ? ` linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.0) ,
//                     rgba(255, 255, 255, 0.0) , rgba(255, 255, 255, 0.0) , rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9) , rgba(245, 245, 244, 1)) ,url(${
//                       carouselImage[currentIndexes[currentIndexes.length - 1]]
//                         .url
//                     })`
//           : "",
//       }}
//       className="w-full h-full  bg-top bg-cover object-top duration-500 mt-0    "
//     ></button>
//     <div className="top-[75%] ] left-[35%]   absolute text-center  font-serif text-xs sm:text-xl">
//       <h1 className="text-center">
//         You are on <span className="font-medium">URSTYLE</span> u can
//         see more like your mood..
//       </h1>
//     </div>

//     <div
//       className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//       onClick={() =>
//         prevSlide(currentIndexes.length - 1, carouselImage.length)
//       }
//     >
//       <BsChevronCompactLeft size={30} />
//     </div>

//     <div
//       className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//       onClick={() =>
//         nextSlide(currentIndexes.length - 1, carouselImage.length)
//       }
//     >
//       <BsChevronCompactRight size={30} />
//     </div>
//   </div>
//   );
// }
