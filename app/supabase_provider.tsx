"use client";

import { createContext, useContext, useState } from "react";
import { createBrowserClient } from "./utils/supabase_browser";

// @ts-ignore
const Context = createContext<SupabaseContext>();

export default function SupabaseProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any | null;
}) {
  const [supabase] = useState(() => createBrowserClient());

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("you have to have context in supabase to use this hook");
  }
  return context;
};
