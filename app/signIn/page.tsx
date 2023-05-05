"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase";

function SignInPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);

  const [signInFailedError, setSignInFailedError] = useState(false);

  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setSignInFailedError(false);
  }, [email, password]);

  async function handleSignInButton() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    //Check if sign in was successful
    if (error) {
      setSignInFailedError(true);
    } else {
      const userId = data;
      console.log("data after sign in", userId);
      router.back();
    }
  }
  return (
    <div>
      <div className="sh-fit min-h-screen  bg-ruby p-4">
        <div className="sm:flex ">
          {/* LEFT PART OF SCREEN */}
          <div className="w-1/3  mb-10  ">
            <button onClick={handleBackButton} className="flex items-center ">
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
            {signInFailedError && (
              <div
                className="bg-amethyst border-1-6 border-amethyst-shade text-obsidian p-4"
                role="alert"
              >
                <p className="font-bold">Damn</p>
                <p>Something couldnt make you sign in.</p>
              </div>
            )}
          </div>
          {/* //////////////// */}
          {/* right part of the screen  */}
          <div className=" grow  h-fit">
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
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                <div>
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                    placeholder="password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div className="text-2xl absolute top-4 right-5">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
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
                onClick={handleSignInButton}
              >
                Sign In
              </button>
              <div className="flex items-center justify-center mt-3 space-x-1 flex flex-col">
                <div> Don't have an account?</div>
                <Link
                  href="signUp"
                  className=" hover:text-ruby-shade font-semibold"
                >
                  <spam className="text-pearl">Sign Up Here</spam>
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
