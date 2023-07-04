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

  const { data } = await supabaseServer.auth?.getSession();
  const session = data?.session;
  const userAuthenticated = session ? session?.user.aud : "not authenticated";

  return (
    <>
      <div className=" sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-transparent  p-2 text-ruby sm:px-3 ">
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
