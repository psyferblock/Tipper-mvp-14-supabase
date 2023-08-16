"use client";
import React from "react";
import { useSupabase } from "../../supabase_provider";

import { useRouter } from "next/navigation";

const SignOut = () => {
  const { session, supabase } = useSupabase();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Redirect the user to the login page
    router.refresh()
    router.push("/");
  };
  return (
    <div className="text-base " >
      <button onClick={(e) => handleSignOut()}>Sign out</button>
    </div>
  );
};

export default SignOut;
