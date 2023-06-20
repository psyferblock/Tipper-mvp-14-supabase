import Link from "next/link";
import React from "react";

function GoToTipperHomePage() {
  return (
    <div>
      {" "}
      <Link
        href="/"
        className=" text-2xl  font-semibold hover:text-amethyst sm:py-[18px] sm:text-4xl sm:font-normal"
      >
        Tipper
      </Link>
    </div>
  );
}

export default GoToTipperHomePage;
