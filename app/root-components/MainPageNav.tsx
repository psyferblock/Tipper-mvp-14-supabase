import React from "react";
import Link from "next/link";
import { createServerClient } from "../utils/supabase-server";
import NavListItems from "./NavListItems";

async function MainPageNavBar() {
  const supabaseServer = createServerClient();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  const userAuthenticated = session ? session?.user.aud : "not authenticated";

  return (
    <>
    <div className=" sticky top-0 flex h-20 w-screen items-center justify-between rounded-md bg-ruby-tint text-ruby  ">
      <div className="w-20  ">
        <Link
          href="/"
          className="p-2 text-2xl  font-semibold hover:text-amethyst sm:py-[18px] sm:text-4xl sm:font-normal"
        >
          Tipper
        </Link>
      </div>
      {/* <div className=" sm:hidden md:visible">
          <HomePageSearchBar />
        </div> */}
      <div className="z-10">
        {userAuthenticated === "authenticated" ? (
          <NavListItems />
        ) : (
          <div className="p-2 mr-4">
            <Link href="signIn">Sign In</Link>
          </div>
        )}{" "}
      </div>
    </div>
    </>
  );
}

export default MainPageNavBar;
