import React from "react";
import Link from "next/link";
import HomePageSearchBar from "./HomePageSearchBar";
import { useSupabase } from "../supabase-provider";
import SignInSignOut from "./SignInSignOut";

function NavBar() {
  return (
    <div className="">
      <div className="flex max-h-20 justify-between  bg-pearl text-ruby  ">
        <div className="w-20  ">
          <Link
            href="/"
            className="py-4 text-2xl font-light font-semibold hover:text-amethyst sm:py-[18px] sm:text-4xl sm:font-normal"
          >
            Tipper
          </Link>
        </div>
        {/* <div className=" sm:hidden md:visible">
          <HomePageSearchBar />
        </div> */}
        <div className="  ">
          <ul className=" jsutify-between mr-2 flex pr-2 text-sm ">
            <li className="items-center p-2 text-center">
              <Link href="#">About Us</Link>
            </li>
            <li className="p-2">
              <Link href="#">Contact Us</Link>
            </li>
            <SignInSignOut />
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
