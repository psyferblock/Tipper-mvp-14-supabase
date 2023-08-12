"use client";
import React from "react";
import { useSupabase } from "../../supabase-provider";

import { useRouter } from "next/navigation";

const SignOut = () => {
  const { session, supabase } = useSupabase();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Redirect the user to the login page
    router.push("/");
    router.refresh();
  };
  return (
    <div className="text-base ">
      <button onClick={(e) => handleSignOut()}>Sign out</button>
    </div>
  );
};

export default SignOut;
