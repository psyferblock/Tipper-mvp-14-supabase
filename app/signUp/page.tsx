"use client";
import { useState, useEffect, useRef } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabase-browser";
import createUserProfile from "../lib/create/createUserProfile";




export default function SignUp() {
  const router = useRouter();
  

  //all the states are under here
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

const [submitButton,setSubmitButton]=useState(false)
  //for the open and close the eye
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

// SUCCESS AND ERRORS 
  // the checks for state of email and password
   
 
  const [emailIsAlreadyInUseError, setEmailIsAlreadyInUseError] = useState(false);
  const [passwordsDontMatchError, setPasswordsDontMatchError] = useState(false);
  const [passwordIsTooShortError, setPasswordIsTooShortError] = useState(false);


  const [hasSigndUp, setHasSignedUp] = useState(false);

   




// THE FUNCTION THAT HANDLES THE COMPARISON BETWEEN PASSWORDS 

const comparePasswords=(passA,passB)=>{
 if(!passB){
  setPasswordsDontMatchError(false)
 }
 else if (passA != passB) {
  
  setPasswordsDontMatchError(true);
}else{
  setPasswordsDontMatchError(false)
  setConfirmPass(passB)
  setSubmitButton(true)
}
}

//  THE FUNCTION THAT CHECKS FOR THE PASSWORD LENGTH 
const checkPasswordLength=(pass)=>{
  if(!pass){
    setPasswordIsTooShortError(false)
  }
    else if (pass?.length<6){
    setPassword(pass)
    setPasswordIsTooShortError(true)
  }else{
    setPasswordIsTooShortError(false)
    setPassword(pass)
  }
}

// HANDLE SUBMIT BUTTON FOR THE FORM  i am going to split it from the database in order to get a clearer code on how the steps are being done to get the data and send it 
const handleSubmit = async (event) => {
  event.preventDefault();

      const{data:createdUser,error}=await supabase.auth.signUp(
       {email: email,
        password: password,
        options: {
          emailRedirectTo: process.env.TIPPER_URL,
        },
      })
      const emailIsTaken = createdUser.user.identities?.length === 0
      
      if (emailIsTaken) {
            setEmailIsAlreadyInUseError(true);
        
        
      }
      if (error) throw error;
      const userId = createdUser.user?.id;
     await createUserProfile(userId, email);
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
    <div className="bg-emerald w-auto h-full">
      <div className="h-full p-0">
        <div className="flex flex-col">
          {/* LEFT PART OF SCREEN */}
          <div className="w-1/3 mb-2 p-1">
            <button className="flex items-center " onClick={handleBackButton}>
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
          <div className=" grow p-2 h-auto ">
            <div className="mb-7 text-center sm:text-start">
              <div className="text-3xl font-bold">Sign Up</div>
              <div className="italic text-sm font-light">
                A node closer to the network
              </div>
               <h1 className={emailIsAlreadyInUseError?" text-red text-5xl ": "invisible"}>email is already in use</h1> 
            </div>
            <div>
            
            {hasSigndUp? (
<div> We have sent an e-mail to your e-mail address. Please open the
              e-mail and follow the instructions to access your account.</div>
            ):
           (
            <>

             
             {/* EMAIL ADDRESS  */}
              <div>
                <h1 className="ml-4 font-bold">Email Address *</h1>
                <div className="relative text-grey-500 m-3 mb-3">
                  <input
                    type="text"
                    name="EmailAddress"
                    id="EmailAddress"
                    className="peer h-16 placeholder-transparent text-wrap border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade "
                    placeholder=" email address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email||""}
                    // ref={emailRef}
                    />

                  <label
                    htmlFor="Number"
                    className="absolute    left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-grey-400
                    peer-placeholder-shows:top-4
                  transition-all 
                  peer-focus:top-1
                  peer-focus:text-gray-600
                  peer-focus:text-sm
                  
                  "
                  >
                    Email Address
                  </label>
                </div>
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////// */}

              {/* PASSWORD*/}
              <div>
                <h1 className="ml-4 font-bold">Enter Password *</h1>

                <div className="relative text-grey-500 m-3 ">
                  <input
                    type={open === false ? "password" : "text"}
                    name="Password1"
                    id="Password1"
                    className="peer pr-4 h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-4 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                    placeholder="Password"
                    required
                    onChange={(e) => {checkPasswordLength(e.target.value);}}
                    value={password||""}  
                    // ref={passwordRef}
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
               <h1 className={passwordIsTooShortError?" text-1xl border-ruby border-2 rounded-md px-3 mx-3 bg-ruby-tint font-medium text-ruby-shade ": "invisible"}>Password should be minimum of 6 characters</h1> 
              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////// */}

              {/* PASSWORD 2*/}
              <div>
                <h1 className="ml-4 font-bold">Confirm Password *</h1>

                <div className="relative text-grey-500 m-3 mb-3">
                  <input
                    type={confirmOpen === false ? "password" : "text"}
                    name="Password2"
                    id="Password2"
                    className="peer h-16  text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-4 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => {comparePasswords(password,e.target.value)}}
                    // value={confirmPass||""}
                    // ref={confirmPassRef}
                    />
                  <label
                    htmlFor="Password2"
                    className="absolute    left-4 top-5 z-10  text-grey  text-lg peer-placeholder-shown:text-base
                    peer-placeholder-shown:transparent
                    peer-placeholder-shows:top-4
                    transition-all
                    peer-focus:top-1
                    peer-focus:text-gray-600
                  peer-focus:text-sm "
                  >
                    Confirm Password
                  </label>
                  <div className="text-2xl absolute top-4 right-5">
                    {confirmOpen === false ? (
                      <AiFillEye onClick={toggle2} />
                      ) : (
                      <AiFillEyeInvisible onClick={toggle2} />
                    )}
                  </div>
                </div>
               <h1 className={passwordsDontMatchError?" text-1xl border-ruby border-2 rounded-md px-3 mx-3 bg-ruby-tint font-medium text-ruby-shade ": "invisible"}>Passwords arent the same </h1> 

              </div>
              {/* //////////////////////////////////////////////////////////////////////////////////// */}
              {/* BUTTON CLASS FOR FORM  */}
              <div className="ml-5 ">
                <button className={`${submitButton?" ":"disabled"} w-11/12  h-12 mt-10 hover:bg-pearl hover:text-lg rounded-3xl bg-diamond text-emerald text-sm`}
                onClick={(e)=>handleSubmit(e)}
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
          ) }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
