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
  // const { session } = useSupabase();
  // const [userData,setUserData]=useState({})

  // console.log("session in home/[uniqueUserPage] page", session);
  // useEffect(()=>{
  //   const getData=async ()=>{
  //     const data =await getMyUserInfos(session?.user.id)
  //     console.log('data', data)
  //     setUserData(data) 
  //   }
  //   getData()

  // },[])
  
  // const supabaseServer = await createServerClient();
  // console.log("supabaseServer", supabaseServer);
  // // const session=useSupabase()
  // const {
  //   data: { session },
  // } = await supabaseServer.auth.getSession();
  // console.log("session from app page", session);
  // const myUserId = session?.user.id;

  // const userData = await getMyUserInfoServer(supabaseServer, myUserId);
  // // console.log("supabaseServer", supabaseServer);
  // console.log('userInformation', userData)
  // console.log("myUserId", myUserId);


  return (
    <>
      {/* <UserInfoContextProvider userInfos={userData}> */}
     <UserMainPageComponent/>
      {/* </UserInfoContextProvider> */}
    </>
  );
}

export default userProfilePage;
