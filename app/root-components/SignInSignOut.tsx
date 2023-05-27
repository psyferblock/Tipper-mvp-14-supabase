"use client";
import Link from "next/link";
// import { supabase } from "../utils/supabase-browser";
import { useSupabase } from "../supabase-provider";
import { useRouter } from "next/navigation";
import { useHasMounted } from "../hooks/useHasMounted";
import Image from "next/image";
import { useUsersContext } from "../context/userContext/userContextStore";
import { getMyUserInfos } from "../lib/get/getMyUserInfo";
import { useEffect, useState } from "react";

function SignInSignOut() {
  const [userInfo,setUserInfo]=useState({})
  const { session, supabase } = useSupabase();
  const router = useRouter();

  const userAuthenticated = session ? session?.user.aud : "not authenticated";
  console.log('userAuthenticated ', userAuthenticated )

  const userId=session?.user.id
  //get user data 
  useEffect(()=>{
    const userData= async ()=>{
      const data=await getMyUserInfos(userId)
      setUserInfo(data)  
    }
    userData()
  },[])

const firstName=userInfo?.first_name 
const uniqueUserName=userInfo?.unique_user_name

 
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Redirect the user to the login page
    router.push("/");
  };
  
  const handleHomeButton = () => {
    router.push(`home/${uniqueUserName}`);
  };
  

  

  return (
    <div>
      {userAuthenticated === "authenticated" ? (
        <ul className="flex flex-row">
          <li className="">
            <button onClick={handleHomeButton} className="flex flex-row">
              <h1>{firstName || "sanfour"}</h1>
              <div className="relative rounded-full aspect-1/1 w-10 h-10 ring-2 ring-ruby-tint overflow-hidden mx-auto bg-ruby-tint">
                <Image
                  fill
                  src={
                    "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/avatars/b72b3811-cfdd-4f09-9ebc-4464cf3bad89/8df4a812-99b4-4443-984a-f8c1cc68d103"
                  }
                  alt={"profile picture"}
                />
              </div>
            </button>
          </li>
          <li className="p-2">
            <button onClick={(e) => handleSignOut()}>Sign out</button>
          </li>
        </ul>
      ) : (
        <li className="p-2">
          <Link href="signIn">Sign In</Link>
        </li>
      )}
    </div>
  );
}

export default SignInSignOut;
