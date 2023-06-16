"use client"
import React, { useEffect, useState } from 'react'
import { useSupabase } from '../supabase-provider';
import { getMyUserInfos } from '../lib/get/getMyUserInfo';
import { useRouter } from 'next/navigation';

const Home = () => {
    const [userInfo, setUserInfo] = useState({});
  const { session, supabase } = useSupabase();
  const router = useRouter();
    
  const userId = session?.user.id;
  //get user data
  useEffect(() => {
    const userData = async () => {
      const data = await getMyUserInfos(userId);
      setUserInfo(data);
    };
    userData();
  }, []);

  const firstName = userInfo?.first_name;
  const uniqueUserName = userInfo?.unique_user_name;

 

  const handleHomeButton = () => {
    router.push(`home/${uniqueUserName}`);
  };
  return (
    <div><button className="" onClick={()=>handleHomeButton()} > Home </button></div>
  )
}

export default Home