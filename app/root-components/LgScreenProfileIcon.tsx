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

function LgScreenProfileIcon() {
  const [userInfo, setUserInfo] = useState({});
  const { session, supabase } = useSupabase();
  const router = useRouter();

  const { profilePictureUrl } = useUsersContext();
  const userAuthenticated = session ? session?.user.aud : "not authenticated";
  // console.log("userAuthenticated ", userAuthenticated);

  const userId = session?.user.id;
  //get user data
  useEffect(() => {
    const userData = async () => {
      const data = await getMyUserInfos(userId);
      setUserInfo(data);
    };
    userData();
  }, [userId]);

  const firstName = userInfo?.first_name;
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // const capitalName = capitalizeFirstLetter(firstName);
  const uniqueUserName = userInfo?.unique_user_name;

  const handleHomeButton = () => {
    if (uniqueUserName) {
      router.push(`/home/${uniqueUserName}`);
    } else {
      router.push("/")
    }
  };

  return (
    <button
      onClick={() => handleHomeButton()}
      className="text-x-2 flex flex-row items-center justify-evenly"
    >
      <h1 className="px-2 font-serif text-base text-ruby">
        {firstName || "Guest"}
      </h1>
      <div className="aspect-1/1 relative mx-auto h-10 w-10 overflow-hidden rounded-full bg-ruby-tint ring-2 ring-ruby-tint">
        <Image
          width={500}
          height={500}
          src={profilePictureUrl||"https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/tipper/websiteItems/basic%20pics/guest.png"}
          alt={"profile picture"}
        />
      </div>
    </button>
  );
}

export default LgScreenProfileIcon;
