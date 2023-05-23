"use client";
import CreateEntityButton from "@/app/(entityCreation)/entity-components/CreateEntityButton";
import GoToEntityButton from "@/app/(entityCreation)/entity-components/GoToEntityButton";
import { useUsersContext } from "@/app/context/userContextStore";
import { getEntityOfUser } from "@/app/lib/get/getEntityOfUser";
import { useSupabase } from "@/app/supabase-provider";
import React ,{useEffect,useState} from "react";
import ProfileBasicInfoSection from "./ProfileBasicInfoSection";

function UserMainPageComponent() {
  const [entityState,setEntityState]=useState(null)
  const {
    // userId,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    profilePictureUrl,
    emailAddress,
    uniqueUserName,
    hasEntity,
    setContactNumber,
    setDateOfBirth,
    setGender,
    setProfilePicUrl,
    setUserId,
    setUserLastName,
    setUserName,
    setEmailAddress,
    setUniqueName,
    setHasEntity,
  } = useUsersContext();
  const supabase= useSupabase()
  const { session } = useSupabase();
  const userId= session?.user.id 
  useEffect(()=>{
    const getEntity=async ()=>{
      const entityInfos=await getEntityOfUser(userId)
      setEntityState( entityInfos)
    }
    getEntity()


  },[])

  return (
    <div>
      {" "}
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
              {/* {hasEntity ? 
              <CreateEntityButton />
               : 
              <GoToEntityButton />} */}
                            <CreateEntityButton />
                            <GoToEntityButton  entityInfos={entityState} />

          
            </div>
          </div>
          <div className=" relative p-3 m-2 bg-diamond aspect-4/3 ">
            <ProfileBasicInfoSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMainPageComponent;
