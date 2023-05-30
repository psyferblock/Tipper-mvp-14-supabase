"use client";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import updateUserProfile from "@/app/lib/update/updateUserProfile";
import { useSupabase } from "@/app/supabase-provider";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/app/utils/supabase-browser";
import ProfileInfoFromContext from "./ProfileInfoFromContext";

function ProfileBasicInfoSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editing, setEditing] = useState(false);

  const { session } = useSupabase();
  const userId = session?.user.id;
  console.log("userId", userId);

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

  // managing state with context was truly a good day for me
  const handleUserInfo = async () => {
    const userUpdate = await updateUserProfile({
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender: gender,
      contactNumber: contactNumber,
      profilePictureUrl: profilePictureUrl,
      emailAddress: emailAddress,
      uniqueUserName: uniqueUserName,
      hasEntity: hasEntity,
    });
    setEditing(false);
    console.log("updating profile", userUpdate);
  };

  const fileSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
      console.log("selectedFile", file);
      setSelectedFile(file);
      // fileUploadHandler(file)
    }
  };

  const fileUploadHandler = async (file: File) => {
    try {
      const newName = file.name.replace(" ", "");
      console.log("selectedFile at file upload handler", selectedFile);

      setUploading(true);

      if (!file || file.length === 0) {
        throw new Error("You must select an image to upload.");
      }
      // const fileExt = file.name.split(".").pop();
      const uuid = uuidv4();
      const storageSchema = "public";
      const bucket = "avatars";

      // calling supabase to upload the pic

      const pictureUrl = await uploadPictureToBucket({
        file: file,
        storageSchema: storageSchema,
        bucket: bucket,
        id: userId,
        uuid: uuid,
      });
      if (pictureUrl) {
        console.log("pictureUrl", pictureUrl);
        setProfilePicUrl(pictureUrl);
        setUploading(false);
      } else {
        console.log("didnt recieve url ", pictureUrl);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    setUploading(false);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between">
        <h1>Basic Info</h1>
        <button
          className="bg-diamond text-amethyst"
          onClick={() => {
            setEditing(!editing);
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
              profilePictureUrl
                ? profilePictureUrl
                : "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/avatars/b72b3811-cfdd-4f09-9ebc-4464cf3bad89/8df4a812-99b4-4443-984a-f8c1cc68d103"
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
            <span className={`${!editing && "hidden"} p-2`}>
              {selectedFile ? "photo selected" : "Change photo"}
            </span>

            {/* <label htmlFor="profilePicture">
            {uploading ? "Uploading ..." : "Upload avatar"}
          </label> */}
            <input
              id="profilePicture"
              name="profilePicture"
              type="file"
              accept="image/png,image/jpg" // check if this really works
              className="sr-only"
              disabled={!editing}
              onChange={(e) => {
                fileSelectHandler(e);
              }}
              // value={profilePictureUrl || ""}
            />
          </label>

          <button
            className={`${!editing && "hidden"}`}
            onClick={() => {
              fileUploadHandler(selectedFile);
            }}
          >
            upload picture
          </button>
        </div>
        <div className="sm:w-5/12 sm:h-full space-y-3 sm:space-y-3">
          {!editing ? (
            <ProfileInfoFromContext />
          ) : (
            <div>
              <div>
                <div>
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
                </div>
                {/* // date of birth  */}
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
                <label
                  htmlFor="gender"
                  className="text-xs text-gray-600 font-medium"
                >
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileBasicInfoSection;
