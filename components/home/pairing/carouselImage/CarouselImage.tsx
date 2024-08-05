

import React, { useState } from "react";

import { useEffect } from "react";
interface CarouselImageProps {
  caropicData: { url: string }[]; // Array of objects containing URL strings
}

const CarouselImage: React.FC<CarouselImageProps> = ({ caropicData }) => {
  const [caropicIndex, setCaropicIndex] = useState(0);

  const getNextIndex = () => (caropicIndex + 1) % caropicData.length;

  const handleClick = () => {
    setCaropicIndex(getNextIndex());
  };
  useEffect(() => {
    // This function will run automatically when the component mounts
   handleClick();
  }, []); 
  return (
    <div className="w-[vw] h-48 sm:h-[300px] my-6">
      <div
        className="h-40 sm:h-full w-full bg-cover bg-top text-2xl"
        style={{
          backgroundImage: `url(${caropicData[caropicIndex].url})`,
        }}
      ></div>
    </div>
  );
};

export default CarouselImage;

