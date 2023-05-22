"use client";

import { ChangeEvent, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import createHighlight from "@/app/lib/create/createHighlight";
import Image from "next/image";
import uploadPictureToBucket from "@/app/lib/create/uploadPictureToBucket";
// import insertUrlsToHighlight from "@/app/lib/create/insertUrlsToHighlight";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/app/supabase-provider";

export default function AddNewHighlightModal(props) {
  //State
  const [highlightName, setHighlightName] = useState<string | undefined>();
  const [arrayOfPictureUrls, setArrayOfPictureUrls] = useState([]);

  console.log("arrayOfPictureUrls", arrayOfPictureUrls);

  const buttonRef = useRef(null);

  const router = useRouter();

  // async function handleAddButton() {
  //   const newHighlightId = await createHighlight(highlightName, props.entityId);
  //   await insertUrlsToHighlight(arrayOfPictureUrls, newHighlightId);

  //   props.closeModal();
  //   router.push(`${props.entityId}/manageEntity/highlights`);
  // }

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
  //   let newArray = arrayOfPictureUrls.concat(pictureUrl);
  //   console.log("new array after concat:", newArray);
  //   setArrayOfPictureUrls(newArray);
  // }

  // async function handleDeletePictureButton(deletedPicutreUrl) {
  //   //Locating which picture should be deleted is based on the URL of the picture (could be done with
  //   // picture Id instead, but would need to upload photo to DB and get its ID which is an extra API
  //   // call for each picture upload)

  //   //Remove the picture from the state variable array
  //   const newArray = arrayOfPictureUrls.filter(
  //     (pictureUrl) => pictureUrl != deletedPicutreUrl
  //   );
  //   setArrayOfPictureUrls(newArray);
  // }

  // function handleCancelButton() {
  //   setArrayOfPictureUrls([]);
  //   setHighlightName("");
  //   props.closeModal();
  // }
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={buttonRef}
        // onClose={() => handleCancelButton()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* At the end of this classname in the Dialog.Panel div, the width of the section for pictures */}
              <Dialog.Panel className="relative transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-fit">
                {/* THE BELOW DIV IS THE DIV THAT CONTAINS THE CONTENT OF THE MODAL: INPUT BAR, PICS, CANCEL AND SAVE BAR */}
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:h-[520px] sm:w-[480px]">
                  <div className="sm:flex sm:items-start">
                    {/* DIV FOR THE WIDTH OF THE CONTENT OF THE MODAL EXCEPT FOR THE CANCEL SAVE BAR */}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:w-[400px]">
                      <div className="flex items-center justify-between mb-2">
                        <Dialog.Title
                          as="h3"
                          className="text-lg text-start font-medium leading-6 text-gray-900 mb-4"
                        >
                          Add New Highlight
                        </Dialog.Title>

                        {/* X ICON TO CLOSE MODAL */}
                        <button
                          className="sm:hidden"
                          onClick={props.closeModal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mb-4 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between text-xs">
                        <div>Highlight Name</div>
                        <div className="text-gray-400">150</div>
                      </div>
                      {/* HIGHLIGHT NAME INPUT FIELD */}
                      <input
                        type="text"
                        name="highlight name"
                        id="highlight name"
                        className="h-14 w-full sm:h-12 block rounded-md border-gray-300 sm:pl-4  mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Type highlight name"
                        ref={buttonRef}
                        // value={highlightName}
                        // onChange={(e) => setHighlightName(e.target.value)}
                      />
                      {/* ADD MEDia BUTTON */}
                      <div className="flex justify-end sm:mb-3">
                        <label
                          htmlFor="add slide"
                          className=" cursor-pointer flex text-blue-500 items-center space-x-1"
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
                          <span className="">Add Media</span>
                          <input
                            id="add slide"
                            name="add slide"
                            type="file"
                            className="sr-only"
                            // onChange={(e) => {
                            //   handleUploadImageButton(e);
                            // }}
                          />
                        </label>
                      </div>
                      {/* DIV CONTAINING THE ADD HIGHLIGHT CONTAINER AND PICTURES */}
                      <div className="grid grid-rows-1 grid-flow-col overflow-x-auto space-x-4 sm:space-x-4 sm:w-full">
                        {/* ADD HIGHLIGHT CONTAINER */}
                        {!arrayOfPictureUrls.length && (
                          <div className="bg-gray-100 w-full flex justify-center rounded-md border-2 border-dashed border-gray-400 sm:px-6 sm:w-[400px] sm:h-72 sm:pt-[75px] ">
                            <div className="space-y-1 text-center pt-24 sm:pt-0 pb-20 sm:pb-9">
                              <svg
                                className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
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
                              <div className=" text-xs text-gray-600">
                                <div className="pl-1">
                                  Click on Add Media to add a media
                                </div>
                              </div>
                              <div className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </div>
                            </div>
                          </div>
                        )}
                        {/* ADD HIGHLIGHT PLUS SIGN CONTAINER */}
                        <div className="space-x-2 flex">
                          {arrayOfPictureUrls ? (
                            <>
                              {arrayOfPictureUrls.map((pictureUrl) => (
                                <div className="relative bg-gray-100 w-44 h-72 sm:w-44 sm:h-72  flex justify-center rounded-md border-2 border-dashed border-gray-400 sm:px-6 pt-[52px] ">
                                  <Image
                                    src={pictureUrl}
                                    alt="highlight picture"
                                    fill
                                  />

                                  <button
                                    // onClick={() =>
                                    //   handleDeletePictureButton(pictureUrl)
                                    // }
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
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full ml-3 justify-center rounded-3xl border border-transparent bg-blue-500 px-7 sm:px-11 py-2 sm:py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    // onClick={() => handleAddButton()}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className=" inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-8 py-2 sm:py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    // onClick={() => handleCancelButton()}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
