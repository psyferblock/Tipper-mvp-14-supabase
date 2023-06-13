"use client";

import { ChangeEvent, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import createMenuItem from "@/app/lib/create/createMenuItem";
import uploadPicture from "@/app/lib/create/uploadPictureToBucket";
import Image from "next/image";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function AddNewItemModal(props) {
  //State
  const [itemName, setItemName] = useState<string | undefined>();
  const [itemDescription, setItemDescription] = useState<string | undefined>();
  const [itemPrice, setItemPrice] = useState<number | undefined>();
  const [itemPictureUrl, setItemPictureUrl] = useState<string | undefined>();

  const buttonRef = useRef(null);

  const router = useRouter();

  const entityId = props.entityId;
  const entityUniqueName = props.entityUniqueName;
  console.log("entityUniqueName", entityUniqueName);

  async function handlePublishButton(
    itemName: string,
    itemDescription: string,
    itemPrice: string
  ) {
    //when "Save" in modal is clicked:
    await createMenuItem(
      true,
      itemName,
      itemDescription,
      itemPrice,
      itemPictureUrl,
      props.menuCategoryId
    );

    props.closeModal();
    setItemPictureUrl("");

    const categoryName = props.categoryName;
    const categoryId = props.menuCategoryId;
    //refresh page by rerouting since we cant use router.refresh since calls to DB are in page.tsx (server component)
    router.push(
      `/entity/${entityUniqueName}/manageEntity/manageMenuCategories/${categoryId}?categoryName=${categoryName}`
    );
  }

  async function handleSaveAsDraftButton(
    itemName: string,
    itemDescription: string,
    itemPrice: string
  ) {
    //when "Save As draft" in modal is clicked:
    await createMenuItem(
      false,
      itemName,
      itemDescription,
      itemPrice,
      itemPictureUrl,
      props.menuCategoryId
    );

    props.closeModal();

    const categoryName = props.categoryName;
    const categoryId = props.menuCategoryId;
    //refresh page by rerouting since we cant use router.refresh since calls to DB are in page.tsx (server component)
    router.push(
      `/entity/${entityUniqueName}/manageEntity/manageMenuCategories/${categoryId}?categoryName=${categoryName}`
    );
  }

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
    setItemPictureUrl(pictureUrl);
  }

  async function handleDeletePictureButton() {
    setItemPictureUrl("");
  }

  const saveAsDraftButtonInModalIsClicked = () => {
    //write code to when "Save" is clicked
    props.closeModal();
  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={buttonRef}
        onClose={props.closeModal}
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
          <div className="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:rounded-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="w-full sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="mb-5 flex items-center justify-between sm:mb-0">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 sm:mb-4"
                        >
                          Add New Item
                        </Dialog.Title>
                        <button
                          onClick={props.closeModal}
                          className="sm:hidden"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/* ITEM NAME */}
                      <div className="flex justify-between text-xs">
                        <div>Item Name</div>
                        <div className="text-gray-400">150</div>
                      </div>
                      {/* ITEM NAME INPUT FIELD */}
                      <input
                        type="text"
                        id="item name"
                        className="mb-4 mt-1 block h-12 w-full rounded-md border-gray-300 pl-4 pr-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Item name"
                        ref={buttonRef}
                        onChange={(e) => {
                          setItemName(e.target.value);
                        }}
                      />
                      {/* ITEM DESCRIPTION */}
                      <div className="flex justify-between text-xs">
                        <div>Item Description</div>
                        <div className="text-gray-400">150</div>
                      </div>
                      {/* DESCRIPTION INPUT FIELD */}
                      <input
                        type="text"
                        id="item description"
                        className="mb-4 mt-1 block h-12 w-full rounded-md border-gray-300  pl-4 pr-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Description"
                        onChange={(e) => {
                          setItemDescription(e.target.value);
                        }}
                      />
                      {/* PRICE */}
                      <div className="flex justify-between pb-1 text-xs">
                        <div>Price</div>
                        <div className="text-gray-400">150</div>
                      </div>
                      {/* PRICE INPUT FIELD */}
                      <div className="mb-4 flex h-12 items-center rounded-lg border border-gray-300 py-4 pl-4 hover:border-2 hover:border-indigo-500">
                        <div className="h-12 border-r border-gray-300 pr-4 pt-3 text-gray-500">
                          USD
                        </div>
                        <input
                          type="number"
                          id="price"
                          className="my-0.5 block h-6 w-full border-0 py-0 pl-4 pr-12 focus:border-0 focus:ring-0 sm:text-sm"
                          placeholder="0.00"
                          onChange={(e) => {
                            setItemPrice(e.target.valueAsNumber);
                          }}
                        />
                      </div>
                      {/* IMAGE */}
                      <div className="w-full">
                        <div className="text-start text-xs">Image</div>
                        {/* IMAGE CONTAINER */}
                        <div className="relative mt-1 flex h-36 w-full justify-center rounded-md border-2 border-dashed border-gray-400 bg-gray-100 px-6 pt-5 sm:h-56 sm:pt-[52px] ">
                          {itemPictureUrl ? (
                            <>
                              <Image
                                src={itemPictureUrl}
                                alt="Picture of About Us Section"
                                fill
                              />
                              <button
                                onClick={handleDeletePictureButton}
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
                            </>
                          ) : (
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
                              <div className=" text-xs text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                                >
                                  <span className="underline">
                                    Upload an image
                                  </span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={(e) => {
                                      handleUploadImageButton(e);
                                    }}
                                  />
                                </label>
                                <div className="pl-1">or drag and drop</div>
                              </div>
                              <div className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-0 left-0 right-0 flex  items-center justify-end bg-gray-50 px-4 pb-2 opacity-95 sm:relative sm:h-14 sm:justify-between sm:px-6 sm:py-3">
                  <div className="hidden sm:block">
                    <button onClick={props.closeModal}>Cancel</button>
                  </div>
                  <div className="space-x-3 sm:space-x-3">
                    <button
                      type="button"
                      className="mt-3 inline-flex justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => {
                        handleSaveAsDraftButton(
                          itemName,
                          itemDescription,
                          itemPrice
                        );
                      }}
                    >
                      Save as Draft
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-3xl border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        handlePublishButton(
                          itemName,
                          itemDescription,
                          itemPrice
                        );
                      }}
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
