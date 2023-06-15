// "use client";
import React, { useEffect, useState } from "react";
import { useSupabase } from "@/app/supabase-provider";
import UserInfoContextProvider, {
  useUsersContext,
} from "@/app/context/userContext/userContextStore";
import {
  getMyUserInfos,
  getMyUserInfoServer,
} from "@/app/lib/get/getMyUserInfo";
import UserMainPageComponent from "./profilePageComponents/UserMainPageComponent";
import { createServerClient } from "@/app/utils/supabase-server";

async function userProfilePage({ params }) {
  return (
    <>
    <div className="w-full">

      <UserMainPageComponent />
    </div>
    </>
  );
}

export default userProfilePage;
