"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function LeftRightButtons({ current, slides }) {
  const [current, setCurrent] = useState<number>(0);

  const previous = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };
  return (
    <>
      <div className="absolute inset-1 flex items-center justify-between p-4">
        <button
          onClick={previous}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </>
  );
}

export default LeftRightButtons;
