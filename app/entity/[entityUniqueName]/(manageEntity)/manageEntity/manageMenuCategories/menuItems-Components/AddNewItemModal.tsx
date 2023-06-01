"use client";

import { ChangeEvent, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import createMenuItem from "@/app/lib/create/createMenuItem";
import uploadPicture from "@/app/lib/create/uploadPictureToBucket";
import Image from "next/image";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from "uuid"

export default function AddNewItemModal(props) {
  //State
  const [itemName, setItemName] = useState<string | undefined>();
  const [itemDescription, setItemDescription] = useState<string | undefined>();
  const [itemPrice, setItemPrice] = useState<number | undefined>();
  const [itemPictureUrl, setItemPictureUrl] = useState<string | undefined>();

  const buttonRef = useRef(null);

  const router = useRouter();

  const entityId = props.entityId;
  const entityUniqueName=props.entityUniqueName
  console.log('entityUniqueName', entityUniqueName)

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
    setItemPictureUrl("")

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
    const storageSchema="public"
    const bucket="restaurant_images"
    const uuid=uuidv4()
    let pictureUrl = await uploadPicture({
      file,
      storageSchema: storageSchema,
      bucket: bucket,
      id: entityId,
      uuid: uuid,});
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
          <div className="flex min-h-full items-end justify-center p-0 sm:p-4 text-center sm:items-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden sm:rounded-lg rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start w-full">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex items-center justify-between mb-5 sm:mb-0">
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
                            className="w-6 h-6 text-gray-600"
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
                        className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-4 mt-1 mb-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                        className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-4  mt-1 mb-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Description"
                        onChange={(e) => {
                          setItemDescription(e.target.value);
                        }}
                      />
                      {/* PRICE */}
                      <div className="flex justify-between text-xs pb-1">
                        <div>Price</div>
                        <div className="text-gray-400">150</div>
                      </div>
                      {/* PRICE INPUT FIELD */}
                      <div className="flex py-4 items-center border border-gray-300 hover:border-indigo-500 hover:border-2 rounded-lg h-12 pl-4 mb-4">
                        <div className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
                          USD
                        </div>
                        <input
                          type="number"
                          id="price"
                          className="h-6 block w-full border-0 pl-4 pr-12 my-0.5 py-0 focus:border-0 focus:ring-0 sm:text-sm"
                          placeholder="0.00"
                          onChange={(e) => {
                            setItemPrice(e.target.valueAsNumber);
                          }}
                        />
                      </div>
                      {/* IMAGE */}
                      <div className="w-full">
                        <div className="text-xs text-start">Image</div>
                        {/* IMAGE CONTAINER */}
                        <div className="relative bg-gray-100 mt-1 h-36 sm:h-56 w-full flex justify-center rounded-md border-2 border-dashed border-gray-400 px-6 pt-5 sm:pt-[52px] ">
                          {itemPictureUrl ? (
                            <>
                              <Image
                                src={itemPictureUrl}
                                alt="Picture of About Us Section"
                                fill
                              />
                              <button
                                onClick={handleDeletePictureButton}
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
                <div className="bg-gray-50 opacity-95 sm:h-14 pb-2  sm:relative bottom-0 left-0 right-0 px-4 sm:px-6 sm:py-3 flex justify-end sm:justify-between items-center">
                  <div className="hidden sm:block">
                    <button onClick={props.closeModal}>Cancel</button>
                  </div>
                  <div className="space-x-3 sm:space-x-3">
                    <button
                      type="button"
                      className="mt-3 inline-flex justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
