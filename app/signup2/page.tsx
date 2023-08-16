"use client";
import { useState, useEffect, useRef } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";

import FormInput from "../rootComponents/FormInput";

export default function SignUp2() {
  const router = useRouter();
  const hasSignedUp = false;
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const SignUpInput = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // handle back button
  const handleBackButton = () => {
    router.back();
  };

  console.log("values", values);
  return (
    <div className="min-h-screen w-auto bg-emerald">
      <div className="h-full p-0">
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
              {/* <h1
                className={
                  emailIsAlreadyInUseError ? " text-red text-5xl " : "invisible"
                }
              >
                email is already in use
              </h1> */}
            </div>
            <div>
              {hasSignedUp ? (
                <div>
                  {" "}
                  We have sent an e-mail to your e-mail address. Please open the
                  e-mail and follow the instructions to access your account.
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit}>
                    {SignUpInput.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    ))}
                    <button type="submit" className="... group-invalid:pointer-events-none group-invalid:opacity-30">Submit</button>

                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
