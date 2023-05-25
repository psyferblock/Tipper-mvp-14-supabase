"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
// import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
import uploadPicture from "@/app/lib/create/uploadPictureToBucket";
import ToggleButton from "@/app/root-Components/tools-Components/ToggleButton";
// import { deleteBasicPictureWithUrl } from "@/app/lib/delete/deleteBasicPictureWithId";
// import { deleteAboutUsPicture } from "@/app/lib/update/deleteContactOrAboutUsPicture";
import Image from "next/image";
import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ManageAboutUsPage(props) {
  const {
    entityName,
    logoObject,
    arrayOfPictureObjects,
    entityTags,
    entityPhoneNumber,
    entityEmailAddress,
    instagramUrl,
    isInstagramUrlPublic,
    facebookUrl,
    isFacebookUrlPublic,
    whatsappNumber,
    isWhatsappNumberPublic,
    aboutUsDescription,
    aboutUsPictureUrl,
    isContactUsSectionPublic,
    contactUsDescription,
    contactUsPictureUrl,
    entityOwnerId,
    industryId,
    entityTypeId,
    locationId,
    isContactUsPublic,
    isVerified,
    entityUniqueName,
    entityArea,
    entityAddress,
    entityId,
    setEntityName,
    setLogoObject,
    setArrayOfPictureObjects,
    setEntityTags,
    setPhoneNumber,
    setEmailAddress,
    setInstagramUrl,
    setIsInstagramUrlPublic,
    setFacebookUrl,
    setIsFacebookUrlPublic,
    setWhatsappNumber,
    setIsWhatsappNumberPublic,
    setAboutUsDescription,
    setAboutUsPictureUrl,
    setIsContactUsSectionPublic,
    setContactUsDescription,
    setContactUsPictureUrl,
    setEntityOwnerId,
    setIsVerified,
    setIndustryId,
    setEntityTypeId,
    setLocationId,
    setEntityArea,
    setEntityUniqueName,
    setEntityAddress,
    setEntityId,
    handleTags,
    removeTag,
    changeInput,
  } = useEntityContext();

  async function handleUploadImageButton(e: ChangeEvent<HTMLInputElement>) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }
    const storageSchema = "public";
    const bucket = "restaurant_images";
    const uuid = uuidv4();
    let pictureUrl = await uploadPicture({
      file,
      storageSchema: storageSchema,
      bucket: bucket,
      id: entityId,
      uuid: uuid,
    });
    //Setting the picture URL in context
    setAboutUsPictureUrl(pictureUrl);
  }

  async function handleDeletePictureButton() {
    //Delete picture from DB
    // await deleteAboutUsPicture(entityId);

    //Delete picture from state
    setAboutUsPictureUrl("");
  }

  return (
    <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg space-y-4">
      <div className="sm:flex items-center sm:space-x-6">
        <div className="text-lg font-bold mb-1">About Us</div>
        {/* <div className="flex items-center pb-0.5 space-x-1 sm:py-0 py-1">
          <ToggleButton 
         
          />
          <p className="text-xs sm:mt-0">
            Show "About Us" section on your entity's public page
          </p>
        </div> */}
      </div>
      <div>
        <label htmlFor="about us" className="text-xs text-gray-600 font-medium">
          Brief Description
        </label>
        {/* ABOUT US INPUT FIELD */}
        <textarea
          wrap="soft"
          name="about us"
          id="about us"
          className="wrap h-8 pt-4 px-4 sm:h-32 block w-full rounded-md border-gray-300 pb-24 sm:pl-4 sm:pr-12 sm:mt-1 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
          placeholder="Enter a description of your wonderful business and people operating it!"
          value={aboutUsDescription}
          onChange={(e) => setAboutUsDescription(e.target.value)}
        />
      </div>
      <div>
        {/* UPLOAD PICTURE FIELD */}
        <label className="text-xs text-gray-600 font-medium ">Image</label>
        <div className="relative bg-gray-100 sm:h-56 h-40 rounded-lg border-2 border-dashed border-gray-400 mt-1">
          {aboutUsPictureUrl ? (
            <>
              <Image
                src={aboutUsPictureUrl}
                alt="Picture of About Us Section"
                fill
              />
              <button
                onClick={() => handleDeletePictureButton()}
                className="bg-white rounded-lg h-fit absolute mr-3 mb-3 bottom-0 right-0 z-10"
              >
                {/* TRASH ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 z-10 text-blue-500 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </>
          ) : (
            <div className=" flex justify-center rounded-md px-6 pt-7 ">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="aboutUsPicture"
                    className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="aboutUsPicture"
                      name="aboutUsPicture"
                      type="file"
                      className="sr-only"
                      onChange={(e) => {
                        handleUploadImageButton(e);
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
