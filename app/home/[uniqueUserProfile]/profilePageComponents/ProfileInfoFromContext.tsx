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
      <div className="flex flex-col p-2 ">
        <div>
          <span className="m-2 h-20 w-40 border-2  border-solid border-amethyst p-2">
            {firstName}
          </span>
          <span className="m-2">{lastName}</span>
        </div>
        <div className="space-between m-2 flex ">
          <span className="m-2">birthday: {dateOfBirth}</span>
          <span className="m-2">{gender}</span>
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
