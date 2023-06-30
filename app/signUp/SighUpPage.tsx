"use client";
import { useState, useEffect, useRef } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabase-browser";
import createUserProfile from "../lib/create/createUserProfile";
import { userContextState } from "../context/userContext/userContextReducer";

export default function SignUpPage() {
  const router = useRouter();

  //all the states are under here
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [submitButton, setSubmitButton] = useState(false);
  //for the open and close the eye
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // SUCCESS AND ERRORS
  // the checks for state of email and password

  const [emailIsAlreadyInUseError, setEmailIsAlreadyInUseError] =
    useState(false);
  const [passwordsDontMatchError, setPasswordsDontMatchError] = useState(false);
  const [passwordIsTooShortError, setPasswordIsTooShortError] = useState(false);

  const [hasSigndUp, setHasSignedUp] = useState(false);

  // THE FUNCTION THAT HANDLES THE COMPARISON BETWEEN PASSWORDS

  const comparePasswords = (passA, passB) => {
    if (!passB) {
      setPasswordsDontMatchError(false);
    } else if (passA != passB) {
      setPasswordsDontMatchError(true);
    } else {
      setPasswordsDontMatchError(false);
      setConfirmPass(passB);
      setSubmitButton(true);
    }
  };

  //  THE FUNCTION THAT CHECKS FOR THE PASSWORD LENGTH
  const checkPasswordLength = (pass) => {
    if (!pass) {
      setPasswordIsTooShortError(false);
    } else if (pass?.length < 6) {
      setPassword(pass);
      setPasswordIsTooShortError(true);
    } else {
      setPasswordIsTooShortError(false);
      setPassword(pass);
    }
  };

  // HANDLE SUBMIT BUTTON FOR THE FORM  i am going to split it from the database in order to get a clearer code on how the steps are being done to get the data and send it
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data: createdUser, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: process.env.TIPPER_URL,
      },
    });
    const emailIsTaken = createdUser?.user.identities?.length === 0;

    if (emailIsTaken) {
      setEmailIsAlreadyInUseError(true);
    }
    if (error) throw error;
    const userId = createdUser.user?.id;
    let first = email.split("@");
    let array = first[0].split(".");
    let uuidSample = userId?.slice(10, 15);

    let uniqueName = array[0] + uuidSample!;

    await createUserProfile(userId, email, uniqueName);
    setHasSignedUp(true);
    // }
    
  };

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  // handle toggle
  const toggle2 = () => {
    setConfirmOpen(!confirmOpen);
  };
  // handle back button
  const handleBackButton = () => {
    router.back();
  };

  return (
    <div className="min-h-screen w-auto bg-emerald pt-12">
      <div className="h-full ">
        <div className="flex flex-col sm:flex-row sm:pt-10">
          {/* LEFT PART OF SCREEN */}
          <div className="mb-2 w-1/3 p-1 ">
            <button className="flex items-center " onClick={handleBackButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
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
          <div className=" h-full grow p-2 md:w-1/2 ">
            <div className="mb-7 text-center sm:text-start">
              <div className="text-3xl font-bold">Sign Up</div>
              <div className="text-sm font-light italic">
                A node closer to the network
              </div>
              <h1
                className={
                  emailIsAlreadyInUseError ? " text-red text-5xl " : "invisible"
                }
              >
                email is already in use
              </h1>
            </div>
            <div>
              {hasSigndUp ? (
                <div>
                  {" "}
                  We have sent an e-mail to your e-mail address. Please open the
                  e-mail and follow the instructions to access your account.
                </div>
              ) : (
                <>
                  {/* EMAIL ADDRESS  */}
                  <div>
                    <h1 className="ml-4 font-bold">Email Address *</h1>
                    <div className="text-grey-500 relative m-3 mb-3 max-w-md">
                      <input
                        type="text"
                        name="EmailAddress"
                        id="EmailAddress"
                        className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none "
                        placeholder=" email address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email || ""}
                        // ref={emailRef}
                      />

                      <label
                        htmlFor="Number"
                        className=" text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 "
                      >
                        Email Address
                      </label>
                    </div>
                  </div>
                  {/* //////////////////////////////////////////////////////////////////////////////////// */}

                  {/* PASSWORD*/}
                  <div>
                    <h1 className="ml-4 font-bold">Enter Password *</h1>

                    <div className="text-grey-500 relative m-3 max-w-md">
                      <input
                        type={open === false ? "password" : "text"}
                        name="Password1"
                        id="Password1"
                        className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none "
                        placeholder="Password"
                        required
                        onChange={(e) => {
                          checkPasswordLength(e.target.value);
                        }}
                        value={password || ""}
                        // ref={passwordRef}
                      />

                      <label
                        htmlFor="Password1"
                        className=" text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 "
                      >
                        Password
                      </label>
                      <div className="absolute right-5 top-5 text-2xl">
                        {confirmOpen === false ? (
                          <AiFillEye onClick={toggle} />
                        ) : (
                          <AiFillEyeInvisible onClick={toggle} />
                        )}
                      </div>
                    </div>
                    <h1
                      className={
                        passwordIsTooShortError
                          ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                          : "invisible"
                      }
                    >
                      Password should be minimum of 6 characters
                    </h1>
                  </div>
                  {/* //////////////////////////////////////////////////////////////////////////////////// */}

                  {/* PASSWORD 2*/}
                  <div>
                    <h1 className="ml-4 font-bold">Confirm Password *</h1>

                    <div className="text-grey-500 relative m-3 mb-3 max-w-md">
                      <input
                        type={confirmOpen === false ? "password" : "text"}
                        name="Password2"
                        id="Password2"
                        className="text-wrap peer inline-block h-16 w-full rounded-lg border-2 border-ruby-tint border-opacity-60 indent-2 align-middle placeholder-transparent shadow focus:border-ruby-shade focus:outline-none "
                        placeholder="Confirm Password"
                        required
                        onChange={(e) => {
                          comparePasswords(password, e.target.value);
                        }}
                        // value={confirmPass||""}
                        // ref={confirmPassRef}
                      />
                      <label
                        htmlFor="Password2"
                        className=" text-grey peer-placeholder-shown:text-grey-400 peer-placeholder-shows:top-4 absolute left-4 top-5 z-10 text-lg transition-all peer-placeholder-shown:text-base peer-valid:top-1 peer-valid:text-sm peer-focus:top-1 peer-focus:text-sm peer-focus:text-gray-600 "
                      >
                        Confirm Password
                      </label>
                      <div className="absolute right-5 top-4 text-2xl">
                        {confirmOpen === false ? (
                          <AiFillEye onClick={toggle2} />
                        ) : (
                          <AiFillEyeInvisible onClick={toggle2} />
                        )}
                      </div>
                    </div>
                    <h1
                      className={
                        passwordsDontMatchError
                          ? " text-1xl mx-3 rounded-md border-2 border-ruby bg-ruby-tint px-3 font-medium text-ruby-shade "
                          : "invisible"
                      }
                    >
                      Passwords arent the same{" "}
                    </h1>
                  </div>
                  {/* //////////////////////////////////////////////////////////////////////////////////// */}
                  {/* BUTTON CLASS FOR FORM  */}
                  <div className=" flex items-center">
                    <button
                      className={`${
                        submitButton ? " " : "disabled"
                      } mt-10 max-w-md  h-12 w-10/12 rounded-3xl bg-diamond text-sm text-emerald hover:bg-pearl hover:text-lg`}
                      onClick={(e) => handleSubmit(e)}
                    >
                      {/* <Link
                 href="home"
                 className=" hover:text-ruby-shade font-semibold">
                 Sign Up
                </Link> */}
                      sign up
                    </button>
                  </div>
                  {/* //////////////////////////////////////////////////////////////////////////////////// */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
