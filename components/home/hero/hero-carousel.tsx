import * as React from "react";
import { carrouselImage } from "@/public/carrouselImage";
export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideInterval = 3000; // 3 seconds


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carrouselImage.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [carrouselImage.length]);

  return (
    <div id="default-carousel" className="relative w-full h-52" data-carousel="slide">
      <div className="relative h-48 overflow-hidden rounded-lg md:h-96">
        {carrouselImage.map((pair, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="sm:flex w-full h-48">
              <img
                src={pair.url}
                className="block sm:w-1/2 h-48 object-cover w-full"
                alt={`Image ${index + 1}`}
              />
              <img
                src={carrouselImage[(index + 1) % carrouselImage.length]?.url}
                className=" w-1/2 h-48  object-cover hidden sm:block"
                alt={`Image ${index + 2}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {carrouselImage.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-cyan-700" : "bg-gray-300"
              }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30  items-center justify-center h-full px-4 cursor-pointer group hidden"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + carrouselImage.length) % carrouselImage.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 hidden items-center justify-center h-full px-4 cursor-pointer group "
        onClick={() => setCurrentSlide((prev) => (prev + 1) % carrouselImage.length)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
}
