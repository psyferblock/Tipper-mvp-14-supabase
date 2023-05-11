import NavBar from "../root-components/NavBar";
import "../globals.css";
import { UserContextProvider } from "@supabase/auth-ui-react/dist/components/Auth/UserContext";
import { useSupabase } from "../supabase-provider";
import { createServerClient } from "../utils/supabase-server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    // <div>
    <div>

        <div className=" bg-slate-800 h-screen w-screen">
          <NavBar />
          <div>{children}</div>
        </div>
     </div>
    // </div>
  );
}
