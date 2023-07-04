import React from "react";
import Link from "next/link";
import { createServerClient } from "../utils/supabase-server";
import NavListItems from "./NavListItems";
import GoToAboutUsPage from "./GoTo-components/GoToAboutUsPage";
import GoToTipperHomePage from "./GoTo-components/GoToTipperHomePage";
import GoToContactUsPage from "./GoTo-components/GoToContactUsPage";
import GoToSignInPage from "./GoTo-components/GoToSignInPage";

async function MainPageNavBar() {
  const supabaseServer = await createServerClient();
  // const {
  //   data: { session },
  // } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.
  const { data } = await supabaseServer.auth?.getSession();
  const session = data?.session;
  console.log("session", session);
  const userAuthenticated = session ? session?.user.aud : "not authenticated";

  return (
    <>
      <div className="z-100 sticky top-0 flex h-20 w-full items-center justify-between bg-transparent  p-2 text-ruby sm:px-3 ">
        <div className="w-30">
          <GoToTipperHomePage />
        </div>
        {/* <div className=" sm:hidden md:visible">
          <HomePageSearchBar />
        </div> */}
        <div className="z-10 ">
          {userAuthenticated === "authenticated" ? (
            <NavListItems />
          ) : (
            <div className=" mr-2 flex justify-between space-x-2 ">
              <GoToAboutUsPage />
              <GoToContactUsPage />
              <GoToSignInPage />
            </div>
          )}{" "}
        </div>
      </div>
    </>
  );
}

export default MainPageNavBar;
