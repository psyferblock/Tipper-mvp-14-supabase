import React from "react";
import Link from "next/link";

function EntityCreationPage() {
  return (
    <div className="bg-amethyst w-screen h-screen">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className=" mb-0 p-3">
          <Link href={`home`} className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className="text-md font-medium">Back</div>
          </Link>
        </div>
      </div>
      {/* where the entity is being created  */}
      <div className="p-4">
        <div>
          <h1 className="font-medium text-xl">Create an Entity Here</h1>
          <h1 className="text-lg font-medium">Welcome to the network.</h1>
          <h2 className="text-sm">when your done well reach out to you within the next days. and would love to meet you in person</h2>
        </div>
        <div className="space-y-3">
        {/* BUSINESS NAME  */}
        <div>
              <h1 className="ml-4 font-bold">Business Name *</h1>

              <div className="relative text-grey-500 m-3 mb-3">
                <input
                  type="text"
                  name="BusinessName"
                  id="BusinessName"
                  className="peer h-12 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Enter Number"
                />

                <label
                  htmlFor="BusinessName"
                  className="absolute left-4 top-3 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:text-grey-400
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
                >
                  Business name
                </label>
              </div>
            </div>
        {/* ENTING OF BUSINESS NAME  */}
        </div>
      </div>
    </div>
  );
}

export default EntityCreationPage;
