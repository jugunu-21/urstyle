// CarouselImage.js

import React from 'react';

function CarouselImage({ caropicIndex, caropic }) {
  return (
    <div className="w-[vw] h-48 sm:h-[300px] my-6">
      <div
        className="h-40 sm:h-full w-full bg-cover bg-top text-2xl"
        style={{
          backgroundImage: `url(${caropic[caropicIndex].url})`,
        }}
      ></div>
    </div>
  );
}

export default CarouselImage;
