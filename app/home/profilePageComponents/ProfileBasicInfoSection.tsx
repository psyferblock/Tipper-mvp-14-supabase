import { useUsersContext } from "@/app/context/userContextStore";
import uploadPictureToBucked from "@/app/lib/create/uploadPictureToBucket";
import updateUserProfile from "@/app/lib/update/updateUserProfile";
import { useSupabase } from "@/app/supabase-provider";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";

function ProfileBasicInfoSection() {
  const [editing, setEditing] = useState(true);
  const {
    userId,
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    profilePictureUrl,
    emailAddress,
    uniqueUserName,
    setContactNumber,
    setDateOfBirth,
    setGender,
    setProfilePicUrl,
    setUserId,
    setUserLastName,
    setUserName,
    setEmailAddress,
    setUniqueName,
  } = useUsersContext();

  const handleUserInfo = async () => {
    setUniqueName(firstName,lastName,userId)
    const userUpdate = await updateUserProfile(
      userId,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      contactNumber,
      profilePictureUrl,
      emailAddress,
      uniqueUserName
    );
    console.log("updating profile", userUpdate);
  };

  // const handleChangePhotoButton = async (e: ChangeEvent<HTMLInputElement>) => {
  //   let file;

  //   if (e.target.files) {
  //     file = e.target.files[0];
  //   }
  //   let pictureUrl = await uploadPictureToBucked(file,"avatars", "public");
  //   setProfilePicUrl(pictureUrl);
  // };

  return (
    <div>
      {" "}
      <div className="flex justify-between">
        <h1>Basic Info</h1>
        <button
          className="bg-diamond text-amethyst"
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit
        </button>
      </div>
      {/* THE DIV FOR THE PROFILE PIC AND ALL  */}
      <div className="mx-auto w-1/2 sm:w-2/12 mt-3  ">
        <div className="relative rounded-full aspect-1/1 w-32 h-32 ring-2 ring-ruby-tint overflow-hidden mx-auto bg-ruby-tint">
          <Image
            fill
            alt={"profile Pic"}
            src={
              "data:image/png;base64,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"
            }
          ></Image>
        </div>
        <div className="text-blue-500 flex sm:flex justify-center sm:justify-center space-x-[3px] sm:space-x-[0.6px] text-xs sm:text-xs  ">
          {/* <button disabled={!editing} >Change photo</button> */}
          <label
            htmlFor="profilePicture"
            className={
              editing
                ? "relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                : "text-gray-500"
            }
          >
            <span className="">Change photo</span>
            <input
              id="profilePicture"
              name="profilePicture"
              type="file"
              className="sr-only"
              disabled={!editing}
              onChange={(e) => {
                handleChangePhotoButton(e);
              }}
              value={profilePictureUrl || ""}
            />
          </label>
        </div>
        <div className="sm:w-5/12 sm:h-full space-y-3 sm:space-y-3">
          {/* FIRST NAME */}
          <div className="space-y-1 sm:space-y-1">
            <label
              htmlFor="first name"
              className="text-xs text-gray-600 font-medium pb-5"
            >
              First Name
            </label>
            {/* FIRST NAME INPUT FIELD */}
            <input
              type="text"
              id="first name"
              value={firstName || ""}
              onChange={(e) => setUserName(e.target.value)}
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter First Name"
              disabled={!editing}
            />
          </div>
          {/* LAST NAME */}
          <div className="space-y-1 sm:space-y-1">
            <label
              htmlFor="last name"
              className="text-xs text-gray-600 font-medium pb-5"
            >
              Last Name
            </label>
            {/* LAST NAME INPUT FIELD */}
            <input
              type="text"
              id="last name"
              value={lastName || ""}
              onChange={(e) => setUserLastName(e.target.value)}
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter Last Name"
              disabled={!editing}
            />
          </div>
          <div className="space-y-1 sm:space-y-1">
            <label
              htmlFor="names"
              className="text-xs text-gray-600 font-medium pb-3"
            >
              Date of birth
            </label>
            {/* DATE OF BIRTH INPUT FIELD */}
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              value={dateOfBirth || ""}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="h-12 text-gray-600 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter Date of Birth"
              disabled={!editing}
            />
          </div>
        </div>
        {/* GENDER  */}
        <div className="sm:w-5/12">
          <label htmlFor="gender" className="text-xs text-gray-600 font-medium">
            Gender
          </label>
          <div className="sm:space-y-6">
            <div className="flex items-center flex-start space-x-9 py-2">
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value={"Male"}
                  checked={gender == "Male"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  disabled={!editing}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                >
                  Male
                </label>
              </div>
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value={"Female"}
                  checked={gender == "Female"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  disabled={!editing}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                >
                  Female
                </label>
              </div>
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value={"Neutral"}
                  checked={gender == "Neutral"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  disabled={!editing}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                >
                  Neutral
                </label>
              </div>
            </div>
          </div>
          {/* CONTACT NUMBER  */}
          <div className="space-y-1 sm:space-y-1">
            <label
              htmlFor="names"
              className="text-xs text-gray-600 font-medium"
            >
              Contact Number
            </label>
            <input
              type="number"
              id="contactNumber"
              value={contactNumber || ""}
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12  focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter Number"
              disabled={!editing}
            />
          </div>
        </div>
        <button
          className="w-11/12 h-10 mt-8 hover:bg-ruby-tint hover:text-lg rounded-3xl bg-diamond text-ruby text-md m-3"
          onClick={handleUserInfo}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default ProfileBasicInfoSection;
