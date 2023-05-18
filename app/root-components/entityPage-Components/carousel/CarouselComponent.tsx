"use client";

import React, { useEffect, useState } from "react";
// import LeftRightButtons from "./LeftRightButtons";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState<number>(0);
  const previous = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative h-full w-full">
      {/* the translateX property moves the slide through css by 100 % so the current index will allow a move where 100% of the picture will slide. */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}

        {/* BELOW IS THE DIV THATS CAUSING THE HYDRATION ERRORS. ITS JUST A LEFT AND RIGHT BUTTON TO MOVE THE PICTURES. */}
        {/* <div className="absolute inset-1 flex items-center justify-between p-4">
          <button
            onClick={previous}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div> */}
        {/* <LeftRightButtons current={current} slides={slides}/> */}
        {/* auto slide function  */}
        <div className="absolute bottom-4 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              // here we are changing the color of the dots that are used to determine where we are on the slide
              // eslint-disable-next-line react/jsx-key
              <div
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  current === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
