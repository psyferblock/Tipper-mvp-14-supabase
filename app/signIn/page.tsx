"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../utils/supabase-browser";
import { useHasMounted } from "../hooks/useHasMounted";
import { userContextState } from "../context/userContextReducer";
import { useUsersContext } from "../context/userContextStore";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      console.log("error when signing in", error);
    } else {
      setSignInFailedError(false);
      console.log("data after sign in", data);
      router.push(`/`);
    }
  }
  // const hasMounted = useHasMounted();
  // if (!hasMounted) {
  //   return null;
  // }
  return (
    <div>
      <div className="sh-fit min-h-screen  bg-ruby p-4">
        <div className="sm:flex ">
          {/* SIGN IN FAILURE ERROR  */}
          {signInFailedError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <span className="block sm:inline">
                Something seriously bad happened.
              </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          {/* //////////////////////////////////////////////////////////////////////// */}

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
                  className="text-wrap border-ruby-tint focus:border-ruby-shade peer inline-block h-16 w-full rounded-lg border-2 border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:outline-none "
                  placeholder="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email||""}
                />
                <label
                  htmlFor="email"
                  className=" text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 peer-valid:top-1 peer-valid:text-sm "
                >
                  Email address
                </label>
              </div>
              {/* PASSWORD  */}

              <div>
                <div className="text-grey-500 relative m-3 mb-3">
                  <input
                    type={open === false ? "password" : "text"}
                    name="Password"
                    id="Password"
                    className="text-wrap border-ruby-tint focus:border-ruby-shade peer inline-block h-16 w-full rounded-lg border-2 border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:outline-none"
                    placeholder=" email address "
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password||""}
                  />

                  <label
                    htmlFor="Password"
                    className="text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 peer-valid:top-1 peer-valid:text-sm"
                  >
                    Password
                  </label>
                  <div className="text-2xl absolute top-4 right-5">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
              </div>

              <button
                className="w-11/12 h-10 mt-8 hover:bg-ruby-tint hover:text-lg rounded-3xl bg-diamond text-ruby text-md m-3"
                onClick={ handleSignInButton}
              >
                Sign In
              </button>
              <div className="flex items-center justify-center mt-3 space-x-1 flex-col">
                <div>
                  {" "}
                  Don<span>&#39;</span>t have an account?
                </div>
                <Link
                  href="signUp"
                  className=" hover:text-ruby-shade font-semibold"
                >
                  <span className="text-pearl">Sign Up Here</span>
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
