import { cookies } from "next/headers";
import "./globals.css";
import SupabaseProvider from "./supabase_provider";
import UserInfoContextProvider from "@/app/context/userContext/userContextStore";
import { getMyUserInfoServer } from "./lib/get/getMyUserInfo";
import { Work_Sans } from "next/font/google";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Tipper",
  description: "Network your society",
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
  const supabaseServer = await createServerComponentClient({ cookies });

  // const {
  //     data:{session}
  //   } =  supabaseServer.auth?.getSession(); /// its here where we get the session from supabase. and its details.
  const {
    data: { session },
  } = await supabaseServer.auth?.getSession();
  //  const session=data?.session
  // console.log('session', session)

  let userData;
  if (session) {
    const myUserId = session?.user.id;
    const userInformation = await getMyUserInfoServer(supabaseServer, myUserId);
    userData = userInformation;

    //  userData=session.user
  }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <body
        className={`bg-backGround text-obsidian ${workSans.className} scrollbar overflow-y-scroll`}
      >
        <SupabaseProvider session={session}>
          {/* <SupabaseListener serverAccessToken={session?.access_token} /> */}
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
