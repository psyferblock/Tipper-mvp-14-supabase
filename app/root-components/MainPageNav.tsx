import React from "react";
import Link from "next/link";
import { createServerClient } from "../utils/supabase-server";
import NavListItems from "./NavListItems";
import GoToAboutUsPage from "./GoTo-components/GoToAboutUsPage";
import GoToTipperHomePage from "./GoTo-components/GoToTipperHomePage";
import GoToContactUsPage from "./GoTo-components/GoToContactUsPage";
import GoToSignInPage from "./GoTo-components/GoToSignInPage";

async function MainPageNavBar() {
  const supabaseServer = createServerClient();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  const userAuthenticated = session ? session?.user.aud : "not authenticated";

  /////////////////////
  // CHECKING IF AUTHENTICATED TO RETURN THE FIRST STYLE OF THE NAV BAR. // REMEMBER WE HAVE TO RETURN ONLY ONE ELEMENT IN
  // REACT SO LIKE THIS WE ARE RETURNING EITHER THE AUTH SIDE OR THE UNAUTH SIDE
  /////////////////////

  if (userAuthenticated === "authenticated") {
    return (
      <>
        <div className="sticky top-0 flex h-20 w-screen items-center justify-between bg-transparent  p-2 text-ruby sm:px-12 ">
          <div className="w-30">
            <GoToTipperHomePage />
          </div>
          {/* <div className=" sm:hidden md:visible">
          <HomePageSearchBar />
        </div> */}
          <div className="z-10 ">
            <NavListItems />
          </div>
        </div>
      </>
    );
  }
  //////////////////////
  // IF NOT AUTHENTICATED WELL RETURN THE ONE BELOW
  /////////////////////
  return (
    <>
      <div className="sticky top-0 flex h-20 w-screen items-center justify-between bg-transparent  p-2 text-ruby sm:px-12 ">
        <div className="w-30">
          <GoToTipperHomePage />
        </div>
        {/* <div className=" sm:hidden md:visible">
        <HomePageSearchBar />
      </div> */}
        <div className=" mr-4 flex justify-between space-x-2 ">
          <GoToAboutUsPage />
          <GoToContactUsPage />
          <GoToSignInPage />
        </div>
      </div>
    </>
  );
}
{
  (" ");
}

export default MainPageNavBar;
