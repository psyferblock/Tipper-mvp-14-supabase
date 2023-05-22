// "use client";
import React, { useEffect, useState } from "react";
import { useSupabase } from "@/app/supabase-provider";
import UserInfoContextProvider, {
  useUsersContext,
} from "@/app/context/userContextStore";
import { getMyUserInfos, getMyUserInfoServer } from "@/app/lib/get/getMyUserInfo";
import UserMainPageComponent from "./profilePageComponents/UserMainPageComponent";
import { createServerClient } from "@/app/utils/supabase-server";

async function userProfilePage({ params }) {
 


  return (
    <>
     <UserMainPageComponent/>
    </>
  );
}

export default userProfilePage;