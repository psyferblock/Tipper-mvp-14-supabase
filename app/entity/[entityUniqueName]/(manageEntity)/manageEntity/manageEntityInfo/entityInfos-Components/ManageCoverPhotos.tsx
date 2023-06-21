"use client";

import { useEntityContext } from "@/app/context/entityContext/entityContextStore";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
import deleteBasicPictureWithId from "@/app/lib/delete/deleteBasicPictureWithId";
import Image from "next/image";
import { ChangeEvent, Key } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ManageCoverPhotos() {
  // Could be used for when Add Highlight button is clicked to go to new pic
  // const buttonRef = useRef(null);

  // "arrayOfPictureObjects" is an array containing a list of the following object:
  // {
  //   id:"...",
  //   created_at: "...",
  //   media_category:"...",
  //   media_url:"...",
  //   entity_highlight_id:"...",
  // }
  const { arrayOfPictureObjects, setArrayOfPictureObjects, entityId } =
    useEntityContext();

  async function handleUploadImageButton(e: ChangeEvent<HTMLInputElement>) {
    let file;
    // handling the update to bucket
    if (e.target.files) {
      file = e.target.files[0];
    }
    const uuid = uuidv4();
    const storageSchema = "public";
    const bucket = "restaurant_images";
    const pictureUrl = await uploadPictureToBucket({
      file,
      storageSchema: storageSchema,
      bucket: bucket,
      id: entityId,
      uuid,
    });
    let newArray = arrayOfPictureObjects.concat({
      id: null,
      media_url: pictureUrl,
      media_category: "cover_picture",
    });
    setArrayOfPictureObjects(newArray);
  }

  async function handleDeletePictureButton(deletedPicutreObject: {
    id: null;
    media_url: any;
  }) {
    //Locating which picture should be deleted is based on the URL of the picture (could be done with
    // picture Id instead, but would need to upload photo to DB and get its ID which is an extra API
    // call for each picture upload)

    //If picture alrready exists in database, we delete it from database right away
    if (deletedPicutreObject.id != null) {
      await deleteBasicPictureWithId(deletedPicutreObject.id);
    }
    //Remove the picture from the state variable array
    const newArray = arrayOfPictureObjects.filter(
      (pictureObject: { media_url: any }) =>
        pictureObject.media_url != deletedPicutreObject.media_url
    );
    setArrayOfPictureObjects(newArray);
  }

  return (
    <div className="h-fit  rounded-lg bg-white p-3 drop-shadow-lg sm:p-4">
      <div className="sm:flex">
        <div className="grow text-lg font-bold">Announcement Banners</div>
        {/* DESKTOP BUTTON */}

        <label
          htmlFor="add slide"
          className="hidden items-center space-x-1 text-blue-500 sm:flex sm:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-4 w-4"
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
        className="flex w-fit cursor-pointer items-center space-x-1 text-blue-500 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-4 w-4"
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
          onChange={(e) => {
            handleUploadImageButton(e);
          }}
        />
      </label>
      {/* ///////////////////////////////////////////////////////////////// */}

      {/* UPLOAD PICTURE FIELD */}
      <div className=" grid grid-flow-col grid-rows-1 space-x-4 overflow-x-auto sm:space-x-4">
        {/* CONTAINER TO UPLOAD PICTURE */}
        <div className="my-4 flex  h-40 rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 sm:h-56">
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
          <div className="flex space-x-2">
            {arrayOfPictureObjects ? (
              <>
                {arrayOfPictureObjects.map(
                  (pictureObject, key: Key | null | undefined) => (
                    <div
                      key={key}
                      className="relative flex h-40 w-[268px] justify-center rounded-lg border-2 border-gray-400 bg-gray-100 sm:h-56 sm:w-[340px] "
                    >
                      <Image
                        src={pictureObject.media_url}
                        alt="cover photo"
                        fill
                      />
                      <button
                        onClick={() => handleDeletePictureButton(pictureObject)}
                        className="absolute bottom-0 right-0 z-10 mb-3 mr-3 h-fit rounded-lg bg-white"
                      >
                        {/* TRASH ICON */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="z-10 m-1 h-6 w-6 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  )
                )}
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
