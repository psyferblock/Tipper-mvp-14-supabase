'use client '
import UserInfoContextProvider from "./context/userContextStore";
import { getMyUserInfos, getMyUserInfoServer } from "./lib/get/getMyUserInfo";
import MainPageNav from "./root-components/MainPageNav";
import { useSupabase } from "./supabase-provider";
import { createServerClient } from "./utils/supabase-server";
import {useEffect,useState} from 'react'


export default  async function TipperLandingPage() {

  // const {session,supabase} = useSupabase();
//   let userSessionId=session?.user.id
//        const  getData= async (id)=>{
//          const data= await  getMyUserInfos(id);
//         return data 
//        }

//       const userData= getData(userSessionId)


//  console.log('userData', userData)

  

  // const supabaseServer = await createServerClient();
  // console.log("supabaseServer", supabaseServer);
  // // const session=useSupabase()
  // const {
  //   data: { session },
  // } = await supabaseServer.auth.getSession();
  // console.log("session from app page", session);
  // const myUserId = session?.user.id;

  // const userInformation = await getMyUserInfoServer(supabaseServer, myUserId);
  // // console.log("supabaseServer", supabaseServer);
  // console.log('userInformation', userInformation)
  // console.log("myUserId", myUserId);

  return (
    <div>
      {/* <UserInfoContextProvider userInfos={userData}> */}
        <div>

        <MainPageNav />
        <div className="w-full h-full bg-amethyst font"></div>
        </div>
      {/* </UserInfoContextProvider> */}
    </div>
  );
}
