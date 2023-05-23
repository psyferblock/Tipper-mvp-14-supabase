import {  createServerClient } from "./utils/supabase-server";

import "./globals.css";
// import Navbar from "./root-Components/tools-Components/NavBar";
// import { AuthContextProvider } from "./context/Store";
import SupabaseListener from "./supabase-listener";
import SupabaseProvider from "./supabase-provider";
import  UserInfoContextProvider  from "@/app/context/userContextStore";
import { getMyUserInfoServer } from "./lib/get/getMyUserInfo";


export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const supabaseServer=createServerClient()
  const {
    data: { session },
  } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

 
   
 
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {/* <UserInfoContextProvider userInfos={userInformation}> */}

            {/* <Navbar session={session} /> */}
            <div className=" min-h-screen">
              {/* <AuthContextProvider> */}
              {children}
              {/* </AuthContextProvider> */}
            </div>
            {/* </UserInfoContextProvider> */}
            {/* </UserInfoContextProvider> */}
        </SupabaseProvider>
      </body>
    </html>
  );
}
