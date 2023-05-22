"use client";

import uploadPictureToBucket from "@/lib/create/uploadPictureToBucket";
import deleteBasicPictureWithId from "@/lib/delete/deleteBasicPictureWithId";
import Image from "next/image";
import { ChangeEvent } from "react";
import { useManageEntityInfosContext } from "../Contexts/EntityInfoContext";

export default function ManageCoverPhotos() {
  // Could be used for when Add Highlight button is clicked to go to new pic
  // const buttonRef = useRef(null);

  //"arrayOfPictureObjects" is an array containing a list of the following object:
  // {
  //   id:"...",
  //   created_at: "...",
  //   media_category:"...",
  //   media_url:"...",
  //   entity_highlight_id:"...",
  // }
  // const { arrayOfPictureObjects, setArrayOfPictureObjects } =
  //   useManageEntityInfosContext();
  const arrayOfPictureObjects=["app\public\DefaultProfilePicture.jpg","app\public\japanese-chef-noodles.jpg","app\public\chef-cooking.jpg"]

  // async function handleUploadImageButton(e: ChangeEvent<HTMLInputElement>) {
  //   let file;

  //   if (e.target.files) {
  //     file = e.target.files[0];
  //   }
  //   let pictureUrl = await uploadPictureToBucket(
  //     file,
  //     "images-restaurant",
  //     "public"
  //   );
  //   let newArray = arrayOfPictureObjects.concat({
  //     id: null,
  //     media_url: pictureUrl,
  //     media_category: "cover_picture",
  //   });
  //   setArrayOfPictureObjects(newArray);
  // }
  // console.log("array of pics in manage cover photos:", arrayOfPictureObjects);

  // async function handleDeletePictureButton(deletedPicutreObject) {
  //   //Locating which picture should be deleted is based on the URL of the picture (could be done with
  //   // picture Id instead, but would need to upload photo to DB and get its ID which is an extra API
  //   // call for each picture upload)

  //   //If picture alrready exists in database, we delete it from database right away
  //   if (deletedPicutreObject.id != null) {
  //     await deleteBasicPictureWithId(deletedPicutreObject.id);
  //   }
  //   //Remove the picture from the state variable array
  //   const newArray = arrayOfPictureObjects.filter(
  //     (pictureObject) =>
  //       pictureObject.media_url != deletedPicutreObject.media_url
  //   );
  //   setArrayOfPictureObjects(newArray);
  // }

  return (
    <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
      <div className="sm:flex">
        <div className="text-lg font-bold grow">Announcement Banners</div>
        {/* DESKTOP BUTTON */}

        <label
          htmlFor="add slide"
          className="hidden sm:cursor-pointer sm:flex text-blue-500 items-center space-x-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="">Add Slide</span>
          <input
            id="add slide"
            name="add slide"
            type="file"
            className="sr-only"
           
          />
        </label>
      </div>
      {/* "Caption Goes here" */}
      <div className="text-xs">
        These pictures will appear as a slideshow at the top of your entity's
        page. (Supported formats: PNG, JPG, GIF, JPEG)
      </div>

      {/* ///////////////////////////////////////////////////////////////// */}
      {/* MOBILE BUTTON */}

      <label
        htmlFor="add slide mobile"
        className="sm:hidden w-fit cursor-pointer flex text-blue-500 items-center space-x-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span>Add Slide</span>
        <input
          id="add slide mobile"
          name="add slide mobile"
          type="file"
          className="sr-only"
          // onChange={(e) => {
          //   handleUploadImageButton(e);
          // }}
        />
      </label>
      {/* ///////////////////////////////////////////////////////////////// */}

      {/* UPLOAD PICTURE FIELD */}
      <div className=" space-x-4 sm:space-x-4 grid grid-rows-1 grid-flow-col overflow-x-auto">
        {/* CONTAINER TO UPLOAD PICTURE */}
        <div className="bg-gray-100 flex  sm:h-56 h-40 rounded-lg border-2 border-dashed border-gray-400 my-4">
          {!arrayOfPictureObjects.length && (
            <div className=" mx-auto rounded-md  pt-[52px] ">
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
                  <div className="pl-1">
                    Click on "Add Slide" on the top right to add a slide
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PICTURES UPLOADED SECTION */}
          <div className="space-x-2 flex">
            {arrayOfPictureObjects ? (
              <>
                {arrayOfPictureObjects.map((pictureObject) => (
                  <div className="relative w-[268px] sm:w-[340px] bg-gray-100 flex justify-center sm:h-56 h-40 rounded-lg border-2 border-gray-400 ">
                    <Image
                      src={pictureObject.media_url}
                      alt="cover photo"
                      fill
                    />
                    <button
                      // onClick={() => handleDeletePictureButton(pictureObject)}
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
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
