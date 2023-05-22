"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase-browser";

export default function NavBarSignOutButton() {
  const router = useRouter();
  async function handleSignOutButton() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <>
      <button
        onClick={handleSignOutButton}
        className="hover:text-sky-400 text-white text-sm sm:text-sm pt-1 sm:pt-0 font-light sm:font-normal"
      >
        Sign Out
      </button>
    </>
  );
}
