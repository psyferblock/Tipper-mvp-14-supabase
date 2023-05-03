// "use client";

// import { createBrowserClient } from "./utils/supabase-browser";
// import type { Session } from "@supabase/auth-helpers-nextjs";
// import { createContext, useContext, useState } from "react";

// // type MaybeSession = Session | null;

// // type SupabaseContext = {
// //   supabase: TypedSupabaseClient;
// //   session: MaybeSession;
// // };

// // @ts-ignore
// const Context = createContext<SupabaseContext>();

// export default function SupabaseProvider({
//   children,
//   session,
// }: {
//   children: React.ReactNode;
//   session: any | null;
// }) {
//   const [supabase] = useState(() => createBrowserClient());

//   return (
//     <Context.Provider value={{ supabase, session }}>
//       <>{children}</>
//     </Context.Provider>
//   );
// }

// export const useSupabase = () => useContext(Context);
