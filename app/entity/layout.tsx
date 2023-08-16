import { createServerClient } from "@/app/utils/supabase-server";
import React from "react";
import MainPageNavBar from "../root_components/MainPageNav";

async function EntityLayout({ children }: { children: React.ReactNode }) {
  const supabaseServer = await createServerClient();

  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  // const entityOwnerId = session?.user.id;

  return (
    < >
    <div id="entityTop" className="">
      <MainPageNavBar />
      <div >{children}</div>
      </div>
    </>
  );
}

export default EntityLayout;
