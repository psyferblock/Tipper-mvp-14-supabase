import { createServerClient } from "./utils/supabase-server";

import "./globals.css";
// import Navbar from "./root-Components/tools-Components/NavBar";
// import { AuthContextProvider } from "./context/Store";
import SupabaseListener from "./supabase-listener";
import SupabaseProvider from "./supabase-provider";
import UserInfoContextProvider from "@/app/context/userContext/userContextStore";
import { getMyUserInfoServer } from "./lib/get/getMyUserInfo";
import { Work_Sans } from "next/font/google";
import Head from "next/head";

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};
export const dynamic = "force-dynamic";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  variable: "--Work_Sans-font",
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseServer = createServerClient();
  const {
    data: { session },
  } = await supabaseServer.auth?.getSession(); /// its here where we get the session from supabase. and its details.

  let userData;
  if (session) {
    const myUserId = session?.user.id;

    const userInformation = await getMyUserInfoServer(supabaseServer, myUserId);
    userData = userInformation;
    // console.log("userInformation from RootLayoutPage ", userInformation);
  }

  return (
    <html lang="en" className={workSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <title>Tipper</title>
      </Head>
      <body className="bg-backGround text-obsidian">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {session?.user.id ? (
            <UserInfoContextProvider userInfos={userData}>
              {/* <Navbar session={session} /> */}
              <div className=" min-h-screen">
                {/* <AuthContextProvider> */}
                {children}
                {/* </AuthContextProvider> */}
              </div>
            </UserInfoContextProvider>
          ) : (
            <div className=" min-h-screen ">{children}</div>
          )}
        </SupabaseProvider>
      </body>
    </html>
  );
}
