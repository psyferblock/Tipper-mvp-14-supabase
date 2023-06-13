"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabase-browser";

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
        className="pt-1 text-sm font-light text-white hover:text-sky-400 sm:pt-0 sm:text-sm sm:font-normal"
      >
        Sign Out
      </button>
    </>
  );
}
