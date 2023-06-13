"use client";

import React, { useEffect, useState } from "react";
import LeftRightButtons from "./LeftRightButtons";
// import { ChevronLeft, ChevronRight } from "react-feather";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";

function CarouselComponent({
  children: slides,
  autoSlide: autoSlide,
  autoSlideInterval: autoSlideInterval,
}) {
  console.log("slides from carousel component ", slides);
  const [current, setCurrent] = useState<number>(0);
  const previous = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  console.log("current", current);

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* the translateX property moves the slide through css by 100 % so the current index will allow a move where 100% of the picture will slide. */}
      <div
        className="flex h-full w-full object-center transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>

      {/* BELOW IS THE DIV THATS CAUSING THE HYDRATION ERRORS. ITS JUST A LEFT AND RIGHT BUTTON TO MOVE THE PICTURES. */}
      <div className="z-2 absolute inset-1 flex items-center justify-between p-4">
        <button
          onClick={previous}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <BsChevronCompactLeft size={20} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <BsChevronCompactRight size={20} />
        </button>
      </div>
      {/* auto slide function  */}
      <div className="z-4 absolute bottom-4 left-0 right-0 pb-1 ">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            // here we are changing the color of the dots that are used to determine where we are on the slide
            // eslint-disable-next-line react/jsx-key
            <div
              key={i}
              onClick={() => {
                goToSlide(i);
              }}
              className={`h-3 w-3 rounded-full bg-white transition-all ${
                current === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
