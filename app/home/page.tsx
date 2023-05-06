"use client"
import Link from "next/link";
import React from "react";
import { useSupabase } from "../supabase-provider";
import { useHasMounted } from "../hooks/useHasMounted";

function HomePage() {
    const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  const {session}=useSupabase()
  console.log('session in home page', session)
  return (
    <div className="bg-pearl w-screen h-screen p-2">
      <div>
        <h1 className="h1 text-3xl font-bold mb-4">Profile</h1>
        <div className="bg-amethyst w-full aspect-4/3 rounded-lg p-4">
          <h1 className="text-xl font-semibold">Create an Entity</h1>
          <h1 className="text-md font-medium mt-2 text-slate-800">
            Get verified by us or your community for the entity you run in our
            society.
          </h1>
          <div className="flex object-center ">
            <button className="w-1/2  h-12 mt-10 hover:bg-pearl hover:text-lg rounded-md bg-diamond text-obsidian text-sm">
              <Link href="home/entityCreation" className="">
                Create Now
              </Link>
            </button>
            <button className="w-1/2  h-12 mt-10 hover:bg-pearl hover:text-lg rounded-md bg-diamond text-obsidian text-sm">
              <Link href="home/entity" className="">
                 Access My Entity
              </Link>
            </button>
            
          </div>
        </div>
        <div className="p-3 ">
            <div className="flex justify-between">
                <h1>Basic Info</h1>
                <Link href="#">Edit</Link>
            </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
