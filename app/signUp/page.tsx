"use client";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import Input from "../root-components/Input";

function SignUpPage() {
  // const router=useRouter()
  //for the open and close the eye
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  // handle toggle
  const toggle2 = () => {
    setConfirmOpen(!confirmOpen);
  };

  return (
    <div className="bg-emerald w-auto h-auto">
      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-0 py-5 sm:py-0">
        <div className="sm:flex">
          {/* LEFT PART OF SCREEN */}
          <div className="sm:w-1/3 mb-10 sm:mb-0 sm:py-5 sm:px-5">
            <button className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <div className="text-lg">Back</div>
            </button>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////// */}
          {/* RIGHT PART OF SCREEN */}
          <div className=" grow sm:py-28 sm:px-40 sm:h-screen h-fit ">
            <div className="mb-7 text-center sm:text-start">
              <div className="text-3xl font-bold">Sign Up</div>
              <div className="italic text-sm font-light">
                A node closer to the network
              </div>
            </div>
            {/* user name  */}
            <div>
              <h1 className="ml-4 font-bold">member details *</h1>

              <div className="relative text-grey-500 m-3 mb-3">
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Full name"
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
                  Full name
                </label>
              </div>
            </div>
            {/* EMAIL ADDRESS  */}
            <div>
              <h1 className="ml-4 font-bold">Email Address *</h1>

              <div className="relative text-grey-500 m-3 mb-3">
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Enter email"
                />
                <label
                  htmlFor="Email"
                  className="absolute    left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:text-grey-400
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
                >
                  Enter email
                </label>
              </div>
            </div>
            {/* CONTACT NUMBER  */}
            <div>
              <h1 className="ml-4 font-bold">Contact Number *</h1>

              <Input/>
            </div>
            {/* PASSWORD1 */}
            <div>
              <h1 className="ml-4 font-bold">Enter Password *</h1>

              <div className="relative text-grey-500 m-3 mb-3">
                <input
                  type={open === false ? "password" : "text"}
                  name="Password1"
                  id="Password1"
                  className="peer pr-4 h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-4 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Password"
                />
                
                <label
                  htmlFor="Password1"
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
                <div className="text-2xl absolute top-4 right-5">
                  {confirmOpen === false ? (
                    <AiFillEye onClick={toggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggle} />
                  )}
                </div>
              </div>
              
            </div>
            {/* PASSWORD1 */}
            <div>
              <h1 className="ml-4 font-bold">Confirm Password *</h1>

              <div className="relative text-grey-500 m-3 mb-3">
                <input
                  type={open === false ? "password" : "text"}
                  name="Password2"
                  id="Password2"
                  className="peer h-16  text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-4 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Confirm Password"
                />
                <label
                  htmlFor="Password2"
                  className="absolute    left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                peer-placeholder-shown:transparent
                peer-placeholder-shows:top-4
                transition-all
                peer-focus:top-1
                peer-focus:text-gray-600
                peer-focus:text-sm
                
                "
                >
                  Confirm Password
                </label>
                <div className="text-2xl absolute top-4 right-5">
                  {confirmOpen === false ? (
                    <AiFillEye onClick={toggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggle} />
                  )}
                </div>
              </div>
            </div>
            <div className="ml-5 ">

            <button className="w-11/12  h-12 mt-10 hover:bg-pearl hover:text-lg rounded-3xl bg-diamond text-emerald text-sm">
                <Link
                 href="home"
                 className=" hover:text-ruby-shade font-semibold">
              Sign Up
                </Link>
            </button>
                     </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
