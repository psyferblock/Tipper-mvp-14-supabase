"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSupabase } from "../supabase-provider";
import { useHasMounted } from "../hooks/useHasMounted";
import Image from "next/image";
import ProfileBasicInfoSection from "./profilePageComponents/ProfileBasicInfoSection";
import { useUsersContext } from "../context/userContextStore";

function HomePage() {
  const { session } = useSupabase();
 const userInformation=useUsersContext()

  //   const hasMounted = useHasMounted();
  // if (!hasMounted) {
  //   return null;
  // }
  console.log("session in home page", session);
  return (
    <div className="bg-pearl w-screen h-full p-2">
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
              <Link href="home/createEntity" className="">
                Create Now
              </Link>
            </button>
            {/* <button className="w-1/2  h-12 mt-10 hover:bg-pearl hover:text-lg rounded-md bg-diamond text-obsidian text-sm">
              <Link href={`home/${entityUniqueName}/menu/${categoryId}`} className="">
                 Access My Entity
              </Link>
            </button> */}
            {JSON.stringify(userInformation)}
          </div>
        </div>
        <div className=" relative p-3 m-2 bg-diamond aspect-4/3 ">
         <ProfileBasicInfoSection/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
