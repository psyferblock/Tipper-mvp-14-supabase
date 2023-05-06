"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "./lib/database.types";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
};

// @ts-ignore

const Context = createContext<SupabaseContext | undefined>(undefined);


export default function SupabaseProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any | null;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
// console.log('session in supabase-provider', session)
 
  return (
    <Context.Provider value={{ supabase,session }}>
      <>{children}</>
    </Context.Provider>
  );
}

// created a hook so as to use context anywhere in the app

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
