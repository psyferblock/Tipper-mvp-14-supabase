import { useUsersContext } from "@/app/context/userContext/userContextStore";
import React from "react";

const ProfileInfoFromContext = () => {
    
  const {
    profileId,
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
    setProfileId,
  } = useUsersContext();
  return (
    <div>
      {" "}
      <div className="flex p-2 flex-col ">
        <div>
          <span className="m-2">{firstName}</span>
          <span className="m-2">{lastName}</span>
        </div>
        <div className="flex space-between m-2">
          <span className="">birthday: {dateOfBirth}</span>
          <span className="">{gender}</span>
        </div>
        <div>
          <span>{emailAddress}</span>
          <span>{contactNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoFromContext;