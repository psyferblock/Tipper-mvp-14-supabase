import { EntityInfosContextProvider } from "@/app/context/entityContext/entityContextStore";
import { getMyEntityInfoServer } from "@/app/lib/get/getEntityInfos";
import { createServerClient } from "@/app/utils/supabase-server";
import React from "react";
import  UserInfoContextProvider  from "@/app/context/userContextStore";
import { getMyUserInfoServer } from "../lib/get/getMyUserInfo";
import { useSupabase } from "../supabase-provider";


async function HomeLayout({
  children,
  
}: children) {
    

  return (
    <>

      <div>{children}</div>
    </>
  );
}

export default HomeLayout;
