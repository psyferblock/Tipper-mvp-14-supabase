import React from "react";
import Link from "next/link";
import HomePageSearchBar from "./HomePageSearchBar";
import { createServerClient } from "../utils/supabase-server";
import SignInSignOut from "./SignInSignOut";
import { getServerSession } from "next-auth";


 function NavBar() {
   const {session} = getServerSession();
  
  // const {
  //   data: { session },
  // } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

 console.log('session in main nav page ', session)
  return (
    <div className="">
      <div className="bg-pearl text-ruby max-h-20  flex justify-between  ">
        <div className="w-20  ">
          <Link
            href="/"
            className="py-4 sm:py-[18px] font-light sm:font-normal font-semibold hover:text-amethyst text-2xl sm:text-4xl"
          >
            Tipper
          </Link>
        </div>
        {/* <div className=" sm:hidden md:visible">
          <HomePageSearchBar />
        </div> */}
        <div className="  ">
          <ul className=" flex jsutify-between text-sm pr-2 mr-2 ">
            <li className="p-2 text-center items-center">
              <Link href="#">About Us</Link>
            </li>
            <li className="p-2">
              <Link href="#">Contact Us</Link>
            </li>
           <SignInSignOut/>
            
          </ul>
        </div>
       
      </div>
      {/* <div className=" md:hidden">
        <HomePageSearchBar />
      </div> */}
    </div>
  );
}

export default NavBar;
