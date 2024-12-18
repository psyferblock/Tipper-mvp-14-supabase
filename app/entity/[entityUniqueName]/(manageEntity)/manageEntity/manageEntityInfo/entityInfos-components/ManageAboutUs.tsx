"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import ToggleButton from "@/app/root-components/tools-components/ToggleButton";
import Image from "next/image";
import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ManageAboutUsPage(props: any) {
  const {
    aboutUsDescription,
    aboutUsPictureUrl,
    isAboutUsPublic,
    entityId,
    setAboutUsDescription,
    setAboutUsPictureUrl,
    setIsAboutUsPublic,
  } = useEntityContext();

  async function handleUploadImageButton(e: ChangeEvent<HTMLInputElement>) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }
    const storageSchema = "public";
    const bucket = "restaurant_images";
    const uuid = uuidv4();
    let pictureUrl = await uploadPictureToBucket({
      file,
      storageSchema: storageSchema,
      bucket: bucket,
      id: entityId,
      uuid: uuid,
    });
    //Setting the picture URL in context
    setAboutUsPictureUrl(pictureUrl);
  }
  function handleToggleButton() {
    setIsAboutUsPublic(!isAboutUsPublic);
  }

  async function handleDeletePictureButton() {
    //Delete picture from DB
    // await deleteAboutUsPicture(entityId);

    //Delete picture from state
    setAboutUsPictureUrl("");
  }

  return (
    <div className="h-fit  space-y-4 rounded-lg bg-white p-3 drop-shadow-lg sm:p-4">
      <div className="items-center sm:flex sm:space-x-6">
        <div className="mb-1 text-lg font-bold">About Us</div>
        <div className="flex items-center space-x-1 py-1 pb-0.5 sm:py-0">
          <ToggleButton
            handleToggleButton={() => handleToggleButton()}
            switchedOn={isAboutUsPublic}
          />
          <p className="text-xs sm:mt-0">
            Show `&quot;`About Us`&quot;` section on your Entity`&apos;`s public
            page
          </p>
        </div>
      </div>
      <div>
        <label htmlFor="about us" className="text-xs font-medium text-gray-600">
          Brief Description
        </label>
        {/* ABOUT US INPUT FIELD */}
        <textarea
          wrap="soft"
          name="about us"
          id="about us"
          className=" wrap peer block h-20 w-full rounded-md  border-2 border-gray-300 p-2 px-4 text-xs focus:border-amethyst focus:ring-amethyst sm:mt-1 sm:h-32 sm:pl-4 sm:pr-12 sm:text-sm"
          placeholder="Enter a description of your wonderful business and people operating it!"
          value={aboutUsDescription}
          onChange={(e) => setAboutUsDescription(e.target.value)}
        />
      </div>
      <div>
        {/* UPLOAD PICTURE FIELD */}
        <label className="text-xs font-medium text-gray-600 ">Image</label>
        <div className="relative mt-1 h-40 rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 sm:h-56">
          {aboutUsPictureUrl ? (
            <>
              <Image
                src={aboutUsPictureUrl}
                alt="Picture of About Us Section"
                fill
              />
              <button
                onClick={() => handleDeletePictureButton()}
                className="absolute bottom-0 right-0 z-10 mb-3 mr-3 h-fit rounded-lg bg-diamond"
              >
                {/* TRASH ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-amythyst z-10 m-1 h-6 w-6"
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
            <div className=" flex justify-center rounded-md px-6 py-7 ">
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
                <div className="flex justify-center text-sm text-gray-600">
                  <label
                    htmlFor="aboutUsPicture"
                    className="focus-within:ring-aethyst relative cursor-pointer rounded-md bg-gray-100 font-medium text-amethyst focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 hover:text-amethyst-shade"
                  >
                    <span className="text-amethyst">Upload a file</span>
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
                  {/* <p className="pl-1">or drag and drop</p> */}
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
