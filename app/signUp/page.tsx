"use client";
import { useState,useEffect } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../root-components/Input";
import {getUserFromEmailAddress} from '@/app/lib/get/getUserFromEmailAddress'
import { supabase } from "../utils/supabase";
// import {createUserProfile} from '@/app/lib/create/createUserProfile'


function SignUpPage() {
  const router=useRouter()

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPass,setConfirmPass]=useState('')
  //for the open and close the eye
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // the checks for state of email and password
  const [emailIsAlreadyInUseError, setEmailIsAlreadyInUseError] =
    useState(false);
  const [passwordsDontMatchError, setPasswordsDontMatchError] = useState(false);
  const [passwordIsTooShortError, setPasswordIsTooShortError] = useState(false);

  const [hasSigndUp,setHasSignedUp]= useState(false)


  useEffect(()=>{
    setEmailIsAlreadyInUseError(false)
    setPasswordIsTooShortError(false)
    setPasswordsDontMatchError(false)


  },[email,password,confirmPass])

  // handling the signing up 

 const handleSignUpButton= async  ()=>{
    const userWithEmail= await getUserFromEmailAddress(email)
    if(userWithEmail) {setEmailIsAlreadyInUseError(true)}
    else if (password?.length< 6){
      setPasswordIsTooShortError(true)
    }
    else if(password != confirmPass){
      setPasswordsDontMatchError(true)
    }
    else {
      const {data,error}=await supabase.auth.signUp({
        email:email,
        password:password
      })
      if(error) throw error
      const userId=data.user?.id 
      console.log('userId', userId)
      await createUserProfile(userID,email)
      setHasSignedUp(true)
    }
 

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  // handle toggle
  const toggle2 = () => {
    setConfirmOpen(!confirmOpen);

    
  };
  // handle back button 
  const handleBackButton =()=>{
    router.back()
  }


  return (
    <div className="bg-emerald w-auto h-full">
      <div className="h-full p-0">
        <div className="">
          {/* LEFT PART OF SCREEN */}
          <div className="w-1/3 mb-10  py-5 px-5">
            <button className="flex items-center "
            onClick={handleBackButton}>
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
          <div className=" grow py-28 px-40 h-auto ">
            <div className="mb-7 text-center sm:text-start">
              <div className="text-3xl font-bold">Sign Up</div>
              <div className="italic text-sm font-light">
                A node closer to the network
              </div>
            </div>
          
            {/* EMAIL ADDRESS  */}
            <div>
              <h1 className="ml-4 font-bold">Email Address *</h1>

              <div className="relative text-grey-500 m-3 mb-3">
                <input
                  type="text"
                  // ref={emailRef}
                  name="Email"
                  id="Email"
                  className="peer h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-2 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  // ref={passwordRef}
                  name="Password1"
                  id="Password1"
                  className="peer pr-4 h-16 text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-4 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                  // ref={confirmPassRef}
                  name="Password2"
                  id="Password2"
                  className="peer h-16  text-wrap placeholder-transparent border-2 border-ruby-tint border-opacity-60 shadow indent-4 inline-block align-middle w-full  rounded-lg focus:outline-none focus:border-ruby-shade"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
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
                    <AiFillEye onClick={toggle2} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggle2} />
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
}

export default SignUpPage;
