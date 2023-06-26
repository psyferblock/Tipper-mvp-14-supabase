"use client";
import { useUsersContext } from "@/app/context/userContext/userContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import updateUserProfile, {
  updateProfilePictureUrl,
} from "@/app/lib/update/updateUserProfile";
import { useSupabase } from "@/app/supabase-provider";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/app/utils/supabase-browser";
import ProfileInfoFromContext from "./ProfileInfoFromContext";
import { toUpper } from "@/app/helpers/toUpper";

function ProfileBasicInfoSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editing, setEditing] = useState(false);

  const { session } = useSupabase();
  const userId = session?.user.id;

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
      profileId: profileId,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender: gender,
      contactNumber: contactNumber,
      // profilePictureUrl: profilePictureUrl,
      // emailAddress: emailAddress,
      // uniqueUserName: uniqueUserName,
      // hasEntity: hasEntity,
    });
    await updateProfilePictureUrl({
      profilePictureUrl: profilePictureUrl,
      profileId: profileId,
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
    <div className="rounded-2 w-8/10 mt-3 bg-ruby-tint p-2 sm:w-7/12">
      {" "}
      <div className="flex w-full justify-between ">
        <h1>Basic Info</h1>
        <button
          className=" text-amethyst"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          Edit
        </button>
      </div>
      {/* THE DIV FOR THE PROFILE PIC AND ALL  */}
      <div className=" ">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-ruby-tint ring-2 ring-ruby-tint">
          <Image fill alt={"profile Pic"} src={profilePictureUrl}></Image>
        </div>
        <div className="flex justify-center space-x-[3px] text-xs text-blue-500 sm:flex sm:justify-center sm:space-x-[0.6px] sm:text-xs  ">
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
        <div className="space-y-3 sm:h-full sm:w-5/12 sm:space-y-3">
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
                      className="pb-5 text-xs font-medium text-gray-600"
                    >
                      First Name
                    </label>
                    {/* FIRST NAME INPUT FIELD */}
                    <input
                      type="text"
                      id="first name"
                      value={firstName || ""}
                      onChange={(e) => setUserName(toUpper(e.target.value))}
                      className="mb-3 block h-12 w-full rounded-md border-gray-300 pl-4 pr-12 text-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter First Name"
                      disabled={!editing}
                    />
                  </div>
                  {/* LAST NAME */}
                  <div className="space-y-1 sm:space-y-1">
                    <label
                      htmlFor="last name"
                      className="pb-5 text-xs font-medium text-gray-600"
                    >
                      Last Name
                    </label>
                    {/* LAST NAME INPUT FIELD */}
                    <input
                      type="text"
                      id="last name"
                      value={lastName || ""}
                      onChange={(e) => setUserLastName(toUpper(e.target.value))}
                      className="mb-3 block h-12 w-full rounded-md border-gray-300 pl-4 pr-12 text-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Enter Last Name"
                      disabled={!editing}
                    />
                  </div>
                </div>
                {/* // date of birth  */}
                <div className="space-y-1 sm:space-y-1">
                  <label
                    htmlFor="names"
                    className="pb-3 text-xs font-medium text-gray-600"
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
                    className="mb-3 block h-12 w-full rounded-md border-gray-300 pl-4 pr-12 text-xs text-gray-600 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Date of Birth"
                    disabled={!editing}
                  />
                </div>
              </div>
              {/* GENDER  */}
              <div className="sm:w-5/12">
                <label
                  htmlFor="gender"
                  className="text-xs font-medium text-gray-600"
                >
                  Gender
                </label>
                <div className="sm:space-y-6">
                  <div className="flex-start flex items-center space-x-9 py-2">
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
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-100 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-100 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-100 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
                    className="text-xs font-medium text-gray-600"
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
                    className="block h-12 w-full rounded-md border-gray-300 pl-4 pr-12  text-xs focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Number"
                    disabled={!editing}
                  />
                </div>
              </div>
              <button
                className="text-md m-3 mt-8 h-10 w-11/12 rounded-3xl bg-diamond text-ruby hover:bg-ruby-tint hover:text-lg"
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
