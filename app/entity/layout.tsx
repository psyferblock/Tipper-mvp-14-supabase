import { createServerClient } from "@/app/utils/supabase-server";
import React from "react";
import NavBar from "../root-components/NavBar";



async function EntityLayout({ children }: {children:React.ReactNode}) {
  const supabaseServer =  createServerClient();

  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  const entityOwnerId = session?.user.id;

 


  return (
    <>

      <NavBar/>
        <div>{children}</div>
    </>
  );
}

export default EntityLayout;
