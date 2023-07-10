"use client";
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

  const firstN = firstName ? firstName : "First";
  const lastN = lastName ? lastName : "Last";
  return (
    <div className="w-3/4  sm:w-fit">
      <div className="mt-4 content-center overflow-hidden rounded-lg border bg-ruby-tint p-2 px-4 shadow-lg">
        {/* USER PROFILE SECTION*/}
        <div className="py-3 ">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        {/* INFORMATION SECTION */}
        <div className="border-t border-gray-200  py-5 sm:p-0">
          <dl className="">
            {/* NAME SECTION */}
            <div className="py-3 ">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {firstN + " " + lastN}{" "}
              </dd>
            </div>
            {/* EMAIL ADDRESS SECTION */}
            <div className="py-3 ">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {emailAddress}
              </dd>
            </div>
            {/* PHONE NUMBER SECTION */}
            <div className="py-3 ">
              <dt className="text-sm font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {contactNumber ? contactNumber : "no number yet"}
              </dd>
            </div>
            {/* BIRTH DAY SECTION  */}
            <div className="py-3 ">
              <dt className="text-sm font-medium text-gray-500">Birth Day</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {dateOfBirth ? dateOfBirth : "no date yet"}
                <br></br>
              </dd>
            </div>
            {/* ENTITY STATUS SECTION  */}
            <div className="py-3 ">
              <dt className="text-sm font-medium text-gray-500">
                EntityStatus
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {hasEntity ? <span>Owner</span> : <span> Not Yet</span>}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoFromContext;
