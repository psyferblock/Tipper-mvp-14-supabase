import NavBar from "../root-components/NavBar";
import "../globals.css";
import { createServerClient } from "../utils/supabase-server";
import { getMyUserInfoServer } from "../lib/get/getUserInfo";
import { UserInfoContextProvider } from "../context/userContextStore";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const supabaseServer = createServerClient();

  // const {
  //   data: { session },
  // } = await supabaseServer.auth.getSession(); /// its here where we get the session from supabase. and its details.

  // const userInformation = await getMyUserInfoServer(
  //   supabaseServer,
  //   session?.user.id
  // );

  return (
    <div>
      {/* <UserInfoContextProvider
        userInfo={userInformation}
        userId={session?.user.id}
      > */}
        <div className=" bg-slate-800 h-screen w-screen">
          <NavBar />
          <div>{children}</div>
        </div>
      {/* </UserInfoContextProvider> */}
    </div>
  );
}
