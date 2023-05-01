"use client";
import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from 'next/link'

function SignInPage() {
  return (
    <div>
      <div className="sm:h-fit sm:min-h-screen sm:px-0 px-3 py-5 sm:py-0 bg-ruby">
        <div className="sm:flex">
          {/* LEFT PART OF SCREEN */}
          <div className="sm:w-1/3 sm:mt-5 mb-10 sm:px-5">
            <button
              //  onClick={handleBackButton}
              className="flex items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <div className="text-lg underline underline-offset-2 font-semibold ">
                Back
              </div>
            </button>
          </div>
          {/* //////////////// */}
          {/* right part of the screen  */}
          <div className=" grow sm:py-28 sm:px-40 sm:h-screen h-fit">
            <div className="mb-9 text-center sm:text-start">
              <div className="text-3xl font-bold ">Sign In</div>
              <div className="italic text-sm font-light">
                Welcome back to the network
              </div>
            </div>
            {/* INPUT FORMS  */}
            <div>
                <div className="relative text-grey-500 m-3">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                    placeholder="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
             peer-placeholder-shown:text-grey-400
             peer-placeholder-shows:top-4
             transition-all
             peer-focus:top-1
             peer-focus:text-gray-600
             peer-focus:text-sm
             
          "
                  >
                    Email address
                  </label>
                </div>
                {/* PASSWORD  */}
                <div className="relative text-grey-500 m-3">
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                    placeholder="email"
                  />
                  <label
                    htmlFor="Password"
                    className="absolute    left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
             peer-placeholder-shown:text-grey-400
             peer-placeholder-shows:top-4
             transition-all
             peer-focus:top-1
             peer-focus:text-gray-600
             peer-focus:text-sm
             
          "
                  >
                    Password
                  </label>
                </div>
                <button
            className="w-11/12 h-10 mt-8 hover:bg-ruby-tint hover:text-lg rounded-3xl bg-diamond text-ruby text-md m-3"
            // onClick={handleSignInButton}
          >
            Sign In
          </button>
          <div className="flex items-center justify-center mt-3 space-x-1 flex flex-col">
            <div> Don't have an account?</div>
            <Link
              href="signUp"
              className=" hover:text-ruby-shade font-semibold"
            >
              <spam className="text-pearl">
                
                Sign Up 
                </spam>
            </Link>
          </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default SignInPage;
