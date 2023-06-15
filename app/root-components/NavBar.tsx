import React from "react";
import Link from "next/link";
import HomePageSearchBar from "./HomePageSearchBar";
import { useSupabase } from "../supabase-provider";
import SignInSignOut from "./ProfileIcon";
import NavListItems from "./NavListItems";
import { getServerSession } from "next-auth";
import { createServerClient } from "../utils/supabase-server";

async function NavBar() {
  // const { session, supabase } = useSupabase();
  const supabaseServer = createServerClient();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.


    const userAuthenticated = session ? session?.user.aud : "not authenticated";
  // console.log("userAuthenticated ", userAuthenticated);
  return (
    <div className="">
      <div className="flex flex-row max-h-20 w-full justify-between items-center bg-pearl text-ruby  ">
        <div className="w-20  ">
          <Link
            href="/"
            className="py-4 text-2xl  font-semibold hover:text-amethyst sm:py-[18px] sm:text-4xl sm:font-normal"
          >
            Tipper
          </Link>
        </div>
        {/* <div className=" sm:hidden md:visible">
          <HomePageSearchBar />
        </div> */}
        <div className="">
        {userAuthenticated === "authenticated" ?(
                  <NavListItems />)
                  :(
                    <li className="p-2">
                    <Link href="signIn">Sign In</Link>
                  </li>
                  )
        }
        </div>
      </div>
      {/* <div className=" md:hidden">
        <HomePageSearchBar />
      </div> */}
    </div>
  );
}

export default NavBar;
