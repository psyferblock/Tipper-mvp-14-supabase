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
        className="text-base"
      >
        Sign Out
      </button>
    </>
  );
}
